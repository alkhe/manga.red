var gulp = require('gulp'),
	cached = require('gulp-cached'),
	plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	uglify = require('gulp-uglify'),
	cssnext = require('gulp-cssnext')
	jade = require('gulp-jade'),
	vectors = require('./vectors');

var js = vectors.js,
	css = vectors.css,
	html = vectors.html;

var make = function(vector, transforms) {
	return function() {
		var build = gulp.src(vector.src)
			.pipe(plumber())
			.pipe(cached(vector.id));
		for (var k in transforms) {
			build = build.pipe(transforms[k]());
		}
		build.pipe(gulp.dest(vector.dst));
	};
};

/**
 * Compile Javascript/JSX for production
 */
gulp.task('js', make(js, [
	babel,
	uglify
]));

/**
 * Compile Stylus for production
 */
gulp.task('css', make(css, [
	function() { return cssnext({ compress: true }); }
]));

/**
 * Compile Jade for production
 */
gulp.task('html', make(html, [
	function() { return jade({ compileDebug: false }); }
]));

/**
 * Compile Javascript/JSX for production
 */
gulp.task('js-map', make(js, [
	sourcemaps.init,
		babel,
		uglify,
	function() { return sourcemaps.write('.'); }
]));

/**
 * Compile Stylus for production
 */
gulp.task('css-map', make(css, [
	function() { return cssnext({ compress: true }); }
]));

/**
 * Compile Jade for production
 */
gulp.task('html-map', make(html, [
	function() { return jade({ compileDebug: false }); }
]));

/**
 * Compile Javascript/JSX for development
 */
gulp.task('js-dev', make(js, [
	babel
]));

/**
 * Compile Stylus for development
 */
gulp.task('css-dev', make(css, [
	cssnext
]));

/**
 * Compile Jade for development
 */
gulp.task('html-dev', make(html, [
	function() { return jade({ compileDebug: true }); }
]));
