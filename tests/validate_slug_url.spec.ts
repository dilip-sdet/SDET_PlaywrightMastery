import {test,expect} from "@playwright/test"

test("Verify slug URL", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await expect(page).toHaveURL(/orangehrmlive/);
})