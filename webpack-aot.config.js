const helper = require('./helper');
const ngToolsWebpack = require('@ngtools/webpack');
var webpack = require('webpack');
const AotPlugin = require('@ngtools/webpack').AotPlugin;

module.exports = {
  resolve: {
      extensions: ['.ts', '.js', '.html']
  },
  entry: {
    'polyfills':  helper.root('src', 'polyfills.ts'),
    'vendors':  helper.root('src', 'vendors.ts'),
    'app': helper.root('src', 'main.ts') 
  },
  output: {
    path: helper.root('dist'),
    filename: '[name].bundle.js',
},
  plugins: [ 
    new AotPlugin({
      tsConfigPath: helper.root('tsconfig.json'),
      entryModule: helper.root('src', 'app', 'app.module#AppModule'),
      debug:true
  }),
  ],
  module: {
    loaders: [
      { test: /\.scss$/, loaders: ['raw-loader', 'sass-loader'] },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.ts$/, loaders: ['@ngtools/webpack'] }
    //   {
    //     test: /\.ts$/,
    //     loaders: [
    //         'awesome-typescript-loader',
    //         'angular-router-loader?aot=true&genDir=aot/',
    //         'angular2-template-loader',
    //     ]
    // },
    ]
  },
  devServer: {
    historyApiFallback: true
  }
};