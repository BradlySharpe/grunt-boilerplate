module.exports = {
  sass: {
    options: {
      sassDir: '<%= config.directories.sass %>',
      cssDir: '<%= config.directories.destination %>css/'
    }
  },
  partials: {
    options: {
      sassDir: '<%= config.directories.partials %>css/',
      cssDir: '<%= config.directories.partials %>css/'
    }
  }
};
