const gulp = require('gulp');
const br = require('browser-sync');
const reload = br.reload;

const args = require('yargs')
              .default('production', false)
              .alias('p', 'production')
              .argv;

// Chamando as tasks de styles
require('./gulpTasks/styles.js')(args, reload);

// Chamado as tasks de imagens
require('./gulpTasks/images.js')(args, reload);

// Chamando as tasks de html
require('./gulpTasks/minifyHtml.js')(args, reload);

// Chamando as tasks de js
require('./gulpTasks/scripts.js')(args, reload);

gulp.task('default', ['sass', 'imagemin', 'htmlmin', 'script'], function () {
  br.init({
    server: {
      baseDir: './dist',
      index: 'forca.html'
    }
  });

  if (!args.production) {
    gulp.watch('./src/js/*.js', ['script']);
    gulp.watch('./src/assets/sass/**/*.sass', ['sass']);
    gulp.watch('./src/**/*.html', ['htmlmin']);
  }
});
