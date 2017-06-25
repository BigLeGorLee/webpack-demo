var webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
  	path: 'build/js',
    filename: 'app.js'
  },
  plugins: [
  	new webpack.DefinePlugin({
	  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
	  __VERSION__: "'2.1'"
	})
  ]
};
