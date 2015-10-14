module.exports = {
  options: {
    locations: '<%= config.webpagetest.locations %>',
    key: process.env.WPT_API_KEY
  },
  destination: {
    options: { url: '<%= config.webpagetest.testPages %>' },
    dest: 'webpagetest/'
  }
};
