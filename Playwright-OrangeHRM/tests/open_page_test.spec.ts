import { test, expect } from "@playwright/test";

test("Verify login page title", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await expect(page).toHaveTitle("OrangeHRM");
});