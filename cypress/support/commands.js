import 'cypress-file-upload'

Cypress.Commands.add('excluirNotaProcessada', () => {
    cy.contains('Calculadora').click()
    cy.wait(500);
    cy.get('a[href="/HistoricoNotas"]').click({ multiple: true });
    cy.get('button.p-button-danger2').eq(0).click();
    cy.get('a.p-menuitem-link:contains("Excluir")').click();
    cy.wait(500)
    cy.contains('Sim, excluir nota').click();
    cy.contains('Histórico apagado.').should('be.visible');
  });
  
  Cypress.Commands.add('excluirNotaProcessada1', () => {

    cy.contains('Calculadora').click()
    cy.wait(500);
    cy.get('a[href="/HistoricoNotas"]').click({ multiple: true });
    cy.get('button.p-button-danger2').eq(1).click();
    cy.get('a.p-menuitem-link:contains("Excluir")').click();
    cy.wait(500)
    cy.contains('Sim, excluir nota').click();
    cy.contains('Histórico apagado.').should('be.visible');
  });

 