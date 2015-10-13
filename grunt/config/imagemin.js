module.exports = {
  options: {
    optimizationLevel: 5
  },
  dev: {
    files: [
      {
        expand: true,
        cwd: '<%= config.directories.images %>',
        src: ['**/*.{png,jpg,jpeg,gif,svg,ico}'],
        dest: '<%= config.directories.destination %>images'
      }
    ]
  }
};
