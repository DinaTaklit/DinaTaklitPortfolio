const gulp = require('gulp'); // to import gulp from gulp modules
const concat = require('gulp-concat'); // to concat files
const prefix = require('gulp-autoprefixer'); // to add css prefixes
const sass = require('gulp-sass'); // to manipulate sass file
const livereload = require('gulp-livereload'); // to make live reload
const sourcemaps = require('gulp-sourcemaps'); // to create a map
const uglify = require('gulp-uglify'); // to minify js scripts
const server = require('gulp-webserver'); // to start a server


// html task 
gulp.task('html-task', async function(){
    return gulp.src('project/index.html')
            .pipe(gulp.dest('dist'))
            .pipe(livereload());
});

// Server Task
gulp.task('server', async function() {
    gulp.src('project')	// <-- your app folder
      .pipe(server({
        livereload: true,
        open: true,
        port: 3000	// set a port to avoid conflicts with other local apps
      }));
});


// watch task
gulp.task('watch', async function(){
    livereload.listen();
    gulp.watch(['project/index.html'], gulp.series('html-task'));
});

// Default task 
gulp.task('default', gulp.parallel('server','watch'));