const minifyCss = require('gulp-clean-css')
const sass = require('gulp-sass')

module.exports = (gulp, arg, sources) => {
  const sassSrc = sources.sass
  const dist = sources.dist + '/css'
  gulp.task('sass', function () {
    gulp.src(sassSrc)
      .pipe(sass().on('error', sass.logError))
      .pipe(minifyCss())
      .pipe(gulp.dest(dist))
  })
}
