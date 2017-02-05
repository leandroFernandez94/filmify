var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var gulpif = require('gulp-if');
var server = require('browser-sync');
var del = require('del');
var templateCache = require('gulp-angular-templatecache');
var ngAnnotate = require('gulp-ng-annotate');
var wrap = require('gulp-wrap');

var paths = {
  templates: 'public/**/*.html',
  scripts: 'public/src/**/*.js',
  modules:[
    'node_modules/jquery/dist/jquery.min.js',
    'node_modules/angular/angular.min.js',
    'node_modules/angular-ui-router/release/angular-ui-router.min.js',
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  ],
  app:'public/index.html',
  css:'public/css/*'

};

server.create();

gulp.task('clean',() => {
  return del(['./build']);
});

gulp.task('copy', ['clean'], () => {
  return gulp.src(paths.app)
    .pipe(gulp.dest('./build'));
});

gulp.task('copyCss',['copy'],() => {
  return gulp.src(paths.css)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./build/css'));
});



gulp.task('scripts',['modules'], () => {
  return gulp.src([
      'public/**/*.module.js',
      paths.scripts,
      './templates.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(wrap('(function(angular){\n\'use strict\';\n<%= contents %>})(window.angular);'))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('templates', () => {
  return gulp.src(paths.templates)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(templateCache({
      root: 'app',
      standalone: true
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('modules', ['templates'], () => {
  return gulp.src(paths.modules)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest( './build/js'));
});

gulp.task('serve', () => {
  return server.init({
    files: ['./build/**'],
    port: 4000,
    server: {
      baseDir: './build'
    }
  });
});

gulp.task('watch',['serve','scripts'], () => {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default',[
  'copyCss',
  'watch'
]);
