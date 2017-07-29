var gulp = require('gulp');
var server = require('gulp-server-livereload');
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var ModRewrite = require('connect-modrewrite');

//server
gulp.task('start', function() {
  gulp.src('app')
    .pipe(server({
      livereload: true,
      port: 3000,
      open: true,
      fallback: 'index.html'
    }));
});

//styles
gulp.task('style', function () {
  return gulp.src('app/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
			browsers: ['last 2 version', 'safari 5', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
			cascade: true
		}))
    .pipe(gulp.dest('app/css'));
});

gulp.task('watch', function(){
    gulp.watch('app/sass/**/*.sass', ['style']);
});

gulp.task('default', ['start', 'watch']);

//build
gulp.task('build', function () {
    return gulp.src('app/**/*.html')
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(gulp.dest('tempo'));
});