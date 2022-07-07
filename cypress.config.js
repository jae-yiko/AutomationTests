const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    typeEmail:'[data-qa=type_email]',
    continueBtn:'[data-qa=continue_button]'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
