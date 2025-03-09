const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductPage } = require('../pages/ProductPage');
const { CartPage } = require('../pages/CartPage');
const { CheckoutPage } = require('../pages/CheckoutPage');

test('User can place an order successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    await page.goto('https://www.saucedemo.com/');
    
    await loginPage.login('standard_user', 'secret_sauce');
    //Validate the "Add to Cart" Feature
    await productPage.addFirstProductToCart();
    await productPage.goToCart();
    // Test the "Checkout" Functionality
    await cartPage.proceedToCheckout();
    await checkoutPage.enterCheckoutDetails('Noraiz', 'Khan', '597');
    await checkoutPage.completeCheckout();

    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});
