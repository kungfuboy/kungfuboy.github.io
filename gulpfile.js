var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
	gulp.src('src/css/main.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('dist/'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: '.'
        }
    });
});

gulp.task('watch', function(){
    gulp.watch(['*'], ['rebuild']);
});
gulp.task('build', ['sass'], function() {
    gulp.src('*')
      .pipe(gulp.dest('..'));
});
gulp.task('rebuild', ['build'], function () {
    browserSync.reload();
});

gulp.task('default', ['browserSync', 'watch']);
