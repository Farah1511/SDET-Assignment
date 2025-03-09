class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstNameField = '#first-name';
        this.lastNameField = '#last-name';
        this.postalCodeField = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
    }

    async enterCheckoutDetails(firstName, lastName, postalCode) {
        await this.page.fill(this.firstNameField, firstName);
        await this.page.fill(this.lastNameField, lastName);
        await this.page.fill(this.postalCodeField, postalCode);
        await this.page.click(this.continueButton);
    }

    async completeCheckout() {
        await this.page.click(this.finishButton);
    }
}

module.exports = { CheckoutPage };
