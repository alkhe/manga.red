var gulp = require('gulp');

/**
 * Compile assets on change for production
 */
gulp.task('watch', ['jsw', 'cssw', 'htmlw']);

/**
 * Compile assets on change for production with sourcemaps
 */
gulp.task('watch-map', ['jsw-map', 'cssw-map', 'htmlw-map']);

/**
 * Compile assets on change for development
 */
gulp.task('watch-dev', ['jsw-dev', 'cssw-dev', 'htmlw-dev']);
