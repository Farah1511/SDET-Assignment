const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
                       

                      // Verify Users Login with inValid Credentials:
test('Verify User Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://www.saucedemo.com/');
    
    await loginPage.login('TestData', 'admin');
    
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toHaveText('Epic sadface: Username and password do not match any user in this service');
});
// ..................................................................................
                       // Verify User Login with Valid Credentials:
// test('Verify User Login with Valid Credentials', async ({ page }) => {
//     const loginPage = new LoginPage(page);

//     await page.goto('https://www.saucedemo.com/');
//     await loginPage.login('standard_user', 'secret_sauce');

//     await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
// });

// ..................................................................................
                    // Verify Users Login with Different Valid Credentials:
// const validUsers = [
//     'standard_user',
//     'locked_out_user',
//     'problem_user',
//     'performance_glitch_user',
//     'error_user',
//     'visual_user'
// ];
// test.describe('Verify User Login with Different Valid Credentials', () => {
//     for (const username of validUsers) {
//         test(`Login with ${username}`, async ({ page }) => {
//             const loginPage = new LoginPage(page);
            
//             await page.goto('https://www.saucedemo.com/');
//             await loginPage.login(username, 'secret_sauce');

//             await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
//         });
//     }
// });

// ..................................................................................
                        // Handles Both Successful and Failed Logins
const users = [
    { username: 'standard_user', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
    { username: 'locked_out_user', expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
    { username: 'problem_user', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
    { username: 'performance_glitch_user', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
    { username: 'error_user', expectedUrl: 'https://www.saucedemo.com/inventory.html' },
    { username: 'visual_user', expectedUrl: 'https://www.saucedemo.com/inventory.html' }
];

test.describe('Verify User Login', () => {
    for (const user of users) {
        test(`Login Test for ${user.username}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await page.goto('https://www.saucedemo.com/');
            await loginPage.login(user.username, 'secret_sauce');

            if (user.expectedUrl) {
                // If user is valid, check if redirected to inventory page
                await expect(page).toHaveURL(user.expectedUrl);
            } else if (user.expectedError) {
                // If user is locked out, check for error message
                const errorMessage = page.locator('[data-test="error"]');
                await expect(errorMessage).toHaveText(user.expectedError);
            }
        });
    }
});

