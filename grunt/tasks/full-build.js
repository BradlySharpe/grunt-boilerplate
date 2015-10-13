module.exports = function(grunt) {
  grunt.registerTask('full-build', [ 'compile-css-partials', 'compile-html', 'compile-css-sass', 'connect', 'watch' ]);
};
