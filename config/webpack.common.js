const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
	mode: 'development',
	entry: [
		require.resolve('./polyfills'),
		resolveApp('src/root-application/root-application.js'),
	],

	output: {
		// options related to how webpack emits results

		path: path.resolve(global.__base, 'dist'), // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)

		filename: 'bundle.js', // string
		// the filename template for entry chunks

		publicPath: '/assets/', // string
		// the url to the output directory resolved relative to the HTML page

		library: 'MyLibrary', // string,
		// the name of the exported library

		libraryTarget: 'umd', // universal module definition
		// the type of the exported library

		/* Advanced output configuration (click to show) */
	},

	module: {
		strictExportPresence: true,
		// configuration regarding modules
		rules: [
			// rules for modules (configure loaders, parser options, etc.)
			{
				test: /\.(js|jsx|mjs)$/,
				enforce: 'pre',
				use: [
					{
						options: {
							eslintPath: require.resolve('eslint'),
							ignore: false,
							useEslintrc: true,
						},
						loader: require.resolve('eslint-loader'),
					},
				],
				include: resolveApp('src'),
			},
			{
				test: /\.(js|mjs)$/,
				include: resolveApp('src'),
				loader: require.resolve('babel-loader'),
				options: {
					// @remove-on-eject-begin
					babelrc: true,
					presets: 'es2015',
					// @remove-on-eject-end
					// This is a feature of `babel-loader` for webpack (not Babel itself).
					// It enables caching results in ./node_modules/.cache/babel-loader/
					// directory for faster rebuilds.
					cacheDirectory: false,
				},
			},
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader', options: { sourceMap: true } },
					{ loader: 'css-loader', options: { sourceMap: true } },
					{
						loader: 'postcss-loader', options: {
							sourceMap: true,
							exec: true,
							ident: 'postcss',
							plugins: () => [
								require('autoprefixer')(),
							],
						},
					},
					{ loader: 'sass-loader', options: { sourceMap: true } },
				],
				exclude: resolveApp('node_modules'),
			},
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader', options: { sourceMap: 'inline' } },
					{ loader: 'css-loader', options: { sourceMap: 'inline' } },
					{
						loader: 'postcss-loader', options: {
							sourceMap: 'inline',
							exec: true,
							ident: 'postcss',
							plugins: () => [
								require('autoprefixer')(),
							],
						},
					},
					{ loader: 'sass-loader', options: { sourceMap: 'inline' } },
				],
				exclude: resolveApp('node_modules'),
			},
		/*	{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							/!* ... *!/
						},
					},
				],
				exclude: resolveApp('node_modules'),
			},*/
			{
				oneOf: [
					// "url" loader works like "file" loader except that it embeds assets
					// smaller than specified limit in bytes as data URLs to avoid requests.
					// A missing `test` is equivalent to a match.
					{
						test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
						loader: require.resolve('url-loader'),
						options: {
							limit: 10000,
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
					// Process JS with Babel.
					{
						test: /\.(js|mjs)$/,
						include: resolveApp('src'),
						loader: require.resolve('babel-loader'),
						options: {
							// @remove-on-eject-begin
							babelrc: true,
							// @remove-on-eject-end
							// This is a feature of `babel-loader` for webpack (not Babel itself).
							// It enables caching results in ./node_modules/.cache/babel-loader/
							// directory for faster rebuilds.
							cacheDirectory: false,
						},
					},
					// "postcss" loader applies autoprefixer to our CSS.
					// "css" loader resolves paths in CSS and adds assets as dependencies.
					// "style" loader turns CSS into JS modules that inject <style> tags.
					// In production, we use a plugin to extract that CSS to a file, but
					// in development "style" loader enables hot editing of CSS.
					{
						test: /\.css$/,
						use: [
							require.resolve('style-loader'),
							{
								loader: require.resolve('css-loader'),
								options: {
									importLoaders: 1,
								},
							},
							{
								loader: require.resolve('postcss-loader'),
								options: {
									// Necessary for external CSS imports to work
									// https://github.com/facebookincubator/create-react-app/issues/2677
									ident: 'postcss',
								},
							},
						],
					},
					// "file" loader makes sure those assets get served by WebpackDevServer.
					// When you `import` an asset, you get its (virtual) filename.
					// In production, they would get copied to the `build` folder.
					// This loader doesn't use a "test" so it will catch all modules
					// that fall through the other loaders.
					{
						// Exclude `js` files to keep "css" loader working as it injects
						// its runtime that would otherwise processed through "file" loader.
						// Also exclude `html` and `json` extensions so they get processed
						// by webpacks internal loaders.
						exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
						loader: require.resolve('file-loader'),
						options: {
							name: 'static/media/[name].[hash:8].[ext]',
						},
					},
				],
			},
			// only use one of these nested rules

			{ rules: [/* rules */] },
			// use all of these nested rules (combine with conditions to be useful)

			{ resource: { and: [/* conditions */] } },
			// matches only if all conditions are matched

			{ resource: { or: [/* conditions */] } },
			{ resource: [/* conditions */] },
			// matches if any condition is matched (default for arrays)

			// { resource: { not: /* condition */ } },
			// matches if the condition is not matched
		],
		/* Advanced module configuration (click to show) */
	},

	resolve: {
		// options for resolving module requests
		// (does not apply to resolving to loaders)

		modules: [
			'node_modules',
			resolveApp('app'),
		],
		// directories where to look for modules

		extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
		// extensions that are used

		alias: {
			Utilities: path.resolve(global.__base, 'src/utilities/'),
			Templates: path.resolve(global.__base, 'src/templates/'),
		}
		,
		/*
		alias: {
				// a list of module name aliases

				'module': 'new-module',
				// alias "module" -> "new-module" and "module/path/file" -> "new-module/path/file"

				'only-module$': 'new-module',
				// alias "only-module" -> "new-module", but not "only-module/path/file" -> "new-module/path/file"

				'module': path.resolve(__dirname, 'app/third/module.js'),
				// alias "module" -> "./app/third/module.js" and "module/file" results in error
				// modules aliases are imported relative to the current context
			},
			*/
		/* alternative alias syntax (click to show) */

		/* Advanced resolve configuration (click to show) */
	},

	performance: {
		hints: 'warning', // enum
		maxAssetSize: 200000, // int (in bytes),
		maxEntrypointSize: 400000, // int (in bytes)
		assetFilter: function(assetFilename) {
			// Function predicate that provides asset filenames
			return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
		},
	},

	devtool: 'inline-source-map', // enum
	// enhance debugging by adding meta info for the browser devtools
	// source-map most detailed at the expense of build speed.

	// context: global.__base, // string (absolute path!)
	context: resolveApp('src'),
	// the home directory for webpack
	// the entry and module.rules.loader option
	//   is resolved relative to this directory

	target: 'web', // enum
	// the environment in which the bundle should run
	// changes chunk loading behavior and available modules

	externals: ['react', /^@angular\//],
	// Don't follow/bundle these modules, but request them at runtime from the environment

	stats: 'errors-only',
	// lets you precisely control what bundle information gets displayed
	// index: path.resolve(global.__base, 'src') + '/index.js',
	devServer: {
		proxy: { // proxy URLs to backend development server
			'/api': 'http://localhost:3000',
		},
		compress: false, // enable gzip compression
		historyApiFallback: {
			disableDotRule: true,
		},
		watchContentBase: true,
		hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
		https: false, // true for self-signed, object for cert authority
		noInfo: true, // only errors & warns on hot reload
		port: 9000,
		// ...
	},

	plugins: [
		/*glob: global.__base + './src/front-non-library/assets/sass/!*.scss',*/
		new SassLintPlugin({
			glob: resolveApp('src/front-non-library/assets/sass/*.scss'),
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: [autoprefixer],
			},
		}),
		new HtmlWebpackPlugin(),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin({}),
	],
	// list of additional plugins

};
