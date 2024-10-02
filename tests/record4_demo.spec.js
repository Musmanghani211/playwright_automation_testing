import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://www.bing.com/?toWww=1&redig=018001E89A2C46E8BF3ED07BED451C38"
  );
  await page.goto(
    "https://www.bing.com/search?q=playwright+testing+ful+course&form=QBLH&sp=-1&ghc=1&lq=0&pq=playwright+testing+f&sc=10-20&qs=n&sk=&cvid=6732C46179C849D1AD8DA26FF8C5311C&ghsh=0&ghacc=0&ghpl="
  );
  await page.getByRole("link", { name: "Playwright - Complete" }).click();
  await page.getByRole("link", { name: "Blog" }).click();
});
