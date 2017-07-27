const pug = require('gulp-pug')

module.exports = gulp => {
  gulp.task('compilePug', () => {
    gulp.src('./src/templates/*.pug')
      .pipe(pug({}))
      .pipe(gulp.dest('./dist'))
  })
}
