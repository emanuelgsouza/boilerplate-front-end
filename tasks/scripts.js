module.exports = (gulp, arg, sources) => {
  const dist = sources.DIST_SRC + '/js'
  gulp.task('script', function () {
    gulp.src(sources.JS_SRC).pipe(gulp.dest(dist))
  })
}
