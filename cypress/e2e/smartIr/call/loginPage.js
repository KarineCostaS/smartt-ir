class LoginPage {
    visitLoginPage() {
      cy.visit('https://smarttir.smarttbot.com/login/#/identidade');
    }
  
    typeEmail(email) {
      cy.get('input[name="email"]').type(email);
    }
  
    clickAvancarButton() {
      cy.contains('Avançar').click();
    }
  
    typePassword(password) {
      cy.get('input[name="password"]').type(password);
    }
  
    clickEntrarButton() {
      cy.contains('Entrar').click();
    }
  }
  
  export default LoginPage;
  