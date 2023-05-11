const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    email: 'karine.jornalistace@gmail.com',
    senha: 'Karine05*',
    pdfFileName: "opcoes.pdf"

  },

});
