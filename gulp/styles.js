'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var $ = require('gulp-load-plugins')();
var postcss = require('gulp-postcss');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');
var simpleVars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssnext = require('gulp-cssnext');
var mqpacker = require('css-mqpacker');
var cssnano = require('cssnano');
var pixrem = require('pixrem')

gulp.task('styles', function () {
  var processors = [
    cssImport,
    mixins,
    simpleVars,
    nested,
    mqpacker,
    pixrem
  ];

  return gulp.src([
          paths.src + '/{app,components}/**/*.css'
      ])
    .pipe($.cssnext({
        'browers': ['last 2 version'],
        'customProperties': true,
        'colorFunction': true,
        'customSelectors': true,
        'sourcemap': false,
        'compress': false
      })
    )
    .pipe($.postcss(processors))
    .on('error', function handleError(err) {
        console.error(err.toString());
    })
    .pipe($.flatten())
    .pipe(gulp.dest(paths.tmp + '/serve/app/styles/'));
});
