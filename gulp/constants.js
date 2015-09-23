'use strict';
var gulp = require('gulp');
var paths = gulp.paths;
var ngConstant = require('gulp-ng-constant');

gulp.task('config', function () {
  var myConfig = require('../config/config.json');
  var environment = require('../config/environment.json')['environment'];
  // can also use process.env variable
  var envConfig = myConfig[environment];
  return ngConstant({
    name: 'acronym.config',
    constants: envConfig,
    stream: true
  })
  // Writes config.js to dist/ folder
  .pipe(gulp.dest('src/app'));
});
