module.exports = {
  options: {
    livereload: true,
    livereloadOnError: false,
    interrupt: false
  },
  html: {
    files: ['<%= config.directories.source %>**/*.hbs'],
    tasks: [ 'compile-html' ]
  }
};
