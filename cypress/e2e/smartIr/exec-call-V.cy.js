describe('SmartTir Login', () => {
    beforeEach(() => {
      cy.visit('https://smarttir.smarttbot.com/login/#/identidade')
      cy.get('input[name="email"]').type(Cypress.env('email')) //digita o e-mail
      cy.contains('Avançar').click() // clica no botão avançar
      cy.get('input[name="password"]').type(Cypress.env('senha')) //digite sua senha
      cy.contains('Entrar').click() //clique no botão entrar
      
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

   })