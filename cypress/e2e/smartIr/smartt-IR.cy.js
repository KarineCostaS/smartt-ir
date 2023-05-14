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
    cy.fixture('call.pdf', 'binary')
       .then(Cypress.Blob.binaryStringToBlob)
        .then(fileContent => {
    cy.wrap(subject).attachFile({ fileContent, fileName: 'call.pdf', mimeType: 'application/pdf' });
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

    it('Exercer Opções de Call Comprada', () => {
    
    cy.contains('Calculadora').click() //clique em calculadora
    cy.get('a.p-ripple[href="/calculadora-ir/ajuste-de-opcoes"]').click(); //clicar em ajuste de opções
    cy.get('button[aria-controls="popup_menu"]').eq(1).click(); //o teste clica na posição 0 zero do array de lista :
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    }) //tratar exceção
    cy.get('a.p-menuitem-link:contains("Exercer opção")').click(); //Exercer Opção
    cy.get('span.p-dropdown-label.p-inputtext.p-placeholder').click(); //realizar o clique no ticket adquirido e digitar "VALE3"
    cy.wait(1000);
    cy.get('li[aria-label="VALE3"][role="option"]').click(); //clicar no ativo VALE3
    cy.get('#dataExercicio > .p-inputtext').type(Cypress.env('datadeExercicioCallComprada')); //inserir data de exercicio
    cy.get('#quantidade > .p-inputtext').click().wait(500).type(Cypress.env('quantidadeCallComprada')); //inserir preço medio da ação
    cy.get('#precoMedio').type('precoMedioCallComprada')
    cy.contains('button.p-button', 'Aplicar').click(); //clique no botão aplicar

  })


    it('Exercer opção de Call Vendida', () => {
    cy.contains('Calculadora').click() //clique em calculadora
    cy.get('a.p-ripple[href="/calculadora-ir/ajuste-de-opcoes"]').click(); //clicar em ajuste de opções
    cy.get('button[aria-controls="popup_menu"]').eq(0).click(); //o teste clica na posição 0 zero do array de lista, sempre que mudar a posição no array é necessario mudar
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    }) //tratar exceção
    cy.get('a.p-menuitem-link:contains("Exercer opção")').click(); //Exercer Opção
    cy.get('span.p-dropdown-label.p-inputtext.p-placeholder').click(); //realizar o clique no ticket adquirido e digitar "VALE3"
    cy.wait(1000);
    cy.get('li[aria-label="VALE3"][role="option"]').click(); //clicar no ativo VALE3
    cy.get('#dataExercicio > .p-inputtext').type(Cypress.env('datadeExercicioCallVendida'));  //inserir data de exercicio
    cy.get('#quantidade > .p-inputtext').click().wait(500).type(Cypress.env('quantidadeCallVendida')); //inserir preço medio da ação
    cy.get('#precomedio').type(Cypress.env('precoMedioCallVendida'))
    cy.contains('button.p-button', 'Aplicar').click(); //clique no botão aplicar
    

   })

   it('Exercer opção de PUT Comprada', () => {



   })
  })
