const minifyCss = require('gulp-clean-css')
const sass = require('gulp-sass')

module.exports = gulp => {
  gulp.task('sass', function () {
    gulp.src('./src/assets/sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCss())
      .pipe(gulp.dest('./dist/css/'))
  })
}
