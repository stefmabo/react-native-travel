const config = require('./tsconfig.json');

const { baseUrl, paths } = config.compilerOptions;

/*
getAliases function is here to reduce the frustration of adding new aliases
it uses baseUrl and paths properties from our tsconfig.json and
constructs a new object in the format required by the plugin
*/
const getAliases = () => {
  return Object.entries(paths).reduce((aliases, alias) => {
    const key = alias[0].replace('/*', '');
    const value = baseUrl + alias[1][0].replace('*', '');
    return {
      ...aliases,
      [key]: value,
    };
  }, {});
};

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'nativewind/babel',
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.tsx',
          '.ios.js',
          '.ios.tsx',
        ],
        alias: getAliases(),
      },
    ],
  ],
};
