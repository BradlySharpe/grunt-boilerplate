module.exports = {
  options: {
    livereload: true,
    livereloadOnError: false,
    interrupt: false
  },
  html: {
    files: ['<%= config.directories.source %>**/*.hbs'],
    tasks: [ 'compile-html' ]
  },
  'css-partials': {
    files: ['<%= config.directories.partials %>css/**/*.scss'],
    tasks: [ 'compile-css-partials', 'compile-html' ]
  },
  'css-sass': {
    files: ['<%= config.directories.sass %>**/*.scss'],
    tasks: [ 'compile-css-sass' ]
  },
  js: {
    files: ['<%= config.directories.scripts %>**/*.js'],
    tasks: [ 'compile-js' ]
  },
  project: {
    files: ['grunt/**/*.js', 'Gruntfile.js', 'configuration.json', 'package.json'],
    tasks: [ 'full-build' ]
  },
  bower: {
    files: [ 'bower_components/*' ],
    tasks: [ 'bower-dependencies' ]
  }
};
