const path = require('path');

module.exports = {
    mode: 'development',

//  entry: './build/js/app.min.js',
//  entry: './src/billing.js',
  entry: './src/average_balance.js',
// does not work:
//    entry: './src',
//  entry: './build/js/src/app.min.js',
//  module: {
//    loaders: [
//      {
//        test: /.jsx?$/,
//        loader: 'babel-loader',
//        exclude: /node_modules/,
//        query: {
//          presets: ['es2015', 'react']
//        }
//      }
//    ]
//  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
};