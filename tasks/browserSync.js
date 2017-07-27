const br = require('browser-sync')
const path = require('path')

module.exports = gulp => {
  gulp.task('server', function () {
    const dir = ['./dist/**/**']
    br.init(dir, {
      server: {
        baseDir: path.resolve(__dirname, '/dist'),
        index: path.resolve(__dirname, '/dist/index.html')
      },
      open: false
    })
  })
}
