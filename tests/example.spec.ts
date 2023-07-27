import { rest } from "msw";
import { test } from "./test";

test("has message", async ({ page, worker }) => {
  await worker.use(
    rest.get("/api", (req, res, ctx) => {
      return res(ctx.json({ message: "From Test Interception" }));
    })
  );
  await page.goto("/");
});
