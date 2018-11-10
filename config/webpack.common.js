const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	target: 'web',
	context: process.cwd(),
	devServer: {
		historyApiFallback: true,
		compress: true,
		port: 3000
	},
	output: {
		filename: '[name].bundle.js',
	},
	resolve: {
		alias: {
			// MISC
			'single-spa': path.resolve(global.__base, '/node_modules/single-spa/lib/single-spa.js'),

			// REACT
			HomePageSearchForm: path.resolve(global.__base, '/app/front/homePageSearchForm.js'),
			LogoutButton: path.resolve(global.__base, '/app/front/components/logged0ut.js'),
			LoginButton: path.resolve(global.__base, '/app/front/components/loggedIn.js'),
			PageUnit: path.resolve(global.__base, '/app/front/components/pageUnit.js'),
			AboutUs: path.resolve(global.__base, '/app/front/about.js'),
			MyAccount: path.resolve(global.__base, '/app/front/account.js'),
			CategoriesHomepage: path.resolve(global.__base, '/app/front/categoriesHomepage.js'),
			Contact: path.resolve(global.__base, '/app/front/categoriesHomepage.js'),
			Error: path.resolve(global.__base, '/app/front/error.js'),
			Footer: path.resolve(global.__base, '/app/front/footer.js'),
			Header: path.resolve(global.__base, '/app/front/header.js'),
			Main: path.resolve(global.__base, '/app/front/main.js'),
			Nav: path.resolve(global.__base, '/app/front/nav.js'),
			RecordListing: path.resolve(global.__base, '/app/front/recordListing.js'),
			VinylCharts: path.resolve(global.__base, '/app/front/vinylCharts.js'),
			Sitemap: path.resolve(global.__base, '/app/front/sitemap.js'),

			// VUE
			vue: 'vue/dist/vue.js',
			VueRootComponent: path.resolve(global.__base, '/app/admin/index.vue'),
			AddPage: path.resolve(global.__base, '/app/admin/components/AddPage.vue'),
			AddUser: path.resolve(global.__base, '/app/admin/components/AddUser.vue'),
			Comment: path.resolve(global.__base, '/app/admin/components/Comment.vue'),
			Comments: path.resolve(global.__base, '/app/admin/components/Comments.vue'),
			FooterAdmin: path.resolve(global.__base, '/app/admin/components/Footer.vue'),
			HeaderAdmin: path.resolve(global.__base, '/app/admin/components/Header.vue'),
			Home: path.resolve(global.__base, '/app/admin/components/Home.vue'),
			modal: path.resolve(global.__base, '/app/admin/components/Modal.vue'),
			Page: path.resolve(global.__base, '/app/admin/components/Page.vue'),
			Pages: path.resolve(global.__base, '/app/admin/components/Pages.vue'),
			User: path.resolve(global.__base, '/app/admin/components/User.vue'),
			Users: path.resolve(global.__base, '/app/admin/components/Users.vue'),
			Thumbnail: path.resolve(global.__base, '/app/admin/components/jsComponents/ThumbnailComponent.js'),

			// redux
			actions: path.resolve(global.__base, '/app/front/actions/actions.js'),
			reducers: path.resolve(global.__base, '/app/front/reducers/reducers.js'),
		},
		extensions: ['*', '.js', '.vue', '.json']
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
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
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
							minimize: false,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader'
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
							minimize: false,
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
			},
			{
				include: path.resolve('node_modules', 'lodash'),
				sideEffects: false
			}
		]
	},
	devtool: 'eval-source-map',
	plugins: [
		new HtmlWebPackPlugin({
			template: 'src/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[chunkhash].css',
			chunkFilename: '[id].css'
		}),
		new VueLoaderPlugin(),
		new Dotenv()
	],
};
