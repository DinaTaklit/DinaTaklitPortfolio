const gulp = require('gulp'); // to import gulp from gulp modules
const concat = require('gulp-concat'); // to concat files
const prefix = require('gulp-autoprefixer'); // to add css prefixes
const sass = require('gulp-sass'); // to manipulate sass file
const livereload = require('gulp-livereload'); // to make live reload
const sourcemaps = require('gulp-sourcemaps'); // to create a map
const uglify = require('gulp-uglify'); // to minify js scripts
const server = require('gulp-webserver'); // to start a server

// Server Task
gulp.task('server', async function() {
    gulp.src('project')	// <-- your app folder
      .pipe(server({
        livereload: true,
        open: true,
        port: 3000	// set a port to avoid conflicts with other local apps
      }));
});


gulp.task('default', gulp.parallel('server'));