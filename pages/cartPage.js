class CartPage {
    constructor(page) {
      this.page = page;
      this.cartItemName = '.inventory_item_name';
      this.burgerMenuButton = '#react-burger-menu-btn';
      this.logoutLink = '#logout_sidebar_link';
    }
  
    async verifyProductInCart(expectedProductName) {
      const cartItemName = await this.page.textContent(this.cartItemName);
      return cartItemName === expectedProductName;
    }
  
    async logout() {
      await this.page.click(this.burgerMenuButton);
      await this.page.click(this.logoutLink);
    }
  }
  
  module.exports = CartPage;
  