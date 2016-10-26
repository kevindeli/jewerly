var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
    gulp.src('assats/scss/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
    gulp.src('assats/scss/fa/*')
        .pipe(gulp.dest('public/css/fa'));
});