const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
sass.compiler = require('node-sass')
// 编译less
gulp.task('css', function () {
  gulp.src('../src/common/base.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie > 8']
    }))
    .pipe(cleanCSS())
    .pipe(rename('vut.css'))
    .pipe(gulp.dest('../dist/styles'))
})

// 拷贝字体文件
// gulp.task('fonts', function () {
//   gulp.src('../src/styles/common/iconfont/fonts/*.*')
//     .pipe(gulp.dest('../dist/styles/fonts'))
// })

gulp.task('default', ['css'])
