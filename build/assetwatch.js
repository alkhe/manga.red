import gulp from 'gulp';
import { js, css, html } from './vectors';

let watch = (vector, task) =>
	() => gulp.watch(vector.src, task);


gulp.task('jsw', watch(js, ['js']));

gulp.task('cssw', watch(css, ['css']));

gulp.task('htmlw', watch(html, ['html']));


gulp.task('jsw-map', watch(js, ['js-map']));

gulp.task('cssw-map', watch(css, ['css-map']));

gulp.task('htmlw-map', watch(html, ['html-map']));


gulp.task('jsw-dev', watch(js, ['js-dev']));

gulp.task('cssw-dev', watch(css, ['css-dev']));

gulp.task('htmlw-dev', watch(html, ['html-dev']));
