module.exports = gulp => {
  gulp.task('script', function () {
    gulp.src('./src/**/*.js').pipe(gulp.dest('./dist/'))
  })
}
