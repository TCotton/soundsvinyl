const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// the path(s) that should be cleaned
const pathsToClean = [
	global.__base + '/dist',
]

module.exports = webpackMerge(commonConfig, {
	mode: 'production',
	stats: {
		colors: true,
		hash: true,
		timings: true,
		assets: true,
		chunks: true,
		chunkModules: true,
		modules: true,
		children: true,
	},
	devtool: 'hidden-source-map',
	plugins: [
		new CleanWebpackPlugin(pathsToClean),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),

		// below works for React, but don't know what will happen with vueJS:
		// https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a

		/*	new webpack.optimize.DedupePlugin(), //dedupe similar code
			new webpack.optimize.UglifyJsPlugin(), //minify everything
			new webpack.optimize.AggressiveMergingPlugin()//Merge chunks*/
	]
});
