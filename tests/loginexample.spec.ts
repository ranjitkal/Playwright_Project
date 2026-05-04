import { test, Browser, Page, BrowserContext } from '@playwright/test';
import { BrowserFactory } from './BrowserFactory';
 
let browser: Browser;
let context: BrowserContext;
let page: Page;
 
test.describe.configure({ mode: 'serial' }); // ✅ serial execution
 
test.describe('@smoke Browser Factory Example', () => {
 
  test.beforeAll(async () => {
    const browserName = process.env.BROWSER || 'chromium';
   
    browser = await BrowserFactory.getBrowser(browserName);
 
    context = await browser.newContext();
    page = await context.newPage();
  });
 
  test('Open application', async () => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
 
  test('Validate title', async () => {
    await page.waitForTimeout(2000);
    console.log(await page.title());
    const Title = await page.title();
      await page.waitForTimeout(2000);
    console.log("Page title is: " + Title);
  //await expect(page).toHaveTitle(/Box | Login/);


 await page.fill('input[name="username"]','Admin');

 await page.locator('input[name="password"]').pressSequentially('admin123',{delay:300});
   await page.waitForTimeout(2000);
 //await page.fill('input[name="password"]','Ranjit@7001');
 await page.waitForTimeout(2000);
await page.locator('//button[@type="submit"]').click({button:'left' , delay:3000});
 
await page.waitForTimeout(2000);
await page.locator('//*[@class="oxd-userdropdown-tab"]').click({button:'left' , delay:3000});
await page.locator('//*[text()="Logout"]').click({button:'left' , delay:3000});




  });



 
  test.afterAll(async () => {
  await browser.close();
   
  });
 
});
