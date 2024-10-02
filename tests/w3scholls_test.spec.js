import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.locator("body").click();
  await page.locator("body").click();
  await page.goto("https://www.google.com/");
  await page.getByLabel("Search", { exact: true }).click();
  await page.getByLabel("Search", { exact: true }).fill("w3schools");
  await page.goto("https://www.w3schools.com/");
  await page.locator("#pagetop").getByLabel("Login to your account").click();
  await page.getByText("Become a W3Schooler 💚Free to").click();
  await page.getByText("Become a W3Schooler 💚Free to").click();
  await page.getByText("Become a W3Schooler 💚Free to").click();
  await page.locator(".LeftSide_leftSideContainer__z2-js").click();
});
