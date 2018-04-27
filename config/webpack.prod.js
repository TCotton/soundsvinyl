/*const path = require('path');
const webpack = require('webpack');*/
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// webpack plugins
module.exports = webpackMerge(commonConfig, {});

/*	new MiniCssExtractPlugin({
	// Options similar to the same options in webpackOptions.output
	// both options are optional
	filename: '[name].css',
	chunkFilename: '[id].css',
}),*/
