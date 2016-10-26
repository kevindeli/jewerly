var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function(){
    gulp.src('assats/sass/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'));
});