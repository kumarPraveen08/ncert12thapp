import React, {useState} from 'react';
import {Drawer, IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import useBrowse from '../hooks/useBrowse';
import usePromote from '../hooks/usePromote';
import {APP, THEME} from '../constants';
import {Image, ScrollView, Text, View} from 'react-native';
import useThemeStore from '../stores/useThemeStore';
import useInterstitialAd from '../hooks/useInterstitialAd';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerComponent = ({data}) => {
  const navigation = useNavigation();
  const [active, setActive] = useState('');
  const {showAd, isAdLoaded} = useInterstitialAd();

  const {theme, toggleTheme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  const showAdIfNeeded = () => {
    if (Math.random() < 0.2) {
      if (isAdLoaded) {
        showAd();
      }
    }
  };

  handlePress = (key, id, label) => {
    setActive(id);
    if (key === 'url') {
      useBrowse(APP.privacyPolicy);
    } else if (key === 'mail') {
      useBrowse(APP.support);
    } else if (key === 'rate') {
      usePromote('rate');
    } else if (key === 'share') {
      usePromote('share');
    } else if (key === 'theme') {
      toggleTheme(theme);
    } else if (key === 'screen') {
      showAdIfNeeded();
      navigation.navigate(label);
      return true;
    } else if (key === 'moreApps') {
      usePromote('moreApp');
    }
  };

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: colors.action}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <Image
        style={{height: 128, width: '100%', backgroundColor: colors.action}}
        source={require('../assets/banner.webp')}
        resizeMode="cover"
      />
      {data.map((el, i) => {
        return (
          <Drawer.Section
            key={i}
            title={el.name}
            theme={{
              colors: {onSurfaceVariant: 'lightgray'},
            }}
            showDivider={i !== data.length - 1}>
            {el.items.map((item, index) => {
              return (
                <Drawer.Item
                  key={index}
                  icon={() => (
                    <MaterialCommunityIcons
                      name={
                        item.key === 'theme'
                          ? theme === 'dark'
                            ? item.icon
                            : 'weather-night'
                          : item.icon
                      }
                      size={24}
                      color="lightgray"
                    />
                  )}
                  label={
                    item.key === 'theme'
                      ? theme === 'dark'
                        ? 'Light Mode'
                        : 'Dark Mode'
                      : item.label
                  }
                  theme={{
                    fonts: {
                      labelLarge: {
                        color: 'white',
                      },
                    },
                  }}
                  onPress={() => handlePress(item.key, item.id, item.label)}
                />
              );
            })}
          </Drawer.Section>
        );
      })}
    </ScrollView>
  );
};

export default DrawerComponent;
