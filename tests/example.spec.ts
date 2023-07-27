import { test } from "./test";

test("has message", async ({ page }) => {
  await page.goto("/");
});
