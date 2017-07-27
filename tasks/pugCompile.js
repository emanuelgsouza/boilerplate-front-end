const pug = require('gulp-pug')

module.exports = (gulp, arg, sources) => {
  const templateSrc = sources.template
  const dist = sources.dist + '/'
  gulp.task('compilePug', () => {
    gulp.src(templateSrc)
      .pipe(pug({}))
      .pipe(gulp.dest(dist))
  })
}
