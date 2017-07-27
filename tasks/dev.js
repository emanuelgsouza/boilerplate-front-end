module.exports = (gulp, devTasks) => {
  gulp.task('dev', devTasks, function () {
    gulp.watch('./src/js/*.js', ['script'])
    gulp.watch('./src/assets/sass/**/*.sass', ['sass'])
    gulp.watch('./src/views/**/*.pug', ['compilePug'])
  })
}
