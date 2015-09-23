'use strict';

var gulp = require('gulp');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep');

var paths = gulp.paths;

function runTests (singleRun, done) {
  var bowerDeps = wiredep({
    directory: 'bower_components',
    exclude: ['bootstrap-sass-official'],
    dependencies: true,
    devDependencies: true
  });

  var testFiles = bowerDeps.js.concat([
      //You may need to load modules before any other files in order
      // to resolue "module not define or available error"
    paths.src + '/app/app.js',

    paths.src + '/{app,components}/**/*.module.js',
    paths.src + '/{app,components}/**/*.js',
    paths.src + '/{app,components}/**/*.spec.js'
  ]);

  gulp.src(testFiles)
    .pipe($.karma({
      configFile: 'karma.conf.js',
      action: (singleRun)? 'run': 'watch'
    }))
    .on('error', function (err) {
        // Make sure failed tests cause gulp to exit non-zero
          console.log(err);
      throw err;
    });
}

gulp.task('test', function (done) { runTests(false /* singleRun */, done) });
gulp.task('test:auto', function (done) { runTests(false /* singleRun */, done) });
