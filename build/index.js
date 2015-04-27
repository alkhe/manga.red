var gulp = require('gulp'),
	del = require('del');

require('./compile');
require('./watch');
require('./assetwatch');
require('./asset');

gulp.task('default', ['pro']);

/**
 * Compile and watch assets in production mode
 */
gulp.task('pro', ['compile', 'watch']);

/**
 * Compile and watch assets in production mode with sourcemaps
 */
gulp.task('map', ['compile-map', 'watch-map']);

/**
 * Compile and watch assets in development mode
 */
gulp.task('dev', ['compile-dev', 'watch-dev']);

/**
 * Clean build files
 */
gulp.task('clean', function() {
	del(['./public/js/app', './public/css/app', './public/*.html']);
});
