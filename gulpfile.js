var gulp = require('gulp');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: "./app"
    });
    gulp.watch("app/*.html").on('change', browserSync.reload);
});