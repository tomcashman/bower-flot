var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var plugins = require("gulp-load-plugins")({lazy:false});
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');

gulp.task('clean', function() {
    return gulp.src(['./flot.js'], {read: false})
        .pipe(clean({force: true}));
});

gulp.task('build', function(){
    return gulp.src(['./bower_components/flot*/jquery.flot.js',
        './bower_components/flot*/jquery.colorhelpers.js',
        './bower_components/flot*/jquery.flot.crosshair.js',
        './bower_components/flot*/jquery.flot.resize.js',
        './bower_components/flot*/jquery.flot.selection.js',
        './bower_components/flot*/jquery.flot.time.js',
        './bower_components/flot*/jquery.flot.axislabels.js',
        './bower_components/flot*/jquery.flot.pie.js',
        './bower_components/flot*/jquery.flot.stack.js',
        './bower_components/flot*/jquery.flot.fillbetween.js',
        './bower_components/flot*/js/jquery.flot.tooltip.js',
        './bower_components/flot*/js/jquery.flot.orderBars.js',
        './bower_components/flot*/jquery.flot.hiddengraphs.js',
        './bower_components/flot*/curvedLines.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('default'))
        .pipe(uglify())
        .pipe(plugins.concat('flot.js'))
        .pipe(gulp.dest('./'));
});

gulp.task('default',['clean', 'build']);
