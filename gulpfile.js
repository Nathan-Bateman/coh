//////
//Required
////////////////
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	uncss = require('gulp-uncss'),
	plumber = require('gulp-plumber');

//////
//Scripts Task
//////////////// Grabs all .js files and pipes them out to a destination
gulp.task('scripts', function(){
	gulp.src(['coh/js/**/*.js', '!coh/js/**/*.min.js'])
	.pipe(rename({suffix:'.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('coh/js'));
});

//////
//CSS Task
////////////////
gulp.task('styles', function(){
	gulp.src(['coh/css/**/*.css', '!coh/css/**/*.min.css'])
	.pipe(plumber())
	.pipe(rename({suffix:'.min'}))
	.pipe(minifyCss())
	.pipe(gulp.dest('coh/css'));
});
/////
//UNCSS Task
/////////////
gulp.task ('uncss', function (){
	gulp.src('coh/css/**/*.css')
	.pipe(uncss({
		html: ['coh/index.html']
	}))
	.pipe(gulp.dest('coh/css'));
});

//Watch Task
////////////////
//////
gulp.task('watch', function(){
	gulp.watch('coh/js/**/*.js', ['scripts']);
	gulp.watch('coh/css/**/*.css', ['styles']);
});


//Default Task
////////////////
gulp.task('default', ['scripts', 'styles', 'watch']);