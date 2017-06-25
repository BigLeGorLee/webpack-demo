var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.js'
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'hello csdi',
      filename: 'index.html'
    })
  ]
};
