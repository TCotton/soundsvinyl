'use strict'

module.exports = {
	presets: [
		"@babel/preset-react",
		"@babel/preset-env"
	],
	plugins: [
		"syntax-dynamic-import",
		[
			"react-css-modules",
			{
				"filetypes": {
					".scss": {
						"syntax": "postcss-scss"
					}
				},
				"exclude": "node_modules",
				"webpackHotModuleReloading": true,
				"generateScopedName": "[name]__[local]___[hash:base64:5]"
			},
			"transform-postcss"
		],
		"@babel/plugin-proposal-class-properties",
		"@babel/plugin-proposal-object-rest-spread"
	],
}
