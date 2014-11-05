exports.config = {
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    specs: [
        'e2e_protractor/test.js'
        //'e2e_protractor/**/*.js'
    ],

    framework: 'jasmine',

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8888'
};