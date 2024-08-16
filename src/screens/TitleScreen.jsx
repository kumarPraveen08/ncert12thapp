import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';

import {THEME, BOOK} from '../constants';
import ActionBar from '../components/ActionBar';
import useThemeStore from '../stores/useThemeStore';

import BannerAdComponent from '../components/BannerAdComponent';

const TitleScreen = () => {
  const route = useRoute();
  const {data} = route.params;

  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  const navigation = useNavigation();

  const {user, project, branch} = BOOK;
  const fileSource = `https://raw.githubusercontent.com/${user}/${project}/${branch}/`;

  const handlePress = title => {
    navigation.navigate('Chapter', {
      data: title,
      loc: title.loc,
    });
  };

  return (
    <>
      <ActionBar title={data.title} screen="title" />
      <ScrollView
        style={{backgroundColor: colors.background}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {data.titles.map((title, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={[
                styles.item,
                {
                  backgroundColor: colors.card,
                  borderColor: colors.cardBorder,
                },
              ]}
              onPress={() => handlePress(title)}>
              <Image
                source={{
                  uri: `${fileSource}/${title.loc}/${title?.img}`,
                }}
                style={[styles.image, {borderColor: colors.card}]}
                resizeMode="cover"
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[styles.title, {color: colors.text}]}>
                  {title.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
          <BannerAdComponent />
        </View>
      </ScrollView>
    </>
  );
};

export default TitleScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    borderRadius: 5,
    borderWidth: 2,
    width: '48.5%',
    marginBottom: 10,
    height: 268,
  },
  title: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  image: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    overflow: 'hidden',
    width: '100%',
    height: '82%',
    borderWidth: 0.75,
  },
});
