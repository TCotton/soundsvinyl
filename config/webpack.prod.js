/*const path = require('path');
const webpack = require('webpack');*/
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

// webpack plugins
module.exports = webpackMerge(commonConfig, {});
