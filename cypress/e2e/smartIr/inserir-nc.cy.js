import 'cypress-file-upload';

describe('SmartTir Login', () => {
  beforeEach(() => {
    cy.visit('https://smarttir.smarttbot.com/login/#/identidade')
    cy.get('input[name="email"]').type(Cypress.env('email')) //digita o e-mail
    cy.contains('Avançar').click() // clica no botão avançar
    cy.get('input[name="password"]').type(Cypress.env('senha')) //digite sua senha
    cy.contains('Entrar').click() //clique no botão entrar
    
  })

  it('Enviar nota de corretagem', () => {

    cy.contains('Calculadora').click() //clique em calculadora
    cy.contains('Importação de notas').click() //clique em importação de notas
    cy.get('input[type="file"]').then(subject => {
      // Anexe o arquivo com o método attachFile do plugin
     cy.fixture('opcoes.pdf', 'binary')
       .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
        cy.wrap(subject).attachFile({ fileContent, fileName: 'opcoes.pdf', mimeType: 'application/pdf' });
});
  });
      cy.get('button.fontBotao2').click(); //clicar no botão enviar
    cy.wait(500)
    cy.get('.fontBotaoCancelar').click(); //clicar no botão Historico de Notas

  })

it('Excluir Notas inseridas', () =>{
    cy.contains('Calculadora').click() //clique em calculadora
    cy.get('a[href="/HistoricoNotas"]').click({ multiple: true }); //clique em Historico de Notas
    cy.get('button.p-button-danger2').eq(0).click(); //clicar nos 3 pontinhos para exclusão
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    }) //tratar exceção
    cy.get('a.p-menuitem-link:contains("Excluir")').click(); //clicar em excluir
    cy.get('button.p-button-primary').click();//clicar em excluir no modal de confirmação
    cy.contains('Histórico apagado.').should('be.visible'); //confirmar toast de exclusão





})



  })
