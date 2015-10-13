module.exports = {
  options: {
    emitError: true,
    emitSuccess: true,
    reporterOutput: 'SCSS-Lint-Report.xml',
    exclude: [
      'bower_components/Boneless/**/*.scss'
    ]
  },
  sass: [
    '<%= config.directories.sass %>site.scss'
  ],
  partials: [
    '<%= config.directories.partials %>css/*.scss'
  ]
};
