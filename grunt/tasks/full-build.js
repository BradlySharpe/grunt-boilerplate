module.exports = function(grunt) {
  grunt.registerTask('full-build', [ 'pre-lint', 'compile-css-partials', 'compile-html', 'compile-css-sass' ]);
};
