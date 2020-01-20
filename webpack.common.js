// const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const optimization = {
	minimize: true,
	minimizer: [
		new TerserPlugin({
			terserOptions: {
				warnings: false,
				compress: {
					comparisons: false
				},
				parse: {},
				mangle: true,
				output: {
					comments: false,
					ascii_only: true
				}
			},
			parallel: true,
			cache: true,
			sourceMap: true
		})
	]
	// nodeEnv: 'production',
	// sideEffects: true,
	// concatenateModules: true,
	// runtimeChunk: 'single',
	// splitChunks: {
	// 	chunks: 'all',
	// 	maxInitialRequests: 10,
	// 	minSize: 0,
	// 	cacheGroups: {
	// 		vendor: {
	// 			test: /[\\/]node_modules[\\/]/,
	// 			name(module) {
	// 				const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
	// 				return `npm.${packageName.replace('@', '')}`;
	// 			}
	// 		}
	// 	}
	// }
};
const devSplitChunk = {
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
};
module.exports = {
	plugins: [
		new webpack.DefinePlugin({
			__isDev__: process.env.NODE_ENV === 'development'
		}),
		new MiniCssExtractPlugin({ filename: 'styles.css' }),
	],

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'babel-loader' },
					{
						loader: 'linaria/loader',
						options: { sourceMap: dev },
					},
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: process.env.NODE_ENV !== 'production',
						},
					},
					{
						loader: 'css-loader',
						options: { sourceMap: dev },
					},
				],
			},
			{
				test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg)$/,
				use: [{ loader: 'file-loader' }],
			},
		]
	},
	optimization: process.env.NODE_ENV === 'production' ? optimization : devSplitChunk
};
