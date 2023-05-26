import LoginPage from './loginPage.js';
import CalculatorPage from './calculatorPage.js';
import NoteImportPage from './noteImportPage.js';

describe('SmartTir Login', () => {
  const loginPage = new LoginPage();
  const calculatorPage = new CalculatorPage();
  const noteImportPage = new NoteImportPage();

  beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.typeEmail(Cypress.env('email'));
    loginPage.clickAvancarButton();
    loginPage.typePassword(Cypress.env('senha'));
    loginPage.clickEntrarButton();
  });


  
  it.only('Enviar nota de corretagem', () => {
    const noteImportPage = new NoteImportPage(); // Instancie a classe NoteImportPage
  
    noteImportPage.clickCalculadora();
    noteImportPage.clickImportacaoNotasLink();
    noteImportPage.uploadNoteFile('inter.pdf');
    noteImportPage.uploadNoteFile('clear.pdf');
    cy.get('button.fontBotao2').click();
    calculatorPage.esperaAtualizacao();
    cy.get('.fontBotaoCancelar').click();
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Canvas is already in use')) {
          // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
          // antes de realizar a próxima ação
  
          // Retorne false para evitar que o Cypress encerre o teste automaticamente
          return false;
        }
      });
  });
  
    
    it.only('Aceitar Evento Clear', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickEventos();
    calculatorPage.clickMenuEvento(0);
    calculatorPage.clickAceitarEvento();
    calculatorPage.esperaAtualizacao();
    calculatorPage.verificaAceitacao();
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Canvas is already in use')) {
          // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
          // antes de realizar a próxima ação
  
          // Retorne false para evitar que o Cypress encerre o teste automaticamente
          return false;
        }
      });
   
    });

    it('Recusar Evento Clear', () => {
        calculatorPage.clickCalculadora();
        calculatorPage.clickEventos();
        calculatorPage.clickMenuEvento(1);
        calculatorPage.clickRecusarEvento();
        calculatorPage.esperaAtualizacao();
        calculatorPage.verificaNegacao();
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Canvas is already in use')) {
              // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
              // antes de realizar a próxima ação
      
              // Retorne false para evitar que o Cypress encerre o teste automaticamente
              return false;
            }
          });
        });
    
    it('Aceitar Evento Inter', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickEventos();
    calculatorPage.clickMenuEvento(1);
    calculatorPage.clickAceitarEvento();
    calculatorPage.esperaAtualizacao();
    calculatorPage.verificaAceitacao();
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Canvas is already in use')) {
          // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
          // antes de realizar a próxima ação
  
          // Retorne false para evitar que o Cypress encerre o teste automaticamente
          return false;
        }
      });
    
    });
    
it.only('Recusar Evento Inter', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickEventos();
    calculatorPage.clickMenuEvento(1);
    calculatorPage.clickRecusarEvento();
    calculatorPage.esperaAtualizacao();
    calculatorPage.verificaNegacao();
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Canvas is already in use')) {
          // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
          // antes de realizar a próxima ação
  
          // Retorne false para evitar que o Cypress encerre o teste automaticamente
          return false;
        }
      });

})
   it.only('Excluir Notas inseridas', () => {
     cy.excluirNotaProcessada()
     cy.excluirNotaProcessada1() //adicionei uma função dentro do commands.js onde ele faz a exclusão das notas de corretagem
    
    });  
        });
   
       