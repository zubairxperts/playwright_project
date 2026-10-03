import{Given,When,Then} from "@cucumber/cucumber"
import{Browser,Page,chromium,BrowserContext} from "@playwright/test" 
import{page} from "../baselib/basehooks"


Given('To user launch browser and pass amazon', async function () {
    await page.goto("https://www.amazon.in/");
});
