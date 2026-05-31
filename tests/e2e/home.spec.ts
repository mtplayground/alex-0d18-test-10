import { expect, test } from "@playwright/test";

test("home page smoke test", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];

  page.on("console", (message) => {
    if (message.type() === "error") {
      consoleErrors.push(message.text());
    }
  });
  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  await page.goto("/");

  await expect(page).toHaveTitle("Agent Team for Founders | myClawTeam");
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    "myClawTeam helps founders turn conversations into shipped product work, from planning and implementation through deployment and operational follow-through.",
  );
  await expect(page.getByRole("heading", { level: 1, name: "You just talk, we handle the rest" })).toBeVisible();
  await expect(page.getByText("Agent Team for Founders").first()).toBeVisible();

  const primaryCta = page.getByRole("link", { name: "Start a conversation" }).first();
  await expect(primaryCta).toBeVisible();
  await primaryCta.click();
  await expect(page).toHaveURL(/#hero$/);

  expect(consoleErrors).toEqual([]);
  expect(pageErrors).toEqual([]);
});
