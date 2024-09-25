describe('Logout Test', () => {
    const firstName = 'John';   // User's first name
    const lastName = 'Doe';      // User's last name
    const postalCode = '12345';  // User's postal code
  
    beforeEach(() => {
      
      cy.visit('https://www.saucedemo.com/');
  
      
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
  
      // Click on the finish button to submit the checkout
      cy.get('[data-test="finish"]').click();
      cy.get('[data-test="back-to-products"]').click()
    });
  
    it('should log out successfully after completing the checkout', () => {
      
      
  
      // Assert that the main page is visible
    
      cy.get('.title').should('contain', 'Products');
  
      // Click on the menu button (hamburger icon or similar)
      cy.get('#react-burger-menu-btn').click();
  
      // Click on the logout button
      cy.get('#logout_sidebar_link').click();
  
      
      
      
   
      cy.get('[data-test="username"]').should('be.visible');
      cy.get('[data-test="password"]').should('be.visible');
  
      // Optionally, verify that any session-related information is cleared
      cy.get('[data-test="login-button"]').should('be.visible').and('contain', 'Login');
    });
  });
  