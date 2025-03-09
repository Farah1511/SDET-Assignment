class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = '.inventory_item:first-child button'; // First product's "Add to Cart" button
        this.cartButton = '.shopping_cart_link';
    }

    async addFirstProductToCart() {
        await this.page.click(this.addToCartButton);
    }

    async goToCart() {
        await this.page.click(this.cartButton);
    }
}

module.exports = { ProductPage };
