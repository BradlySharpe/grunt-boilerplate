module.exports = function(grunt) {
  grunt.registerTask('pre-deploy', [ 'sitemap', 'accessibility' ]);
};
