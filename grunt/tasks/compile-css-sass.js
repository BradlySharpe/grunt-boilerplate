module.exports = function(grunt) {
  grunt.registerTask('compile-css-sass', [ 'compass:sass', 'uncss' ]);
};
