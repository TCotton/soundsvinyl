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
			dir: 'reports/coverage',
			reporters: [
				{ type: 'text-summary' },
				{ type: 'html', subdir: 'report-html' },
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
