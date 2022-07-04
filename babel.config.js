module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            src: './src',
            utils: './src/utils',
            store: './src/store',
            actions: './src/store/actions',
            reducers: './src/store/reducers',
            types: './src/store/types',
            screens: './src/screens',
          },
        },
      ],
    ],
  };
};
