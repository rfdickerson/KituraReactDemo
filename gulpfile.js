'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var webpack = require('webpack-stream');
var child = require('child_process')

var server = null;

gulp.task('sass', function() {
    return gulp.src('./src/client/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
})

gulp.task('sass:watch', function() {
    gulp.watch('./src/client/sass/*.scss', ['sass']);
});

gulp.task('webpack', function() {
    return gulp.src('./src/client')
        .pipe(webpack( require('./webpack.config.js')))
        .pipe(gulp.dest('public/'));
});

gulp.task('index', function() {
    return gulp.src('./src/client/index.html')
        .pipe(gulp.dest('public/'))
});

gulp.task('develop', function() {
    gulp.watch('./src/server/Sources/**/*.swift', ['swift']);
    gulp.watch('./src/client/sass/*.scss', ['sass']);
});

gulp.task('watch', function() {
    gulp.watch('./src/server/Sources/**/*.swift', ['compile:swift','run:server']);
    gulp.watch('./src/client/sass/*.scss', ['sass']);
    gulp.watch('./src/client/app/*.jsx', ['webpack'])
});

gulp.task('compile:swift', function() {
    return child.spawnSync('swift', ['build'], {
        cwd: 'src/server'
    })
});

gulp.task('run:server', function() {
    if (server) 
        server.kill();
    server = child.spawn('./Server', [], {
        cwd: './src/server/.build/debug'
    });
    server.stderr.on('data', function(data) {
        process.stdout.write(data.toString());
    });
});

// gulp.task('swift', function() {

//     var reportOptions = {
//         continueOnError: true,
//         pipeStdout: true
//     }

//     return gulp.src('./src/server/Sources/**/*.swift')
//         .pipe(exec('cd src/server && swift build'))
//         .pipe(exec('kill -3 `lsof -i :8090 | awk "FNR == 2 { print $2 }"`'))
//         .pipe(exec('cd src/server && .build/debug/Server&'))
//         .pipe(exec.reporter(reportOptions));
// });

gulp.task('default', ['index','webpack','sass']);