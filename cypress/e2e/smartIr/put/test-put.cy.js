import LoginPage from './loginPage.js';
import CalculatorPage from './calculatorPage.js';
import NoteImportPage from './noteImportPage.js';

describe('Smartt IR - Exercicio de PUT', () => {
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
    noteImportPage.uploadNoteFile('put.pdf');
    noteImportPage.clickEnviarButton();
    calculatorPage.esperarTempo();
    noteImportPage.tratarExecaoCanvas();
    noteImportPage.clickHistoricoNotasButton();
  });
  
    
    it.only('Exercer Opções de Put Comprada', () => {
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
    
    it.only('Exercer opção de Put Vendida', () => {
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
    noteImportPage.tratarExecaoCanvas();
    
    });
    
    it.only('Excluir Notas inseridas', () => {
    cy.excluirNotaProcessada() //adicionei uma função dentro do commands.js onde ele faz a exclusão das notas de corretagem

    
     
     });  
         });