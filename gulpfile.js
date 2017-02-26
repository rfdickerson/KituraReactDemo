'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var webpack = require('webpack-stream');
var exec = require('gulp-exec');

gulp.task('sass', function() {
    return gulp.src('./src/client/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
})

gulp.task('html', function() {
    return gulp.src('./src/client/templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build/html'))
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/client/sass/*.scss', ['sass']);
});

gulp.task('webpack', function() {
    return gulp.src('./src/client')
        .pipe(webpack( require('./webpack.config.js')))
        .pipe(gulp.dest('public/js'));
});

gulp.task('develop', function() {
    gulp.watch('./src/server/Sources/**/*.swift', ['swift']);
    gulp.watch('./src/client/sass/*.scss', ['sass']);
});

gulp.task('swift', function() {

    var reportOptions = {
        continueOnError: true,
        pipeStdout: true
    }

    return gulp.src('./src/server/Sources/**/*.swift')
        .pipe(exec('cd src/server && swift build'))
        .pipe(exec('kill -3 `lsof -i :8090 | awk "FNR == 2 { print $2 }"`'))
        .pipe(exec('cd src/server && .build/debug/Server&'))
        .pipe(exec.reporter(reportOptions));
});

gulp.task('default', ['html', 'sass']);