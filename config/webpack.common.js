const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	target: 'web',
	resolve: {
		alias: {
			'single-spa': path.resolve(global.__base, '/node_modules/single-spa/lib/single-spa.js'),
			Nav: path.resolve(global.__base, '/app/front/nav.js'),
			Main: path.resolve(global.__base, '/app/front/main.js'),
			Header: path.resolve(global.__base, '/app/front/header.js'),
			CategoriesHomepage: path.resolve(global.__base, '/app/front/categoriesHomepage.js'),
			Footer: path.resolve(global.__base, '/app/front/footer.js'),
			Error: path.resolve(global.__base, '/app/front/error.js'),
			RecordListing: path.resolve(global.__base, '/app/front/recordListing.js'),
			About: path.resolve(global.__base, '/app/front/about.js'),
			MyAccount: path.resolve(global.__base, '/app/front/account.js'),
			vue: 'vue/dist/vue.js',
		}
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.(js|jsx)$/,
				exclude: (/node_modules/),
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
					}
				]
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: true,
							sourceMap: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: true,
							sourceMap: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					},
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'react-svg-loader',
						options: {
							jsx: true // true outputs JSX tags
						}
					}
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	devtool: 'inline-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
	]
};