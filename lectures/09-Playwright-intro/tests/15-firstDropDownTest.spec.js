import { test, expect } from "@playwright/test";

test.setTimeout(60_000); // по избор, ако машината е по-бавна

async function selectFromDropdown(page, fieldLabel, optionText) {
  // 1) Намери конкретната група по label
  const group = page.locator(
    `div.oxd-input-group:has(label:has-text("${fieldLabel}"))`
  );

  const trigger = group.locator(".oxd-select-text");

  // 2) Увери се, че е на екрана и кликваем
  await trigger.scrollIntoViewIfNeeded();
  await expect(trigger).toBeVisible();
  await expect(trigger).toBeEnabled();

  // 3) Отвори dropdown-а
  await trigger.click();

  // 4) Изчакай менюто да се появи
  const dropdown = page.locator(".oxd-select-dropdown");
  await dropdown.first().waitFor({ state: "visible" });

  // 5) Избери опцията по текст (най-надеждно)
  const option = dropdown
    .locator(".oxd-select-option")
    .filter({ hasText: optionText });
  await expect(option).toBeVisible();
  await option.click();

  // 6) Потвърди, че избраната стойност е в полето
  const value = group.locator(".oxd-select-text-input");
  await expect(value).toHaveText(optionText);
}

test("Select 'Automaton Tester' from Job Title dropdown in Recruitment > Candidates", async ({
  page,
}) => {
  // Step 1: Login
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  // Изчакай стабилизация на мрежата
  await page.waitForLoadState("networkidle");

  // Step 2: Recruitment -> Candidates
  // Лявото меню: "Recruitment"
  await page.locator('span:has-text("Recruitment")').click();
  await page.waitForLoadState("networkidle");
  // Табът "Candidates" е активен по подразбиране, но ако не е:
  // await page.getByRole('tab', { name: 'Candidates' }).click();

  // Увери се, че сме на viewCandidates
  await expect(page).toHaveURL(/recruitment\/viewCandidates/);

  // Step 3: Избери от Job Title
  await selectFromDropdown(page, "Job Title", "Automaton Tester");
});
