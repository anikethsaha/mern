const path = require('path');
var webpack = require('webpack');
// const nodeExternals = require('webpack-node-externals');
const BrowserConfig = {
	name: 'browser',
	entry: './src/client/index.js',
	output: {
		path: path.resolve(__dirname),
		filename: './public/js/app.bundle.js',
		publicPath: '/'
	},
	target: 'web',
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			}
		]
	},
	devServer: {
		historyApiFallback: true
	},
	stats: {
		colors: true
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
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
	// externals: [nodeExternals()],
	plugins: [
		new webpack.DefinePlugin({
			__isBrowser__: 'false'
		})
	],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
							modules: true
						}
					}
				]
			}
		]
	},
	optimization: {
		splitChunks: {
			chunks: 'async',
			minSize: 30000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 5,
			maxInitialRequests: 3,
			automaticNameDelimiter: '~',
			name: true,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true
				}
			}
		}
	},
	devServer: {
		historyApiFallback: true
	}
};

module.exports = [BrowserConfig, ServerConfig];
// module.exports =[ BrowserConfig ];
