const gulp = require('gulp'); // to import gulp from gulp modules
const concat = require('gulp-concat'); // to concat files
const prefix = require('gulp-autoprefixer'); // to add css prefixes
const sass = require('gulp-sass'); // to manipulate sass file
const livereload = require('gulp-livereload'); // to make live reload
const sourcemaps = require('gulp-sourcemaps'); // to create a map
const uglify = require('gulp-uglify'); // to minify js scripts
const webserver = require('gulp-webserver'); // to start a server
var debug = require("gulp-debug");

// html task
function html(){
    return gulp.src('src/index.html')
            .pipe(gulp.dest('dist/'))
            .pipe(debug())
            .pipe(livereload());
}

// // css task
function css(){
    return gulp.src('src/public/scss/styles.scss')
            .pipe(sourcemaps.init({loadMaps: true})) // init the source map
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(prefix('last 2 versions'))
            // We do not need it at this stage but we can use it
            //later if we have other css libraries that we want to add
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('dist/public/css'))
            .pipe(livereload());
}


// Server Task
function server() {
    gulp.src('dist')	// <-- your app folder
      .pipe(webserver({
        livereload: true,
        open: true,
        port: 3000	// set a port to avoid conflicts with other local apps
      }));
}

// Watch files
function watchFiles() {
    livereload.listen();
    gulp.watch("src/index.html", html);
    gulp.watch(['src/public/scss/*.scss','project/public/scss/**/*.scss'], css);
}

  // Define complex tasks

  const build = gulp.series(html,css);
  const watch = gulp.series(build, gulp.parallel(watchFiles, server));

  // Export tasks
  exports.html = html;
  exports.css = css;
  exports.build = build;
  exports.watch = watch;
  exports.default = watch;
