describe('Proceed to Checkout Test', () => {
    beforeEach(() => {
      // Відкриваємо сторінку входу
      cy.visit('https://www.saucedemo.com/');
  
      // Входимо в систему з дійсними обліковими даними
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
    });
  
    it('should display correct items in the cart and proceed to checkout', () => {
      // Масив товарів, які потрібно додати до кошика
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
  
      // Додаємо товари до кошика
      cy.addItemsToCart(itemsToAdd);
  
      // Переходимо до сторінки кошика
      cy.get('.shopping_cart_link').click();
  
      // Перевіряємо, що обидва товари присутні в кошику
      itemsToAdd.forEach(itemName => {
        cy.get('.cart_item').contains(itemName).should('be.visible');
      });
  
      // Переходимо до оформлення замовлення
      cy.get('.checkout_button').click();
  
      // Перевіряємо, що URL правильний
      cy.url().should('include', '/checkout-step-one.html');
  
      
    
  
      // Перевіряємо, що відображається кнопка продовження оформлення замовлення
      cy.get('[data-test="continue"]').should('contain', 'Continue');
    });
  });
  