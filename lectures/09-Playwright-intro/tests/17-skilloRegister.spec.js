import { test, expect } from "@playwright/test";

function generateUsername() {
  const random = Math.floor(Math.random() * 1000);
  return `user${random}`;
}
// Този метод генерира много дълъг имейл и регистрацията фейлва!!!IMPORTANT
// function generateEmail() {
//   const timestamp = Date.now();
//   return `user${timestamp}@mail.com`;
// }
function generateEmail() {
  const rand = Math.floor(Math.random() * 10000);  // 0–9999
  return `user${rand}@mail.com`;
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
  await expect(page.locator("#sign-in-button")).toBeEnabled();
  await page.locator("#sign-in-button").click();

//   await expect(page.locator("#nav-link-home")).toBeVisible();
//   await expect(page).toHaveURL("http://training.skillo-bg.com:4300/posts/all");
});

// TODO: Finish the registration test
