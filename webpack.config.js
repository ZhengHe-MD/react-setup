const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: 'source-map',
	entry: {
		main: path.resolve('./index'),
	},
	output: {
		path: path.resolve('./dist'),
		filename: 'bundle.js',
		publicPath: '/static',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				include: path.resolve('.'),
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0'],
				},
			},
		],
		preLoaders: [
			{
				test: /\.jsx?$/,
				include: path.resolve('./src'),
				exclude: /node_modules/,
				loader: 'eslint-loader',
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	]
};
