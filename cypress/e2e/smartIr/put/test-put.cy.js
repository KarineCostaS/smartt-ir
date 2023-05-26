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


  
  it('Enviar nota de corretagem', () => {
    const noteImportPage = new NoteImportPage(); // Instancie a classe NoteImportPage
  
    noteImportPage.clickCalculadora();
    noteImportPage.clickImportacaoNotasLink();
    noteImportPage.uploadNoteFile('put.pdf');
    noteImportPage.clickEnviarButton();
    cy.wait(500);
    noteImportPage.clickHistoricoNotasButton();
  });
  
    
    it('Exercer Opções de Put Comprada', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickAjusteDeOpcoesLink();
    calculatorPage.clickExercerOpcao(2);
    calculatorPage.clickExercerOpcaoLink();
    calculatorPage.typeAtivo('RADL3');
    calculatorPage.typeDataExercicio(Cypress.env('datadeExercicioPutComprada'));
    calculatorPage.typeQuantidade(Cypress.env('quantidadePutComprada'));
    calculatorPage.typePrecoMedio(Cypress.env('precoMedioPutComprada'));
    calculatorPage.clickAplicarButton();

    });
    
    it('Exercer opção de Put Vendida', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickAjusteDeOpcoesLink();
    calculatorPage.clickExercerOpcao(4);
    calculatorPage.clickExercerOpcaoLink();
    calculatorPage.esperarTempo();
    calculatorPage.typeAtivo('RADL3');
    calculatorPage.typeDataExercicio(Cypress.env('datadeExercicioPutVendida'));
    calculatorPage.typeQuantidade(Cypress.env('quantidadePutVendida'));
    calculatorPage.typePrecoMedio(Cypress.env('precoMedioPutVendida'));
    calculatorPage.clickAplicarButton();

    Cypress.on('uncaught:exception', (err, runnable) => {
      if (err.message.includes('Canvas is already in use')) {
        // Faça o tratamento necessário, como destruir o canvas ou aguardar um tempo
        // antes de realizar a próxima ação

        // Retorne false para evitar que o Cypress encerre o teste automaticamente
        return false;
      }
    });
    
    });
    
    it.only('Excluir Notas inseridas', () => {
    cy.excluirNotaProcessada() //adicionei uma função dentro do commands.js onde ele faz a exclusão das notas de corretagem
    cy.excluirNotaProcessada1()
    
     
     });  
         });