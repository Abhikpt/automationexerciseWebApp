const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: 
  {
   // baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // This is where you can add plugins or other configurations
      require("cypress-mochawesome-reporter/plugin")(on);   // Add Mochawesome reporter plugin
    },

    specPattern: "cypress/e2e/**/*.cy.js",    // Adjust the spec pattern to match your test files
    supportFile: "cypress/support/e2e.js",   // Specify the support file for global configurations

    testIsolation: true,
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: 
  {
    reportDir: 'cypress/downloads',
    overwrite: false,
    html: true,
    json: true,
  }

});


