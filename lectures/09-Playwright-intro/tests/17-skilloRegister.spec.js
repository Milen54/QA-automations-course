import { test, expect } from "@playwright/test";

function generateUsername() {
  const random = Math.floor(Math.random() * 1000);
  return `user${random}`;
}

function generateEmail() {
  const timestamp = Date.now();
  return `user${timestamp}@mail.com`;
}

function generateDate() {
  return "2025-01-10";
}

test("Positive test - successful registration", async ({ page }) => {
  await page.goto("http://training.skillo-bg.com:4300/users/register");

  await expect(page.locator("h4")).toHaveText("Sign up");

  await page.locator("[name=username]").fill(generateUsername());
  await page.locator("[type=email]").fill(generateEmail());
  await page.locator("input[type=date]").fill(generateDate());
  await page.locator("#defaultRegisterFormPassword").fill("Admin321");
  await page.locator('[name="verify-password"]').fill("Admin321");
  await page.locator('[name="pulic-info"]').fill("nothing");
  await page.locator("#sign-in-button").click();

//   await expect(page.locator("#nav-link-home")).toBeVisible();
//   await expect(page).toHaveURL("http://training.skillo-bg.com:4300/posts/all");
});

// TODO: Finish the registration test
