const htmlmin = require('gulp-htmlmin')

module.exports = gulp => {
  gulp.task('htmlmin', function () {
    gulp.src('./src/**/*.html')
      .pipe(htmlmin(
        {
          collapseWhitespace: true,
          removeComments: true
        }
      ))
      .pipe(gulp.dest('./dist'))
  })
}
