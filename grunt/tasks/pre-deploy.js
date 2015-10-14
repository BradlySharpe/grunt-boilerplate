module.exports = function(grunt) {
  grunt.registerTask('pre-deploy', [ 'sitemap', 'runWithNgrok:pagespeed.localDesktop:pagespeed.localMobile:yslow.local' ]);
};
