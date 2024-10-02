import { test, expect } from "@playwright/test";

test("assertion demo", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/");
  //   await page.pause();

  // check the element is present or not
  await expect(page.getByRole("heading", { name: "The Kitchen" })).toHaveCount(
    1
  );

  await expect(page.getByRole("heading", { name: "The Kitchen" })).toHaveClass(
    "chakra-heading css-dpmy2a"
  );

  await expect(
    page.getByRole("heading", { name: "The Kitchen" })
  ).toHaveAttribute("class", "chakra-heading css-dpmy2a");

  await expect(page).toHaveURL("https://kitchen.applitools.com/");
  await expect(page).toHaveTitle("The Kitchen");

  //visual validation with screenshot
  await page.pause();

  await expect(page).toHaveScreenshot();

  // Checking for the element and clicking it if found
  // const heading = await page.getByRole("heading", { name: "The Kitchen" });
  // if (heading) {
  //   await heading.click();
  // }

  // await page.pause();

  // await expect(page.getByRole("heading", { name: "The Kitchen" })).toHaveClass(
  //   "chakra-heading css-dpmy2a"
  // );

  // await page.pause();

  //   await expect(page.getByRole("link", { name: "Alert" })).toHaveCount(1);
  //   const link = page.getByRole("link", { name: "Alert" });
  //   if (link) {
  //     await link.click();
  //   }
  //   await page.pause();

  //check the element is visible or hidden
  // await expect(page.getByRole("link", { name: "Alert" })).toBeVisible();
  // await expect.soft(page.getByRole("link", { name: "Alert" })).toBeHidden();

  //check the element is enabled or disbaled
  // await expect(page.getByRole("link", { name: "Alert" })).toBeEnabled();
  // await expect.soft(page.getByRole("link", { name: "Alert" })).toBeDisabled();

  //check the text is available
  // await expect
  //   .soft(page.getByRole("link", { name: "Alert" }))
  //   .toHaveText("Alert");
  // await expect(page.getByRole("link", { name: "Alert" })).not.toHaveText(
  //   "Alert"
  // );

  //check text  values

  // await expect(page.getByRole("link", { name: "Alert" })).not.toHaveText(
  //   "Alert"
  // );

  //chekc have attribute value
  // await expect(page.getByRole("link", { name: "Alert" })).toHaveAttribute(
  //   "class",
  //   "chakra-heading css-dpmy2a"
  // );

  // await page.pause();
  //check class
  // await expect(page.getByRole("link", { name: "Alert" })).toHaveClass(
  //   "chakra-heading"
  // );

  // await page.pause();
});
