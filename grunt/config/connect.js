module.exports = {
  options: {
    livereload: true,
    port: '<%= config.site.localPort %>',
    base: '<%= config.directories.destination %>'
  },
  destination: { },
  ngrok: {
    options: {
      livereload: false
    }
  }
};
