import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Appbar, Menu} from 'react-native-paper';
import RNFS from 'react-native-fs';
import Share from 'react-native-share';
import useBookmarkStore from '../stores/useBookmarkStore';
import {BackHandler, ToastAndroid} from 'react-native';
import useThemeStore from '../stores/useThemeStore';
import {THEME} from '../constants';

import useInterstitialAd from '../hooks/useInterstitialAd';

const ActionBar = ({title, screen, data, dialogVisible, file}) => {
  const [bookmarked, setBookmarked] = useState(false);
  const [visible, setVisible] = useState(false);
  const navigation = useNavigation();
  const {bookmarks, toggleBookmark} = useBookmarkStore();
  const {showAd, isAdLoaded} = useInterstitialAd();

  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  useEffect(() => {
    setBookmarked(bookmarks.includes(data?.id));
  }, [data]);

  const handleBookmark = () => {
    toggleBookmark(data?.id);
    setBookmarked(!bookmarked);
  };

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleOpen = async () => {
    try {
      const fileExists = await RNFS.exists(file);
      if (fileExists) {
        const options = {
          title: 'Open PDF',
          url: `file://${file}`,
          type: 'application/pdf',
          showAppsToShare: true,
        };

        Share.open(options)
          .then(res => {
            console.log('File shared successfully', res);
          })
          .catch(err => {
            if (err.message === 'User did not share') {
              console.log('User cancelled the share action');
            } else {
              console.error('Error sharing file:', err);
            }
          });
      } else {
        console.log('File does not exist');
        ToastAndroid.show(
          'Please use this with downloaded files',
          ToastAndroid.SHORT,
        );
      }
    } catch (error) {
      console.error('Error checking file existence:', error);
    }
  };

  const showAdIfNeeded = () => {
    if (Math.random() < 0.4) {
      if (isAdLoaded) {
        showAd();
      }
    }
  };

  const handleBackBtn = async () => {
    showAdIfNeeded();
    navigation.goBack();
    return true;
  };

  // Hardware back button press
  const handleBackButtonPress = () => {
    showAdIfNeeded();
    navigation.goBack();
    return true;
  };

  useEffect(() => {
    // Add back button listener
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackButtonPress,
    );

    // Clean up the listener on component unmount
    return () => backHandler.remove();
  }, [isAdLoaded, navigation]);

  return (
    <>
      <Appbar.Header style={{backgroundColor: colors.action}}>
        <Appbar.BackAction onPress={handleBackBtn} color={colors.actionText} />
        <Appbar.Content
          title={title.length > 22 ? title.slice(0, 22) + '...' : title}
          color={colors.actionText}
        />
        {screen === 'chapters' ? (
          <Appbar.Action
            icon={bookmarked ? 'bookmark' : 'bookmark-outline'}
            onPress={handleBookmark}
            color={colors.actionText}
          />
        ) : null}
        {screen === 'pdf' ? (
          <>
            <Appbar.Action
              icon="book-open-page-variant-outline"
              onPress={dialogVisible}
              color={colors.actionText}
            />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action
                  icon="dots-vertical"
                  color={colors.actionText}
                  onPress={openMenu}
                />
              }>
              <Menu.Item
                leadingIcon="file-pdf-box"
                onPress={handleOpen}
                title="Open With"
              />
            </Menu>
          </>
        ) : null}
      </Appbar.Header>
    </>
  );
};

export default ActionBar;
