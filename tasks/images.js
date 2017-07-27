const imagemin = require('gulp-imagemin')

module.exports = (gulp, arg, sources) => {
  const imgSrc = sources.img
  const dist = sources.dist + '/img'
  gulp.task('imagemin', function () {
    gulp.src(imgSrc)
      .pipe(imagemin())
      .pipe(gulp.dest(dist))
  })
}
