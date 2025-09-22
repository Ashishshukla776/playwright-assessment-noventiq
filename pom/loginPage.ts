import { Locator, Page } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

export class loginPage {

    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly submitLogin: Locator;

    constructor(page: Page) {
        this.page = page
        this.username = this.page.locator(`#username`);
        this.password = this.page.locator(`#password`);
        this.submitLogin = this.page.locator(`#submit`);
    }

    // Login page navigation
    async navigation() {
        this.page.goto(`https://practicetestautomation.com/practice-test-login/`);
    };

    //Authenticate user via login form
    async login(username?: string, password?: string) {

        const user_name = username ?? process.env.USERNAME!;
        const user_password = password ?? process.env.PASSWORD!;

        // Fill the input field

        await this.username.fill(user_name);
        await this.password.fill(user_password);

        // Verify submit button is visible then click otherwise return error

        const submitBtn = this.submitLogin;

        if (await submitBtn.isVisible()) {
            await submitBtn.click()
        } else {
            throw new Error(`Submit button is either not visible or not available`)
        };

    };


};