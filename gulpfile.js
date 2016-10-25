var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('server', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("src/style/*.scss", ['sass'], reload);
    gulp.watch("*").on('change', reload);
});

// scss编译后的css将注入到浏览器里实现更新
gulp.task('sass', function() {
    return gulp.src("src/style/*.scss")
        .pipe(sass())
        .pipe(prefix())
        .pipe(gulp.dest("dist/"))
        .pipe(reload({stream: true}));
});

gulp.task('default', ['server']);
