import LoginPage from './loginPage.js';
import CalculatorPage from './calculatorPage.js';
import NoteImportPage from './noteimportPage.js';

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
    noteImportPage.uploadNoteFile('call.pdf');
    cy.get('button.fontBotao2').click();
    cy.wait(500);
    cy.get('.fontBotaoCancelar').click();
  });
  
    
    it('Exercer Opções de Call Comprada', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickAjusteDeOpcoesLink();
    calculatorPage.clickExercerOpcao(1);
    calculatorPage.clickExercerOpcaoLink();
    calculatorPage.typeAtivo('VALE3');
    calculatorPage.typeDataExercicio(Cypress.env('datadeExercicioCallComprada'));
    calculatorPage.typeQuantidade(Cypress.env('quantidadeCallComprada'));
    calculatorPage.typePrecoMedio(Cypress.env('precoMedioCallComprada'));
    calculatorPage.clickAplicarButton();
    });
    
    it('Exercer opção de Call Vendida', () => {
    calculatorPage.clickCalculadora();
    calculatorPage.clickAjusteDeOpcoesLink();
    calculatorPage.clickExercerOpcao(0);
    calculatorPage.clickExercerOpcaoLink();
    calculatorPage.typeAtivo('VALE3');
    calculatorPage.typeDataExercicio(Cypress.env('datadeExercicioCallVendida'));
    calculatorPage.typeQuantidade(Cypress.env('quantidadeCallVendida'));
    calculatorPage.typePrecoMedio(Cypress.env('precoMedioCallVendida'));
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
    
    it('Excluir Notas inseridas', () => {
    cy.excluirNotaProcessada() //adicionei uma função dentro do commands.js onde ele faz a exclusão das notas de corretagem
     
     });  
         });