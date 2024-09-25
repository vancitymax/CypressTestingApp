const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
     excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
