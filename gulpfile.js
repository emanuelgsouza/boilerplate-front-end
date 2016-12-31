const gulp = require('gulp');
const glob = require('glob');
const br = require('browser-sync');
const reload = br.reload;

const args = require('yargs').default('production', false).alias('p', 'production').argv;

glob.sync('./gulpTasks/*.js', { realPath: true })
  .forEach(function (file) {
    require(file)(args, reload);
});

gulp.task('default', ['sass', 'imagemin', 'htmlmin', 'script'], function () {
  br.init({
    server: {
      baseDir: './dist',
      index: 'index.html'
    }
  });

  if (!args.production) {
    gulp.watch('./src/js/*.js', ['script']);
    gulp.watch('./src/assets/sass/**/*.sass', ['sass']);
    gulp.watch('./src/**/*.html', ['htmlmin']);
  }
});
