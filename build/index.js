import gulp from 'gulp';
import del from 'del';

import './compile';
import './watch';
import './assetwatch';
import './asset';

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
gulp.task('clean', () => del(['./public/js/app', './public/css/app', './public/*.html']));
