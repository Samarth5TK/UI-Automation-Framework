const { chromium } = require('playwright');
const LoginPage = require('../pages/loginPage');
const ProductsPage = require('../pages/productsPage');
const CartPage = require('../pages/cartPage');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);

  try {
    // Setup
    await loginPage.navigate();
    await loginPage.login('standard_user','secret_sauce');

    // Verification of login
    const isOnProductsPage = await loginPage.isProductsPage();
    if (!isOnProductsPage) throw new Error('Failed to login and reach Products page');

    // Get product details and add to cart
    const { productName } = await productsPage.getFirstProductDetails();
    await productsPage.addFirstProductToCart();

    // Navigate to cart and verify product
    await productsPage.navigateToCart();
    const isProductInCart = await cartPage.verifyProductInCart(productName);
    if (!isProductInCart) throw new Error('Product was not found in the cart');

    // Logout
    await cartPage.logout();

  } catch (error) {
    console.error('Test failed:', error);
  } finally {
    // Teardown
    await browser.close();
  }
})();
