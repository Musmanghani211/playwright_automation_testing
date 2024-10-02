import { test, expect } from "@playwright/test";

test("login page for demo ", async ({ page }) => {
  await page.goto("https://demo.applitools.com/");
  await page.pause();
  await page.locator("id=username").fill("usman1421");
  await page.locator("id=password").fill("password");
  await page.locator("id=log-in").click();
});
 