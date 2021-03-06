var path = require('path')
var webpack = require('webpack')

module.exports = {
	devtool: 'source-map',
	entry: {
		app: './app/main'
/*  	  , vendors: [
  	  		'moment'
  	  	  , 'history'
  	  	  , 'react'
		  , 'react-dom'
		  , 'react-redux'
		  , 'react-router'
		  , 'redux'
		  , 'redux-simple-router'
  	  	]
*/	},
	output: {
		path: path.join(__dirname, '../dist'),
		filename: 'app.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin()
	  ,	new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	  ,	new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
//	  , new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: [path.join(__dirname, '../app'), path.join(__dirname, '../lib')],
				query: {
					'plugins': ['recharts'],
					'presets': ['es2015']
				}
			}
		  , {
				test: /\.css$/
			  , loader: 'style!css'
			}
		]
	}
};
