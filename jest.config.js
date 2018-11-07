module.exports = {
	rootDir: './',
	coverageThreshold: {
		'global': {
			'branches': 40,
			'functions': 40,
			'lines': 40,
			'statements': 40
		}
	},
	collectCoverageFrom: [
		'**/*.{js,jsx}'
	],
	testMatch: [ '**/?(*.)+(test).js?(x)' ],
	moduleFileExtensions: [ 'js', 'json', 'jsx' ],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'jest.config.js',
		'server.js',
		'stylelint.config.js',
		'config/*',
		'postcss.config.js',
		'build/*',
		'mock/*',
		'webpack.config.js',
		'test/*',
		'assets/*'
	],
	coverageDirectory: '<rootDir>/test/coverage',
	moduleNameMapper: {
		'Mocks(.*)$': '<rootDir>/mock/$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/mock/fileMock.js',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy'
	},
	transform: {
		'^.+\\.jsx?$': 'babel-jest',
		'^.+\\.svg$': 'jest-svg-transformer'
	},
	setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js'
};
