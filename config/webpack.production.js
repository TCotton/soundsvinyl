const webpack = require( 'webpack' );
const path = require( 'path' );
const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const SizePlugin = require( 'size-plugin' );
const CompressionPlugin = require( 'compression-webpack-plugin' );
const TerserPlugin = require('terser-webpack-plugin');
// const ImageminPlugin = require('imagemin-webpack-plugin');

// the path(s) that should be cleaned
const pathsToClean = [
	global.__base + '/dist',
]

module.exports = webpackMerge( commonConfig, {
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
	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin({
			cache: true,
			parallel: true,
			sourceMap: true,
			extractComments: 'all',
			warningsFilter: (warning, source) => {
				if (/Dropping unreachable code/i.test(warning)) {
					return true;
				}

				if (/filename\.js/i.test(source)) {
					return true;
				}

				return false;
			},
		}),
		],
	},
	module: {
		rules: [
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				exclude: ( /node_modules/ ),
				use: [
					{
						loader: 'file-loader'
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75
							}
						}
					}
				]
			}
		],
	},
	devtool: 'hidden-source-map',
	output: {
		filename: '[name].[contenthash].js',
		chunkFilename: '[name].[contenthash].chunk.js',
		path: path.resolve( global.__base, 'dist' )
	},

	plugins: [
		new CleanWebpackPlugin( pathsToClean ),

		new webpack.DefinePlugin( {
			'process.env': {
				'NODE_ENV': JSON.stringify( 'production' )
			}
		} ),

		// /Applications/MAMP/htdocs/soundsvinyl/app/assets/images
		new CopyWebpackPlugin( [
			{
				from: global.__base + '/src/faviconImages',
				to: global.__base + '/dist/faviconImages'
			},
			{
				from: global.__base + '/src/googlef01e5e1b7cdb1f49.html',
				to: global.__base + '/dist/googlef01e5e1b7cdb1f49.html'
			},
			{
				from: global.__base + '/app/assets/graphics',
				to: global.__base + '/dist/app/assets/graphics'
			},
			{
				from: global.__base + '/src/robots.txt',
				to: global.__base + '/dist/robots.txt'
			},
			{
				from: global.__base + '/app/assets/images',
				to: global.__base + '/dist/app/assets/images'
			}
		] ),

		new CompressionPlugin( {
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),

		new SizePlugin(),

		// new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
		// new ImageminPlugin({ test: global.__base + '/dist/**' }),

		// below works for React, but don't know what will happen with vueJS:
		// https://medium.com/@rajaraodv/two-quick-ways-to-reduce-react-apps-size-in-production-82226605771a

		/*	new webpack.optimize.DedupePlugin(), //dedupe similar code
			new webpack.optimize.UglifyJsPlugin(), //minify everything
			new webpack.optimize.AggressiveMergingPlugin()//Merge chunks*/
	]
} );
