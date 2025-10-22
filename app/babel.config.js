module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            '@': './',
            '@app': './app',
            '@assets': './assets',
            '@components': './components',
            '@constants': './constants',
            '@hooks': './hooks',
            '@scripts': './scripts',
          },
        },
      ],
      // Expo Router için gerekli
      'expo-router/babel',
    ],
  };
};
