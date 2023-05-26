class CalculatorPage {
    clickCalculadora() {
      cy.contains('Calculadora').click();
    }
  
    clickAjusteDeOpcoesLink() {
      cy.get('a.p-ripple[href="/calculadora-ir/ajuste-de-opcoes"]').click();
      
    }
  
    clickExercerOpcao(index) {
      cy.get('button[aria-controls="popup_menu"]').eq(index).click();
      Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Canvas is already in use')) {
          // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
          // antes de realizar a próxima ação
  
          // Retorne false para evitar que o Cypress encerre o teste automaticamente
          return false;
        }
      });
    }
  
    clickExercerOpcaoLink() {
      cy.get('a.p-menuitem-link:contains("Exercer opção")').click();
    }
  
    typeAtivo(ativo) {
      cy.get('span.p-dropdown-label.p-inputtext.p-placeholder').click().wait(1000);
      cy.get(`li[aria-label="${ativo}"][role="option"]`).click();
    }
  
    typeDataExercicio(date) {
      cy.get('#dataExercicio > .p-inputtext').type(date);
    }
  
    typeQuantidade(quantidade) {
      cy.get('#quantidade > .p-inputtext').click().wait(500).type(quantidade);
    }
  
    typePrecoMedio(precoMedio) {
      cy.get('#precomedio').type(precoMedio);
    }
  
    clickAplicarButton() {
      cy.contains('button.p-button', 'Aplicar').click();
    }

    esperarTempo(){
        cy.wait(500);
    }
  }
  

  export default CalculatorPage;
  