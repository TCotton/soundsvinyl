const webpackConfig = require('../webpack.config');

module.exports = (config) => {
	config.set({
		basePath: '',
		frameworks: ['jasmine'],
		files: ['spec.bundle.js'],
		preprocessors: {
			'spec.bundle.js': ['webpack', 'sourcemap']
		},
		webpackMiddleware: {
			stats: 'errors-only'
		},
		webpack: Object.assign({
			mode: 'development'
		}, webpackConfig),
		reporters: ['spec', 'coverage'],
		browsers: ['ChromeHeadless'],
		logLevel: config.LOG_INFO,
		autoWatch: false,
		singleRun: true,
		concurrency: Infinity,
		webpackServer: {
			noInfo: true,
		},
		coverageReporter: {
			check: {
				global: {
					excludes: [
						'app/**/**/**.spec.js'
					]
				}
			},
			dir: './coverage',
			reporters: [
				{ type: 'lcov', subdir: '.' },
				{ type: 'text-summary' }
			]
		},
		plugins: [
			'karma-webpack',
			'karma-sourcemap-loader',
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-spec-reporter',
			'karma-coverage'
		]
	});
};
