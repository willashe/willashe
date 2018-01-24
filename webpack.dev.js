const webpack = require('webpack');
const merge = require('webpack-merge');
const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
  entry: {
    app: ['react-hot-loader/patch', './src/index.js'],
  },
  output: {
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
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
