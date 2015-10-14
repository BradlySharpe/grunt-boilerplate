module.exports = {
  destination: {
    options: {
      ignore: [],
      stylesheets: ['/css/site.css'],
      report: 'min',
      htmlroot: '<%= config.directories.destination %>',
      debug: process.cwd()
    },
    cwd: './',
    src: '<%= config.directories.destination %>**/*.html',
    dest: '<%= config.directories.destination %>css/site.css'
  }
};
