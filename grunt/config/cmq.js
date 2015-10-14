module.exports = {
  options: {
    log: true
  },
  dev: {
    files: [
      {
        expand: true,
        cwd: '<%= config.directories.destination %>css/',
        src: ['*.css', '!*.min.css'],
        dest: '<%= config.directories.destination %>css/'
      }
    ]
  }
};
