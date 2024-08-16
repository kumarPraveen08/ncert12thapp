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
import {useNavigation} from '@react-navigation/native';
import SUBJECTS from '../_data/subjects';
import useThemeStore from '../stores/useThemeStore';
import {THEME} from '../constants';

const Home = () => {
  const navigation = useNavigation();

  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  const handlePress = subject => {
    navigation.navigate('Title', {data: subject});
  };

  return (
    <ScrollView
      style={{backgroundColor: colors.background}}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {SUBJECTS.map((subject, index) => (
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
            onPress={() => handlePress(subject)}>
            <Image
              source={subject?.img}
              style={[styles.image, {borderColor: colors.cardBorder}]}
            />
            <Text style={[styles.title, {color: colors.text}]}>
              {subject.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: '48.5%',
    height: 120,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
  },
});
