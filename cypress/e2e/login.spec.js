describe('Login Page Tests', () => {
 
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should be accessible and load without errors', () => {
    
    cy.title().should('eq', 'Swag Labs');

    
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
  });

  it('should log in successfully with valid credentials', () => {
   
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('contain', 'Products');
  });

  it('should not log in with invalid credentials and display an error message', () => {
    
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should('be.visible')
      .and('contain', 'Username and password do not match any user in this service');
  });
});
