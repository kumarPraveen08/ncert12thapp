import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import React from 'react';

import {THEME, BOOK} from '../constants';
import SUBJECTS from '../_data/subjects';
import useBookmarkStore from '../stores/useBookmarkStore';
import {useNavigation} from '@react-navigation/native';
import useThemeStore from '../stores/useThemeStore';
import BannerAdComponent from '../components/BannerAdComponent';

const Bookmark = () => {
  const navigation = useNavigation();
  const {height, width} = useWindowDimensions();
  const mode = width > height ? 'horizontal' : 'portrait';
  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;
  const {user, project, branch} = BOOK;
  const fileSource = `https://raw.githubusercontent.com/${user}/${project}/${branch}/`;

  const handlePress = el => {
    navigation.navigate('Chapter', {
      data: el,
      loc: el.loc,
    });
  };

  const {bookmarks} = useBookmarkStore();
  const books = SUBJECTS.flatMap(el => el.titles).filter(item =>
    bookmarks.includes(item.id),
  );

  return (
    <ScrollView
      style={{backgroundColor: colors.background}}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <View>
        <BannerAdComponent />
      </View>
      <View style={styles.container}>
        {books.map((el, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            style={[
              styles.item,
              {
                backgroundColor: colors.card,
                borderColor: colors.cardBorder,
              },
            ]}
            onPress={() => handlePress(el)}
            accessibilityLabel={`Open ${el.title}`}
            accessibilityHint="Navigates to the chapter screen">
            <Image
              source={{
                uri: `${fileSource}/${el.loc}/${el?.img}`,
              }}
              style={[styles.image, {borderColor: colors.card}]}
              resizeMode="cover"
            />
            <Text style={[styles.title, {color: colors.text}]}>{el.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Bookmark;

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
