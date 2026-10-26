import { test, expect } from "@playwright/test";

test("check the login page title",async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    let pageTitle: string = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle("OrangeHRM");
})