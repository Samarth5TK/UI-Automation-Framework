const fs = require('fs');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.firstProductName = '.inventory_item_name';
    this.firstProductPrice = '.inventory_item_price';
    this.addToCartButton = 'button.btn_inventory';
    this.cartIcon = '.shopping_cart_link';
  }

  async getFirstProductDetails() {
    const productName = await this.page.textContent(this.firstProductName);
    const productPrice = await this.page.textContent(this.firstProductPrice);
    fs.writeFileSync('productDetails.txt', `Name: ${productName}, Price: ${productPrice}`);
    return { productName, productPrice };
  }

  async addFirstProductToCart() {
    await this.page.click(this.addToCartButton);
  }

  async navigateToCart() {
    await this.page.click(this.cartIcon);
  }
}

module.exports = ProductsPage;
