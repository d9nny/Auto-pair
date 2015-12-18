// // Karma configuration
// // Generated on Mon Feb 03 2014 16:16:15 GMT+0100 (CET)
//
// module.exports = function(config) {
//   config.set({
//
//     // base path, based on tmp/ folder
//     basePath: '../../',
//
//
//     // frameworks to use
//     frameworks: ['jasmine'],
//
//
//     // list of files / patterns to load in the browser
//     files: [
//       'app/assets/javascripts/angular/**/*.js',
//       'spec/javascripts/**/*.spec.js'
//     ],
//
//     // list of files to exclude
//     exclude: [
//
//     ],
//
//
//     // test results reporter to use
//     // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
//     reporters: ['progress'],
//
//
//     // web server port
//     port: 9876,
//
//
//     // enable / disable colors in the output (reporters and logs)
//     colors: true,
//
//
//     // level of logging
//     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,
//
//
//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: true,
//
//
//     // Start these browsers, currently available:
//     // - Chrome
//     // - ChromeCanary
//     // - Firefox
//     // - Opera (has to be installed with `npm install karma-opera-launcher`)
//     // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
//     // - PhantomJS
//     // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
//     browsers: ['PhantomJS'],
//
//
//     // If browser does not capture in given timeout [ms], kill it
//     captureTimeout: 60000,
//
//
//     // Continuous Integration mode
//     // if true, it capture browsers, run tests and exit
//     singleRun: false,
//
//     // Preprocessors
//     preprocessors: {
//         '/**/*.coffee':'coffee'
//     }
//
//   });
// };

// Karma configuration
// Generated on Thu Nov 27 2014 10:43:21 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'app/assets/javascripts/angular/**/*.js',
      'spec/javascripts/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
