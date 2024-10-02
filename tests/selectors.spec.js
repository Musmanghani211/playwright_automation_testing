import { test, expect } from "@playwright/test";
import { text } from "stream/consumers";

test("selectors demo class", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
 

  await page.click("id=user-name");
  await page.locator("id=user-name").fill("something");
  await page.locator('[id = "user-name"]').fill("else");

  await page.locator("#login-button").click();
  await page.pause();
  await page.locator('//input[@name="password"]').fill("faraday2");
  await page.locator("text=LOGIN").click();
  await page.locator('input:has-text=(LOGIN)').click();
});
