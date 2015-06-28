import gulp from 'gulp';
import cached from 'gulp-cached';
import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';
import cssnext from 'gulp-cssnext';
import jade from 'gulp-jade';
import vectors from './vectors';

let { js, css, html } = vectors;

let make = (vector, transforms) =>
	() => {
		let build = gulp.src(vector.src)
			.pipe(plumber())
			.pipe(cached(vector.id));
		for (let t of transforms) {
			build = build.pipe(t());
		}
		build.pipe(gulp.dest(vector.dst));
	};

/**
 * Compile Javascript/JSX for production
 */
gulp.task('js', make(js, [
	() => babel({ stage: 0 }),
	uglify
]));

/**
 * Compile Stylus for production
 */
gulp.task('css', make(css, [
	() => cssnext({ compress: true })
]));

/**
 * Compile Jade for production
 */
gulp.task('html', make(html, [
	() => jade({ compileDebug: false })
]));

/**
 * Compile Javascript/JSX for production
 */
gulp.task('js-map', make(js, [
	sourcemaps.init,
		() => babel({ stage: 0 }),
		uglify,
	() => sourcemaps.write('.')
]));

/**
 * Compile Stylus for production
 */
gulp.task('css-map', make(css, [
	() => cssnext({ compress: true })
]));

/**
 * Compile Jade for production
 */
gulp.task('html-map', make(html, [
	() => jade({ compileDebug: false })
]));

/**
 * Compile Javascript/JSX for development
 */
gulp.task('js-dev', make(js, [
	() => babel({ stage: 0 })
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
	() => jade({ compileDebug: true })
]));
