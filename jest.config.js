module.exports = {
	rootDir: './',
	coverageThreshold: {
		'global': {
			'branches': 0,
			'functions': 0,
			'lines': 0,
			'statements': 0
		}
	},
	collectCoverageFrom: [
		'**/*.{js,jsx}'
	],
	testMatch: [ '**/?(*.)+(test).js?(x)' ],
	moduleFileExtensions: [ 'js', 'json', 'jsx' ],
	coveragePathIgnorePatterns: [
		'/node_modules/',
		'node_modules',
		'jest.config.js',
		'server.js',
		'stylelint.config.js',
		'config/*',
		'postcss.config.js',
		'build/*',
		'mock/*',
		'webpack.config.js',
		'test/*',
		'assets/*',
		'node/__tests__/*'
	],
	coverageDirectory: '<rootDir>/test/coverage',
	moduleNameMapper: {
		'Mocks(.*)$': '<rootDir>/mock/$1',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/test/mock/fileMock.js',
		'\\.(css|less|scss|sass)$': '<rootDir>/test/mock/styleMock.js'
	},
	transform: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'^.+\\.js$': 'babel-jest'
	},
	setupTestFrameworkScriptFile: '<rootDir>/test/setupTests.js',
	transformIgnorePatterns: ['<rootDir>/node_modules/']
};
