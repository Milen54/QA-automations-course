import { test, expect } from "@playwright/test";
const tablePageUrl = new URL("../pages/table-page.html", import.meta.url).href;

test("Count table rows", async ({ page }) => {
  await page.goto(tablePageUrl);

  const rows = page.locator("#users-table tbody tr");
  const rowCount = await rows.count();

  console.log("Total rows:", rowCount);
  expect(rowCount).toBe(5);
});

test("get data from specific cell", async ({ page }) => {
  await page.goto(tablePageUrl);

  const firstRowName = page
    .locator("#users-table tbody tr:first-child td:nth-child(2)")
    .textContent();

  console.log("First user name:", firstRowName);
  expect(firstRowName).toBe("John Doe");

  const firstRowEmail = page
    .locator("#users-table tbody tr:first-child td:nth-child(3)")
    .textContent();

  console.log("First user email:", firstRowEmail);
  expect(firstRowEmail).toBe("john@example.com");

  const firstRowRole = page
    .locator("#users-table tbody tr:first-child td:nth-child(4)")
    .textContent();

  console.log("First user role is:", firstRowRole);
  expect(firstRowRole).toBe("Admin");

  const firstRowStatus = page
    .locator("#users-table tbody tr:first-child td:nth-child(5)")
    .textContent();

  console.log("First user status:", firstRowStatus);
  expect(firstRowStatus).toBe("Active");
});

test("find specific row by content", async ({ page }) => {
  await page.goto(tablePageUrl);

  const janeRow = page.locator("#users-table tbody tr", {
    hasText: "Jane Smith",
  });
  await expect(janeRow).toBeVisible();

  const email = await janeRow.locator("td:nth-child(3)").textContent();
  console.log("Jane's email:", email);
  expect(email).toBe("jane@example.com");

  const role = await janeRow.locator("td:nth-child(4)").textContent();
  console.log("Jane's Role:", role);
  expect(role).toBe("User");

  const status = await janeRow.locator("td:nth-child(5)").textContent();
  console.log("Jane's status:", status);
  expect(status).toBe("Active");
});

test("click button in specific row", async ({ page }) => {
  await page.goto(tablePageUrl);

  // Use Alice Brown (matches page data)
  const aliceRow = page.locator("#users-table tbody tr", {
    hasText: "Alice Brown",
  });
  await expect(aliceRow).toBeVisible();

  page.once("dialog", async (dialog) => {
    expect(dialog.message()).toContain("Editing user: Alice Brown");
    await dialog.accept();
  });

  await aliceRow.locator(".edit-btn").click();
  console.log("Clicked Edit button in Alice's row");
});
