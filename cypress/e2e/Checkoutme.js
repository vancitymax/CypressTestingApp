describe('Checkout: Your Information Page Test', () => {
    const firstName = 'John';  // Задати конкретні значення
    const lastName = 'Doe';
    const postalCode = '12345';
    const email = 'user@example.com'; // Якщо це релевантно
  
    beforeEach(() => {
      // Відкриваємо сторінку входу
      cy.visit('https://www.saucedemo.com/');
  
      // Входимо в систему з дійсними обліковими даними
      cy.get('[data-test="username"]').type('standard_user');
      cy.get('[data-test="password"]').type('secret_sauce');
      cy.get('[data-test="login-button"]').click();
  
      // Додаємо товари до кошика
      const itemsToAdd = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
      cy.addItemsToCart(itemsToAdd);
  
      // Переходимо до сторінки кошика
      cy.get('.shopping_cart_link').click();
  
      // Переходимо до оформлення замовлення
      cy.get('.checkout_button').click();
    });
  
    it('should pre-fill correct user information on Checkout: Your Information page', () => {
      // Перевіряємо, що URL правильний
      cy.url().should('include', '/checkout-step-one.html');
  
      // Заповнюємо поля з інформацією користувача
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
      
     
     
  
      // Тепер перевіряємо, що поля заповнені правильно
      cy.get('[data-test="firstName"]').should('have.value', firstName);
      cy.get('[data-test="lastName"]').should('have.value', lastName);
      cy.get('[data-test="postalCode"]').should('have.value', postalCode);
      
    
    });
  });
  