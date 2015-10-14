module.exports = {
  dev: {
    options: {
      force: true,
      ignore: []
    },
    src: [ '<%= config.directories.destination %>**/*.html' ]
  }
};
