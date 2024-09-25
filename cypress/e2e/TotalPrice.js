describe('Checkout Overview Page Price Verification', () => {
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
  
    it('should verify that the total price displayed is accurate', () => {
      // Verify that the URL is correct for the overview page
      cy.url().should('include', '/checkout-step-two.html');
  
      // Define item prices
      const itemPrice1 = 29.99; // Price for 'Sauce Labs Backpack'
      const itemPrice2 = 9.99;   // Price for 'Sauce Labs Bike Light'
      const taxRate = 0.08;      // Assuming an 8% sales tax
  
      // Calculate subtotal, tax, and total
      const subtotal = itemPrice1 + itemPrice2;
      const tax = subtotal * taxRate;
      const total = (subtotal + tax).toFixed(2); // Total price with tax
  
      // Verify displayed prices on the Checkout Overview page
      cy.get('.summary_subtotal_label').should('contain', `Item total: $${subtotal.toFixed(2)}`);
      cy.get('.summary_tax_label').should('contain', `Tax: $${tax.toFixed(2)}`);
      cy.get('.summary_total_label').should('contain', `Total: $${total}`);
    });
  });
  