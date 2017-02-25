'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var webpack = require('webpack-stream');
var shell = require('gulp-shell');

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
    return gulp.src('*.swift')
        .pipe(shell([
            'killall Server',
            'swift build',
            '.build/debug/Server'
        ]));
});

gulp.task('default', ['html', 'sass']);