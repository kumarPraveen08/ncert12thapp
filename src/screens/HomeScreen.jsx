import React, {useEffect, useState} from 'react';
import {BottomNavigation, Portal, Snackbar} from 'react-native-paper';

import Home from '../routes/Home';
import Bookmark from '../routes/Bookmark';

import ROUTES from '../_data/bottomRoutes';
import {THEME} from '../constants';
import useThemeStore from '../stores/useThemeStore';
import {Alert, BackHandler, StyleSheet, Text, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const HomeScreen = () => {
  const [active, setActive] = useState(0);
  const {theme} = useThemeStore();
  const isFocused = useIsFocused();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    bookmark: Bookmark,
  });

  const [visible, setVisible] = useState(false);
  const [exitApp, setExitApp] = useState(false);

  const showSnackbar = () => setVisible(true);

  const hideSnackbar = () => setVisible(false);

  const handleBackPress = () => {
    if (exitApp) {
      BackHandler.exitApp();
      return true;
    } else {
      showSnackbar();
      setExitApp(true);
      setTimeout(() => setExitApp(false), 2000); // Reset the flag after 2 seconds
      return true;
    }
  };

  useEffect(() => {
    if (isFocused) {
      BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    } else {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    }

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [isFocused, exitApp]);

  return (
    <>
      <Portal>
        <Snackbar
          visible={visible}
          onDismiss={hideSnackbar}
          style={{backgroundColor: colors.background}}
          action={{
            label: 'OK',
            onPress: hideSnackbar,
          }}>
          <Text style={{color: colors.text}}>
            Please press back button once more to exit.
          </Text>
        </Snackbar>
      </Portal>
      <BottomNavigation
        navigationState={{index: active, routes: ROUTES}}
        onIndexChange={setActive}
        renderScene={renderScene}
        barStyle={{
          backgroundColor: colors.action,
          borderTopWidth: 1,
          borderTopColor: colors.action,
        }}
        activeColor={colors.actionText}
        inactiveColor="lightgray"
        activeIndicatorStyle={{backgroundColor: colors.bottomIndicator}}
      />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
