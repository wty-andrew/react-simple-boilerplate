const DEVELOPMENT = process.env.NODE_ENV === 'development'

module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV)
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      DEVELOPMENT && 'react-hot-loader/babel',
      '@babel/plugin-proposal-class-properties',
      [
        'module-resolver',
        {
          alias: {
            reducers: './common/reducers',
          },
        },
      ],
    ].filter(Boolean),
  }
}
