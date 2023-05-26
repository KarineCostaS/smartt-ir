import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
    // ignore exceptions thrown by chart.js
    if (err.message.includes('Chart with ID')) {
      return false
    }
    // returning false here prevents Cypress from failing the test
    return false
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Canvas is already in use')) {
        // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
        // antes de realizar a próxima ação

        // Retorne false para evitar que o Cypress encerre o teste automaticamente
        return false;
      }
    })