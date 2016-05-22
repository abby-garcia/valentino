var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');


// JavaScript linting task
gulp.task('jshint', function() {
  return gulp.src('js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass({
    	sourceComments:'map',
    	sourceMap:'styles.css.map',
    	outputStyle:'nested'
    }))
    .pipe(gulp.dest('css'));
});


// Watch task
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch('scss/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['jshint', 'sass', 'watch']);

