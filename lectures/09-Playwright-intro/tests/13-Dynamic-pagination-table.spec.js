import { test, expect } from "@playwright/test";

test("Pagination + page size + search + sort", async ({
  page,
}) => {
  await page.goto(
    "https://practice.expandtesting.com/dynamic-pagination-table"
  );

  // 1) Page size: 5 rows
  await page.getByRole("combobox").selectOption("5");
  await expect(page.locator("table tbody tr")).toHaveCount(5);

  // 2) Pagination: next page
  await page.getByRole("link", { name: "Next" }).click();
  await expect(page.getByRole("link", { name: "2" })).toHaveAttribute(
    "aria-current",
    "page"
  );

  // 3) Previous is active on page 22
  await expect(page.getByRole("link", { name: "Previous" })).not.toHaveClass(
    /disabled/
  );

  // 4) Search: filter one row (example: Alice)
  await page.getByRole("searchbox").fill("Alice");
  await expect(page.locator("table tbody tr")).toHaveCount(1);
  await expect(page.locator("table tbody tr td").first()).toContainText(
    /Alice/i
  );

  // Clear search
  await page.getByRole("searchbox").fill("");
  await expect(page.locator("table tbody tr")).toHaveCount(5);

  // 5) Sort by Student Name: ASC - DESC
  const header = page
    .locator("table thead th")
    .filter({ hasText: "Student Name" });
  await expect(header).toBeVisible();
  await header.click(); // ASC
  await header.click(); // DESC
  const firstAsc = await page.locator("table tbody tr td").first().innerText();

  await header.click();
  const firstDesc = await page.locator("table tbody tr td").first().innerText();

  expect(firstAsc).not.toBe(firstDesc);
});
