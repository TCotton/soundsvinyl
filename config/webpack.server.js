const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const path = require('path')
const commonConfig = require('./webpack.common.js')

module.exports = webpackMerge(commonConfig, {
	target: 'node',
	externals: [nodeExternals()],
	entry: path.resolve(global.__base, '/src/server/index.js'),
	devtool: 'cheap-module-eval-source-map',
	output: {
		path: path.resolve(global.__base, 'dist'),
		publicPath: '',
		filename: 'server.js',
		library: 'app',
		libraryTarget: 'umd'
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.scss$/,
				loader: 'css-loader/locals'
			},
			{
				test: /\.(ttf|eot|otf|svg|png)$/,
				loader: 'file-loader?emitFile=false'
			},
			{
				test: /\.(woff|woff2)$/,
				loader: 'url-loader?emitFile=false'
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': '"production"',
			global: {}, // bizarre lodash(?) webpack workaround
			'global.GENTLY': false // superagent client fix
		})
	]
})
