import {View, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {FAB} from 'react-native-paper';
import {useRoute} from '@react-navigation/native';

import ActionBar from '../components/ActionBar';
import useBrowse from '../hooks/useBrowse';
import Chapter from '../components/Chapter';
import {BOOK, THEME} from '../constants';
import useThemeStore from '../stores/useThemeStore';
import useInterstitialAd from '../hooks/useInterstitialAd';

const ChapterScreen = () => {
  const route = useRoute();
  const {data, loc} = route.params;
  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  const {showAd, isAdLoaded} = useInterstitialAd();

  const handleCart = () => {
    useBrowse(data?.out);
  };

  return (
    <>
      <ActionBar title={data.title} screen="chapters" data={data} />
      <ScrollView
        style={{backgroundColor: colors.background}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.list}>
          {data.chapters.map((chapter, index) => {
            return (
              <Chapter
                key={index}
                data={chapter}
                index={index}
                colors={colors}
                loc={loc}
                showAd={showAd}
                isAdLoaded={isAdLoaded}
              />
            );
          })}
        </View>
      </ScrollView>
      <FAB
        icon="cart"
        style={[styles.fab, {backgroundColor: colors.action}]}
        onPress={handleCart}
        color={colors.actionText}
      />
    </>
  );
};

export default ChapterScreen;

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 80,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
