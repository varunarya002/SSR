const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals')
const config ={
	// buliding bundle for nodeJS rahter than for browser
	target: 'node',
	//tell webpack the root file for our server application 

	entry: './src/index.js',

	//exporting the generated file

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
	},
	externals: [webpackNodeExternals()]
} 
module.exports = merge(baseConfig, config);