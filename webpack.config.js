var path    = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: [
    "webpack-dev-server/client?http://0.0.0.0:9090",
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  devtool: 'source-maps',
  debug: true,
  output: {
    path: path.join(__dirname, "public"),
    filename: 'bundle.js'
  },
  resolveLoader: {
    modulesDirectories: ['node_modules']
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: './src/static/', to: path.join(__dirname, "public")},
    ]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/vertx/)
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.scss'],
    alias: {
      Actions: path.resolve(__dirname, 'src/actions/'),
      Containers: path.resolve(__dirname, 'src/containers/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Reducers: path.resolve(__dirname, 'src/reducers/'),
      Utilities: path.resolve(__dirname, 'src/util/'),
      Styles: path.resolve(__dirname, 'src/stylesheets/'),
      Src: path.resolve(__dirname, 'src/')
    }
  },
  module: {
    loaders: [
      { test: /\.jsx?$/,    loader: 'react-hot!babel?plugins[]=transform-decorators-legacy', include: path.join(__dirname, 'src'), exclude: '/node_modules/' },
      { test: /\.scss$/,    loader: 'style!css!sass' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  node: {
    fs: "empty"
  }
};