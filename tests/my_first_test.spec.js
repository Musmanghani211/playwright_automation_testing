const { test, expect } = require("@playwright/test");
// const { hello, helloword } = require("./demo/hello.js");

// import { hello, helloword } from "./demo/hello.js";

// console.log(hello());
// console.log(helloword());

test("my first test", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});
