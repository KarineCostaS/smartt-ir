class CalculatorPage {
    clickCalculadora() {
      cy.contains('Calculadora').click();
    }
  
     
    clickEventos() {
        cy.get('a.p-ripple[href="/calculadora-ir/eventos"]').click();
    }
  
    clickMenuEvento(index) {
        cy.get('button[aria-controls="popup_menu"]').eq(index).click();
      }
      
      //clickMenuEvento() {
      //  cy.get('button[aria-controls="popup_menu"]').each(($button, index) => {
      //    if (index === 0) {
//cy.wrap($button).click();
    //      }
     //   });
    //  }
      

    clickAceitarEvento() {
        cy.get('a.p-menuitem-link:contains("Aceitar")').each(($link) => {
          cy.wrap($link).click({ force: true });
        });
      }
      
      
    clickRecusarEvento(){
        cy.get('a.p-menuitem-link:contains("Recusar")').click()
    }

    verificaAceitacao(){
        cy.get('div.sc-hGPBjI.blPLHJ').should('contain', 'Aceito'); //verifica se o elemento mudou status para Aceito
    }

    verificaNegacao(){
        cy.get('div.sc-hGPBjI.gIeGEp').should('contain', 'Negado');//verifica se o elemento mudou status para Negado

    }

    esperaAtualizacao(){
        cy.wait(1000)
    }
    
  }
  
  export default CalculatorPage;
  

  