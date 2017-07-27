module.exports = (gulp, arg, sources) => {
  const jsSrc = sources.js
  const dist = sources.dist + '/js'
  gulp.task('script', function () {
    gulp.src(jsSrc).pipe(gulp.dest(dist))
  })
}
