const webpack = require('webpack');
const path = require('path');

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.ts(x)?$/,
				loader: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			},
			{
				test: /\.png$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							mimetype: 'image/png'
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: [
			'.tsx',
			'.ts',
			'.js'
		]
	}
};

module.exports = config;
