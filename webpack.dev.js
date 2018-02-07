const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
  entry: './src/scripts/index.js',
  devtool: 'source-map',
  devServer: {
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'postcss-loader',
        ],
      },
    ],
  },
});
