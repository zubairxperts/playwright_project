import{Given,When,Then} from "@cucumber/cucumber"
import{Browser,Page,chromium,BrowserContext} from "@playwright/test" 
import{page} from "../baselib/basehooks"

When('user enter invalid username and password', async function () {
    let username= page.locator("#user-name")
    await username.fill("standard");
    let password= page.locator("#password")
    await password.fill("secret_sauce")
});


Given('To user launch chrome browser and pass url', async function () {
  await page.goto("https://www.saucedemo.com/");
});

When('to user enter {string} and {string}', async function (user, pass) {
    let username= page.locator("#user-name")
    await username.fill(user);
    let password= page.locator("#password")
    await password.fill(pass)

});
