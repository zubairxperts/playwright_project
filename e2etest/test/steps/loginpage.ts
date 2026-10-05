import{Given,When,Then} from "@cucumber/cucumber"
import{Browser,Page,chromium,BrowserContext} from "@playwright/test" 
import{page} from "../baselib/basehooks"

Then('user click login button', async function () {
            let loginBtn= page.locator("#login-button")
            await loginBtn.click();
            await page.waitForTimeout(5000)
});

Given('To user launch browser', async function () {
  await page.goto("https://www.saucedemo.com/");
});

When('user enter valid username and passeword', async function () {
  let username= page.locator("#user-name")
            await username.fill("standard_user");
            let password= page.locator("#password")
            await password.fill("secret_sauce")
});

When('user enter invalid username and passeword', async function () {
  let username= page.locator("#user-name")
            await username.fill("problem_user");
            let password= page.locator("#password")
            await password.fill("secret_sauce")
            console.log("Zubair update")
});

