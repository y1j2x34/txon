'use strict';

const baseConfig = require('./karma.base.conf');

module.exports = function (config) {
    config.set(baseConfig);

    config.set({
        preprocessors: {
            'test/**/*.spec.ts': ['sourcemap', 'rollup']
        },
        rollupPreprocessor: require('./rollup-debug.config'),
        reporters: ['progress', 'mocha'],

        logLevel: config.LOG_DEBUG,

        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-chrome-launcher',
            'karma-ie-launcher',
            'karma-rollup-preprocessor',
            'karma-coverage-istanbul-reporter',
            'karma-sourcemap-loader',
            'karma-mocha-reporter'
        ],
        customLaunchers: {
            IE10: {
                base: 'IE',
                'x-ua-compatible': 'IE=EmulateIE10',
                flags: ['-extoff']
            }
        },
        browsers: ['Chrome']
    });
};
