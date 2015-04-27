var gulp = require('gulp');

/**
 * Compile assets for production
 */
gulp.task('compile', ['js', 'css', 'html']);

/**
 * Compile assets for production with sourcemaps
 */
gulp.task('compile-map', ['js-map', 'css-map', 'html-map']);

/**
 * Compile assets for development
 */
gulp.task('compile-dev', ['js-dev', 'css-dev', 'html-dev']);
