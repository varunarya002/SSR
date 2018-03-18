const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config ={

	//tell webpack the root file for our server application 

	entry: './src/client/client.js',

	//exporting the generated file

	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public')
	}
} 
module.exports = merge(baseConfig, config);