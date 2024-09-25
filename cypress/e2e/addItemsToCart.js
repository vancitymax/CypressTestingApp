describe('Add Items to Cart Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
  });

  it('should add items to the cart successfully', () => {
    const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];

    
    cy.addItemsToCart(itemsToAdd);

   
    cy.get('.shopping_cart_badge').should('have.text', '2');

    cy.get('.shopping_cart_link').click();
    itemsToAdd.forEach(itemName => {
      cy.get('.cart_item').contains(itemName).should('be.visible');
    });
  });
});
