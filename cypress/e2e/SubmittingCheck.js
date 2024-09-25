describe('Checkout Completion Test', () => {
    const firstName = 'John';   // User's first name
    const lastName = 'Doe';      // User's last name
    const postalCode = '12345';  // User's postal code
  
    beforeEach(() => {
      // Open the login page
      cy.visit('https://www.saucedemo.com/');
  
      // Log in with valid credentials
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Add items to the cart
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
      cy.addItemsToCart(itemsToAdd);
  
      // Navigate to the cart page
      cy.get('.shopping_cart_link').click();
  
      // Proceed to checkout
      cy.get('.checkout_button').click();
  
      // Fill in the required user information
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
      
      // Click on the continue button
      cy.get('[data-test="continue"]').click();
    });
  
    it('should submit the checkout and verify Checkout: Complete! page', () => {
      // Verify that the URL is correct for the overview page
      cy.url().should('include', '/checkout-step-two.html');
  
      // Click on the finish button to submit the checkout
      cy.get('[data-test="finish"]').click();
  
      // Verify that the URL is correct for the Complete page
      cy.url().should('include', '/checkout-complete.html');
  
      // Verify that the confirmation message is displayed
      cy.get('.complete-header').should('contain', 'Thank you for your order!');
      cy.get('.complete-text').should('contain', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    });
  });
  