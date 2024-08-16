import './gesture-handler';

import React, {useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/screens/HomeScreen';
import DrawerComponent from './src/components/DrawerComponent';
import SECTIONS from './src/_data/sections';
import TitleScreen from './src/screens/TitleScreen';
import ChapterScreen from './src/screens/ChapterScreen';
import PdfScreen from './src/screens/PdfScreen';
import {PaperProvider} from 'react-native-paper';
import {APP, THEME} from './src/constants';
import {StatusBar, TouchableOpacity} from 'react-native';
import useThemeStore from './src/stores/useThemeStore';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStack() {
  const navigation = useNavigation();
  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: APP.name,
          headerStyle: {height: 65, backgroundColor: colors.action},
          headerTitleStyle: {
            fontWeight: 'regular',
            fontSize: 18,
            fontFamily: 'sans-serif',
            color: colors.actionText,
          },
          headerLeft: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.openDrawer()}>
              <Ionicons
                name="menu"
                size={30}
                color="white"
                style={{marginLeft: 15}}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Title"
        component={TitleScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Chapter"
        component={ChapterScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pdf"
        component={PdfScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  const {theme} = useThemeStore();
  const colors = theme === 'dark' ? THEME.dark : THEME.light;

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar
          backgroundColor={colors.statusBar}
          barStyle="light-content"
        />
        <Drawer.Navigator
          drawerContent={() => <DrawerComponent data={SECTIONS} />}
          screenOptions={({route, navigation}) => ({
            headerShown: false,
          })}>
          <Drawer.Screen name="Main" component={MainStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
