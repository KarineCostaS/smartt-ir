import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
    // ignore exceptions thrown by chart.js
    if (err.message.includes('Chart with ID')) {
      return false
    }
    // returning false here prevents Cypress from failing the test
    return false
  })
  