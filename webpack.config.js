const path = require('path');
const webpack = require('webpack');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

module.exports = {
  mode: env,

  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new SpriteLoaderPlugin({
      plainSprite: true,
      spriteAttrs: {
        style: `
          position: absolute;
          z-index: -1;
          width: 1px;
          hight: 1px;
        `.replace(/\s+/, '')
      }
    })
  ],

  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: isProd
            }
          }
        ]
      }
    ]
  }
};