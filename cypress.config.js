const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/examples/*.js',
    defaultCommandTimeout: 8000,
    reporter:"mochawesome",
    projectId: "zeuk2b",
    env:{

      url:"https://demo.nopcommerce.com/"
    }
  },
});
