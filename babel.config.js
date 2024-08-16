module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin', 'react-native-paper/babel'],
  env: {
    production: {
      // You can specify production-specific plugins here, if needed
    },
  },
};
