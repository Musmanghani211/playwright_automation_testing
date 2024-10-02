import { test, expect, chromium } from "@playwright/test";

test("slow motion video recording demo", async () => {
  const browser = await chromium.launch({ slowMo: 1000, headless: false });
  const context = await browser.newContext({
    recordVideo: {
      dir: "video/",
      size: { width: 800, height: 600 },
    },
  });
  const page = await context.newPage();

  await page.goto("https://www.saucedemo.com/");
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill("standard_user");
  await page.locator('[data-test="password"]').fill("secret_sauce");
  await page.locator('[data-test="login-button"]').click();
  await context.close();
});
