const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const BrowserConfig = {
	name: 'browser',
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: './public/js/app.bundle.js',
		publicPath: '/'
	},
	target: 'web',
	devServer: {
		historyApiFallback: true
	},
	stats: {
		colors: true
	},
	devtool: 'source-map',
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'true'
		})
	]
};

const ServerConfig = {
	name: 'server',
	entry: './src/server/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: './bin/server.js',
		libraryTarget: 'commonjs2',
		publicPath: '/'
	},
	node: {
		__dirname: false
	},
	target: 'node',
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
	],

	devServer: {
		historyApiFallback: true
	}
};

const browserWebpackConfig = merge(common, BrowserConfig);
const serverWebpackConfig = merge(common, ServerConfig);

module.exports = [browserWebpackConfig, serverWebpackConfig];
