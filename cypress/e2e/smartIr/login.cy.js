describe('SmartTir Login', () => {
  beforeEach(() => {
    cy.visit('https://smarttir.smarttbot.com/login/#/identidade')
  })

  it('should be able to enter email', () => {

    const pdfFileName = Cypress.env('pdfFileName'); //variavel para mudar arquivo PDF de Nota de Importação


    cy.get('input[name="email"]').type(Cypress.env('email')) //digita o e-mail
    cy.contains('Avançar').click() // clica no botão avançar
    cy.get('input[name="password"]').type(Cypress.env('senha')) //digite sua senha
    cy.contains('Entrar').click() //clique no botão entrar
    cy.contains('Calculadora').click() //clique em calculadora
    cy.contains('Importação de notas').click() //clique em importação de notas
    cy.get('.p-fileupload-choose input[type="file"]').attachFile(pdfFileName, { force: true }); //anexar nota
    cy.contains(pdfFileName).should('be.visible'); //anexar nota
    cy.get('button.fontBotao2').click(); //clicar no botão enviar
    cy.wait(1000)
    cy.contains('Histórico de notas').click();



  })

  })
