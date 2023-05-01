module.exports = {
  e2e: {
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.nopcommerce.com/en",
    adminUrl: "https://admin-demo.nopcommerce.com/",
  },
};
