import {test, expect} from '@playwright/test';
import { LoginPage } from '../pom/loginPage';
import dotenv from 'dotenv';
import { message } from '../messages/message';
import { loginSel } from '../selectors/login';
dotenv.config();

const validUser = process.env.USER!;
const validuserUpper = validUser.charAt(0).toUpperCase() + validUser.slice();
const validPassword = process.env.PASSWORD!;

let loginpage: LoginPage;

test.describe(`Login functionality test`, async ()=>{

    test.beforeEach(async ({ page }) => {
        loginpage = new LoginPage(page);
        await loginpage.navigation();
      });

    test(`TC-01 : Verify valid login `, async ({page})=> {
        
        await loginpage.login();
        await expect(page.locator(loginSel.successTitle)).toHaveText(message.success);

    });

    test(`TC-02 : Verify invalid password`, async ({page})=> {

        await loginpage.login(validUser, 'Ashish123');
        await expect(page.locator(loginSel.error)).toHaveText(message.invalidPassword);

    });

    test(`TC-03 : Verify empty username`, async ({page})=> {

        await loginpage.login('', validPassword);
        await expect(page.locator(loginSel.error)).toHaveText(message.invalidUser);

    });

    test(`TC-04 : Verify empty password`, async ({page})=> {
 
        await loginpage.login(validUser, '');
        await expect(page.locator(loginSel.error)).toHaveText(message.invalidPassword);

    });

    test(`TC-05 : Verify logged-in-successfully navigation after login`, async ({page})=> {
        
        await loginpage.login();
        await expect(page).toHaveURL(`${process.env.URL}logged-in-successfully/`);

    });

    test(`TC-06 : Verify case-sensitive username`, async ({page})=> {
       
        await loginpage.login(validuserUpper, validPassword);
        await expect(page.locator(loginSel.error)).toHaveText(message.invalidUser);

    });

    test(`TC-07 : Verify password masking`, async ({page})=> {
       
        await page.locator(loginSel.password).fill(validPassword);
        const inputType = await page.locator('#password').getAttribute('type');
        expect(inputType).toBe('password');

    });

    test(`TC-08 : Verify submit button click without entering details`, async ({page})=> {
       
        await loginpage.login('', '');
        await expect(page.locator(loginSel.error)).toHaveText(message.invalidUser);

    });

});
