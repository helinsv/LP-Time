var gulp         = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		cleanCSS     = require('gulp-clean-css'),
		rename       = require('gulp-rename'),
		browserSync  = require('browser-sync').create(),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify'),
		cssmin       = require('gulp-cssmin');

gulp.task('browser-sync', ['cssmin', 'scripts'], function() {
		browserSync.init({
				server: {
						baseDir: "./app"
				},
				notify: false
		});
});

gulp.task('cssmin', function () {
   return gulp.src([
   	'./app/css/normalize.css',  
		'./app/css/fonts.css',		
		'./app/css/main.css',
		'./app/css/media.css',
		])				
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./app/css/'));
});

gulp.task('scripts', function() {
	return gulp.src([
		'./app/libs/jquery/jquery-1.11.2.min.js',
		'./app/libs/owl-carousel/owl.carousel.min.js',
		'./app/libs/fancybox/jquery.fancybox.js',
		'./app/libs/easytimer/easytimer.min.js',
		])
		.pipe(concat('libs.js'))
		.pipe(uglify()) //Minify libs.js
		.pipe(gulp.dest('./app/js/'));
});


gulp.task('watch', function () {	
	gulp.watch('app/css/**/*.css', ['cssmin']);
	gulp.watch('app/libs/**/*.js', ['scripts']);	
	gulp.watch('app/js/*.js').on("change", browserSync.reload);
	gulp.watch('app/css/*.css').on('change', browserSync.reload);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
