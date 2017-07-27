const imagemin = require('gulp-imagemin')

module.exports = gulp => {
  gulp.task('imagemin', function () {
    gulp.src('./src/assets/img/**/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/img'))
  })
}
