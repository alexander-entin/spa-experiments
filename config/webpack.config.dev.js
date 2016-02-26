var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'eval-source-map',
	entry: {
		app: ['webpack-hot-middleware/client', './app/main']
	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'app.js',
		publicPath: '/dist/'
	}
  ,	plugins: [
		new webpack.HotModuleReplacementPlugin()
	  ,	new webpack.NoErrorsPlugin()
//	  , new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: [path.join(__dirname, '../app'), path.join(__dirname, '../lib')]
			}
		  , {
				test: /\.css$/
			  , loader: 'style!css'
			}
		]
	}
}
