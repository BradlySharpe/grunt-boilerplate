module.exports = {
  options: {
    livereload: true,
    port: '<%= config.site.localPort %>'
  },
  dev: {
    options: {
      base: '<%= config.directories.destination %>'
    }
  }
};
