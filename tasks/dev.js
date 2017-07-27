module.exports = (gulp, devTasks, sources) => {
  gulp.task('dev', devTasks, function () {
    gulp.watch(sources.js, ['script'])
    gulp.watch(sources.sass, ['sass'])
    gulp.watch(sources.template, ['compilePug'])
  })
}
