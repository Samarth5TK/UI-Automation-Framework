# UI Automation Framework for Saucedemo Website

This project is an automated UI testing framework using **Playwright** for testing the "Add to Cart" functionality on the **Saucedemo** website. The framework is designed to follow the **Page Object Model (POM)** design pattern to ensure maintainability and scalability for UI tests.

## Features
- Automates login to the Saucedemo website.
- Tests the "Add to Cart" functionality for products.
- Verifies that the product added to the cart is present in the cart page.
- Saves product details (name and price) to a `productDetails.txt` file.
- Logs out after completing the test case.

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (LTS version)
- **npm** (Node package manager)

## Installation

1. Clone the repository to your local machine:
   'git clone https://github.com/yourusername/ui-automation-framework.git'
2. Navigate into the project directory:
   'cd ui-automation-framework'
3. Install the required dependencies:
   'npm install'
4. Make sure you have Playwright installed:
   'npx playwright install'
5. Running the Tests
   To run the automation script for the "Add to Cart" functionality, simply use the following command:
   'npm test'

## Example Test Flow
1. Navigate to the Saucedemo login page.
2. Log in using predefined credentials (standard_user / secret_sauce).
3. Verify that the login redirects to the Products page.
4. Get the first product’s name and price, and save it to a text file (productDetails.txt).
5. Add the first product to the cart.
6. Navigate to the Cart page and verify that the product is present.
7. Log out of the application.
