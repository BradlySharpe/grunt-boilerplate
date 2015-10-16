module.exports = function(grunt) {
  grunt.registerTask('pre-deploy', [ 'sitemap', 'accessibility', 'connect:local', 'inline-critical', 'broken-links-local' ]);
};
