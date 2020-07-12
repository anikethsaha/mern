const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { resolve } = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
const BrowserConfig = {
	name: 'browser',
	mode: 'production',
	entry: './src/client/index.js',
	output: {
		path: resolve(__dirname),
		filename: '../dist/public/js/app.bundle.js',
		publicPath: '/',
	},
	target: 'web',
};

const ServerConfig = {
	name: 'server',
	entry: './src/server/index.js',
	mode: 'production',
	output: {
		path: resolve(__dirname),
		filename: '../dist/server/index.js',
		libraryTarget: 'commonjs2',
		publicPath: '/',
	},
	node: {
		__dirname: false,
	},
	target: 'node',
};

const browserWebpackConfig = merge(common, BrowserConfig);
const serverWebpackConfig = merge(common, ServerConfig);

module.exports = [browserWebpackConfig, serverWebpackConfig];
