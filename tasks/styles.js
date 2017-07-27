const minifyCss = require('gulp-clean-css')
const sass = require('gulp-sass')

module.exports = (gulp, arg, sources) => {
  const dist = sources.DIST_SRC + '/css'
  gulp.task('sass', function () {
    gulp.src(sources.SASS_SRC)
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCss())
      .pipe(gulp.dest(dist))
  })
}
