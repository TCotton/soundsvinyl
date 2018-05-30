const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
	resolve: {
		alias: {
			AddTodo: path.resolve(__dirname, 'app/components/AddTodo.js'),
			Todo: path.resolve(__dirname, 'app/components/Todo.js'),
			TodoApp: path.resolve(__dirname, 'app/components/TodoApp.js'),
			TodoList: path.resolve(__dirname, 'app/components/TodoList.js'),
			TodoSearch: path.resolve(__dirname, 'app/components/TodoSearch.js'),
			TodoAPI: path.resolve(__dirname, 'app/api/TodoAPI.js'),
			actions: path.resolve(__dirname, 'app/actions/index.js'),
			reducers: path.resolve(__dirname, 'app/reducers/index.js'),
			configureStore: path.resolve(__dirname, 'app/store/configureStore.js'),
		}
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: (/node_modules|bower_components/),
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
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'css-loader' // translates CSS into CommonJS
					},
					{
						loader: 'sass-loader' // compiles Sass to CSS
					}
				]
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
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
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		})
	]
};
