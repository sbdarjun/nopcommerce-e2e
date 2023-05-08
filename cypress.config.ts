module.exports = {
  e2e: {
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "reports",
      overwrite: false,
      html: true,
      json: true,
    },
    baseUrl: "https://www.nopcommerce.com/en",
    adminUrl: "https://admin-demo.nopcommerce.com/",
  },
};
