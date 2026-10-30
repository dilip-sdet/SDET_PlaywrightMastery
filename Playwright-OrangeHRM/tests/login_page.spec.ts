import { expect, test } from "@playwright/test";

test("Verify the login functionality", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com");
  await page.getByPlaceholder("Username").fill("Admin");
  await page.getByPlaceholder("Password").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page).toHaveURL(/\/dashboard\/index/);
  await expect(
    page.getByRole("heading", { name: "Dashboard" }),
  ).toBeVisible();
});