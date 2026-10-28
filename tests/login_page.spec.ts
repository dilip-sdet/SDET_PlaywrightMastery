import {test,expect,Locator} from "@playwright/test"

test("Verify the login functionality", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.getByRole("button", {name: 'Login'}).click();
    let loginPageTitle:string = await page.title();
    console.log(loginPageTitle);
    await expect(page).toHaveTitle(loginPageTitle);
    let url:string = page.url();
    console.log(url);
    await expect(page).toHaveURL(/orangehrmlive/);
})