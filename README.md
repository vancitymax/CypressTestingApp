Cypress Test Suite for Saucedemo
This project contains automated end-to-end tests for the login, cart, checkout, and logout functionalities of the Saucedemo website using Cypress.

Prerequisites
Before you begin, make sure you have the following installed:

1.Node.js (v14.x or higher)
2.npm (comes with Node.js)
3.Cypress


Installation
To set up the project on your local machine, follow these steps:

1.Clone the repository:
git clone https://github.com/vancitymax/CypressTestingApp.git

2.Install dependencies:
Run the following command to install all the necessary dependencies for the project:
npm install


Running the Tests
You can run Cypress tests in two different modes:


1.Run Tests in Headed Mode:
Use this mode to see the browser's graphical interface while the tests are running.
  npx cypress open


2.Run Tests in Headless Mode:
Use this mode to run the tests without opening a browser. It is faster and more suitable for Continuous Integration (CI).
  npx cypress run


Test Structure
The test cases are located in the cypress/e2e directory:
   addItemsToCart.js-Verify if items can be successfully added to the cart and if the correct number of items is displayed in the cart.
   Checkout.js-This test verifies that items added to the cart are correctly displayed and that the user can proceed to the checkout page successfully.
   Checkoutme.js-This test verifies that the "Checkout: Your Information" page is functioning correctly, allowing the user to enter and validate personal information such as first name, last name, and postal code.
   CheckoutProcess.js-This test validates the full checkout process, from adding items to the cart, filling in the required information on the checkout page, and verifying the correct total price with tax on the checkout overview page.
   Login.spec.js-The "Login Page Tests" suite consists of multiple test cases designed to verify the functionality and accessibility of the login page for the application at https://www.saucedemo.com/.
   Logout.js-The "Logout Test" suite verifies the functionality of logging out from the application after completing the checkout process on the https://www.saucedemo.com/ website.
   logoutWithAssert.js-The "Logout Test" suite verifies that a user can successfully log out of the application after completing the checkout process on the https://www.saucedemo.com/ website.
   SubmittingCheck.js-The "Checkout Completion Test" suite verifies that a user can complete the checkout process and reach the order confirmation page on the https://www.saucedemo.com/ website.
   TotalPrice.js-The "Checkout Overview Page Price Verification" test suite verifies that the prices displayed on the checkout overview page are accurate, including the subtotal, tax, and total amount.


   Custom Cypress Commands
    We use custom Cypress commands to simplify test steps, which are located in the cypress/support/commands.js file. Examples include:

    cy.addItemsToCart() – Adds multiple items to the cart efficiently.
    You can check this file to understand how to use and extend these custom commands.

    Configuration
    To configure Cypress settings (e.g., base URL, viewport), you can modify the cypress.config.js file.

    Example configuration:

    const { defineConfig } = require("cypress");

    module.exports = defineConfig({
    e2e: {
    
     excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
        },
    ,
    });
