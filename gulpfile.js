const axios = require('axios');
const babel = require('babelify');
const browserSync = require('browser-sync');
const browserify = require('browserify');
const buffer = require('vinyl-buffer');
const concat = require('gulp-concat');
const gulp = require('gulp');
const historyApiFallback = require('connect-history-api-fallback');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const reload = browserSync.reload;
const sass = require('gulp-sass');
const source = require('vinyl-source-stream');

gulp.task('styles', () => {
	return gulp.src('dev/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('./public/'))
});

gulp.task('js', () => {
  browserify('dev/scripts/App.js', {debug: true})
      .transform('babelify', {
          sourceMaps: true,
          presets: ['es2015','react']
      })
      .bundle()
      .on('error',notify.onError({
          message: "Error: <%= error.message %>",
          title: 'Error in JS 💀'
      }))
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest('./public/'))
      .pipe(reload({stream:true}));
});

gulp.task('bs', () => {
  browserSync.init({
      server: {
          baseDir: './'
      },
      middleware: [historyApiFallback()] 
  });
});

gulp.task('default', ['js','bs'], () => {
  gulp.watch('dev/**/*.js',['js']);
  gulp.watch('dev/**/*.scss',['styles']);
  gulp.watch('./public/style.css',reload);
});