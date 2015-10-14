(function() {
  'use strict';
  module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-config')(grunt, {
      configPath: require('path').join(process.cwd(), 'grunt/config'),
      jitGrunt: {
        customTasksDir: 'grunt/tasks',
        staticMappings: {
          bower: 'main-bower-files',
          scsslint: 'grunt-scss-lint',
          cmq: 'grunt-combine-media-queries'
        }
      },
      data: {
        config: grunt.file.readJSON('./configuration.json'),
        pkg: grunt.file.readJSON('./package.json')
      }
    });
  };
}());

/*
https://github.com/DeuxHuitHuit/grunt-analyze-css
https://github.com/bezoerb/grunt-critical
https://github.com/addyosmani/critical#options
https://github.com/elliottwilliams/grunt-colorguard
https://www.npmjs.com/package/grunt-wpt
 */
