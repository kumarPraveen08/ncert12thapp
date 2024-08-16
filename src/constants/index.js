import {Dimensions} from 'react-native';

export const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

export const THEME = {
  light: {
    text: '#40354f',
    background: '#edf1f0',
    statusBar: '#564b65',
    card: '#dde6e4',
    cardBorder: '#564b6566',
    action: '#4c405c',
    actionText: 'white',
    trash: '#564b65',
    btn: '#40354f',
    bottomIndicator: '#303646',
    progress: 'gray',
  },
  dark: {
    text: 'white',
    background: '#303646',
    statusBar: '#141e29',
    card: '#18222c',
    cardBorder: '#18222c66',
    action: '#18222c',
    actionText: 'white',
    trash: 'lightgray',
    btn: '#18222c',
    bottomIndicator: '#303646',
    progress: 'lightgray',
  },
};

export const ADS = {
  banner: 'ca-app-pub-5874253013765779/2772129533',
  interstitial: 'ca-app-pub-5874253013765779/5482053357',
};

export const BOOK = {
  protocol: 'https',
  domain: 'github.com',
  user: 'kumarPraveen08',
  project: 'ncert12thbooks',
  access: 'raw',
  branch: 'main',
};

export const APP = {
  name: 'NCERT 12th All Books',
  share:
    'NCERT 12th All Books Application: https://play.google.com/store/apps/details?id=',
  package: 'com.ncert12thbooks',
  rate: 'market://details?id=',
  dev: 'https://play.google.com/store/apps/dev?id=7754257975443331671',
  support: 'mailto:teamivyadu@gmail.com',
  privacyPolicy:
    'https://www.termsfeed.com/live/29bea1f4-2961-4c5a-9224-bb8ae4f31f42',
};
