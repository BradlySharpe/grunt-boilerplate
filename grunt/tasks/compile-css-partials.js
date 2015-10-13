module.exports = function(grunt) {
  grunt.registerTask('compile-css-partials', [ 'compass:partials', 'postcss:partials' ]);
};
