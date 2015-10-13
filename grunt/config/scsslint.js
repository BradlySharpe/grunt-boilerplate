module.exports = {
  options: {
    emitError: true,
    emitSuccess: true,
    reporterOutput: 'SCSS-Lint-Report.xml',
    exclude: [
      'bower_components/Boneless/boneless.scss'
    ]
  },
  allFiles: [
    //'<%= config.directories.partials %>css/*.scss',
    '<%= config.directories.sass %>site.scss'
  ]
};
