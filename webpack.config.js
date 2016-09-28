const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/googled.jsx',
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
		alias: {
			'masonry': 'masonry-layout',
			'isotope': 'isotope-masonry-horizontal'
		}
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.node$/,
        loader: 'node-loader'
      },
			{
				test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|outlayer|get\-size|doc\-ready|eventie|eventemitter|classie|get\-style\-property/,
				loader: 'imports?define=>false&this=>window'
			}
    ]
  },
  devtool: 'source-maps'
};
