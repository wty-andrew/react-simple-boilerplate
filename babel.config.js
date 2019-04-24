module.exports = {
  presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react'],
  env: {
    test: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    },
  },
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    [
      'module-resolver',
      {
        alias: {
          reducers: './common/reducers',
        },
      },
    ],
  ],
}
