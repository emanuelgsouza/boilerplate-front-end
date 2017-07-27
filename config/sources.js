const path = require('path')

module.exports = {
  js: './src/js/**/*.js',
  sass: './src/assets/sass/**/*.sass',
  img: './src/assets/img/**',
  template: './src/views/*.pug',
  dist: path.resolve(__dirname, '../dist')
}
