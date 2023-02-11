const path = require('path');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    }),
    new HtmlWebpackPlugin()
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
  },

  optimization: {
    moduleIds: 'hashed',
    moduleIds: 'named',
    chunkIds: 'named'
  }
};