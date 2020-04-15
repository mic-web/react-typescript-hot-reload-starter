const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname, '../src'),
  entry: './index.tsx',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  target: 'web',
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
}
