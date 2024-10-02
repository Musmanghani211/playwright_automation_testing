import { test, expect } from "@playwright/test";

test("record demo test", async ({ page }) => {
  await page.locator("body").click();
  await page.goto("about:blank");
  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole("button", { name: "Open Menu" }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
