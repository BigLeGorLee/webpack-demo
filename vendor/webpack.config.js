var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['jquery'],
  },
  output: {
    path: 'build/js',
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'vendor.js')
  ]
};
