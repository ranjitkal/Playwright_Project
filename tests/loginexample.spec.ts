


import { test , expect, Locator } from "@playwright/test"


test ("practice for locators",async({ page })=>{


    //for getvisable text
    await page.goto("https://demo.nopcommerce.com/");
    await page.waitForTimeout(2000);
    const logo:Locator=page.getByAltText("nopCommerce demo store");
    await page.waitForTimeout(2000);
//    logo.click();
    await expect(logo).toBeVisible();
    await expect(page.getByText("Welcome to our store")).toBeVisible();




})









