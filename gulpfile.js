const gulp = require('gulp')
const glob = require('glob')

// Call functions for export tasks
glob.sync('./tasks/*.js', { realPath: true })
  .forEach(function (file) {
    require(file)(gulp)
})

const devTasks = [
  'server',
  'sass',
  'imagemin',
  'compilePug','htmlmin',
  'script'
]

const buildTasks = [
  'sass',
  'imagemin',
  'compilePug','htmlmin',
  'script'
]

// Task for dev
require('./tasks/dev.js')(gulp, devTasks)

// Task for build
require('./tasks/build.js')(gulp, buildTasks)
