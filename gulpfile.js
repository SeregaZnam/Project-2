var gulp 		  = require('gulp');
var concatCss 	  = require('gulp-concat-css');
var connect 	  = require('gulp-connect');
var replace 	  = require('gulp-html-replace');
var includer      = require('gulp-htmlincluder');
var livereload 	  = require('gulp-livereload');
var spritecreator = require('gulp.spritesmith');
var less 		  = require('gulp-less');
var concat 		  = require('gulp-concat');
var autoprefixer  = require('gulp-autoprefixer');
var minify        = require('gulp-minify');
var cleanCSS      = require('gulp-clean-css');
var uglify 		  = require('gulp-uglify');
var pump 		  = require('pump');
var htmlmin 	  = require('gulp-htmlmin');
 
gulp.task('scripts', function() {
  return gulp.src('dev/js/*.js')
    .pipe(gulp.dest('build/js/'))
    .pipe(connect.reload());
});

gulp.task('sprite', function(){
	var spriteData = gulp.src('dev/img/*.png')
						.pipe(spritecreator({
							imgName: 'sprite.png',
							cssName: 'sprite.css',
							algorithm: 'binary-tree'
						}));
	spriteData.img.pipe(gulp.dest('build/img/'));
	spriteData.css.pipe(gulp.dest('build/css/'));
});

gulp.task('less', function () {
  return gulp.src('dev/less/*.less')
    .pipe(less())
    .pipe(autoprefixer({
            browsers: ['last 3 versions', '> 5%'],
            cascade: false
        }))
    .pipe(gulp.dest('build/css/'))
    .pipe(connect.reload());
});

gulp.task('server', function(){
	connect.server({
		root : 'build',
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('dev/html/**/*.html')
		.pipe(includer())
		.pipe(replace({
			css: 'css/style.css'
		}))
		.pipe(gulp.dest('build/'))
		.pipe(connect.reload());
});

gulp.task('default', function(){
	gulp.start('html','less', 'scripts', 'server');

	gulp.watch(['dev/less/**/*.less'], function(){
		gulp.start('less');
	});
	gulp.watch(['dev/**/*.html'], function(){
		gulp.start('html');
	});
	gulp.watch(['dev/js/*.js'], function(){
		gulp.start('scripts');
	})
});