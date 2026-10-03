import{ Before,After,setDefaultTimeout} from "@cucumber/cucumber"
import{Browser,Page,chromium,BrowserContext} from "@playwright/test" 

setDefaultTimeout(1000*60*3)

let browser:Browser;
let bctxt:BrowserContext;
let page: Page


Before(async()=>{
      browser= await chromium.launch({headless:false,channel:"chrome",args:['--start-maximized']});
      bctxt=await browser.newContext();
      page=await bctxt.newPage();

})

After(async()=>{
        await page.close()
        await bctxt.close()
        await browser.close()               
})


export{page}