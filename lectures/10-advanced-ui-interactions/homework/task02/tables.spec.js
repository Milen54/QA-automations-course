import { test, expect } from "@playwright/test";
import { getLocalUrl } from "../task01/getLocalUrl";

const tablePageUrl = getLocalUrl("../pages/table-page.html", import.meta.url);

test("Count and headers", async ({ page }) => {
  await page.goto(tablePageUrl);

  const rows = page.locator("#submissions-table tbody tr");
  const countRow = await rows.count();
  expect(countRow).toBe(5);

  const headerLocator = page.locator("#submissions-table thead th");
  const headerCount = await headerLocator.count();
  const headerTexts = [];

  for (let i = 0; i < headerCount; i++) {
    const text = await headerLocator.nth(i).textContent();
    headerTexts.push(text.trim());
  }
  console.log("Header texts:", headerTexts);

  expect(headerTexts).toEqual([
    "Speaker",
    "Session Format",
    "Topics",
    "Audience Level",
    "Files",
    "Status",
    "Actions",
  ]);

  const total = await page.locator("#total-count").textContent();
  expect(total.trim()).toBe("5");
});

test("Approve Session - alert dialog + status update", async ({ page }) => {
  await page.goto(tablePageUrl);

  const johnRow = page.locator("#submissions-table tbody tr", {
    hasText: "John Doe",
  });

  page.once("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    expect(dialog.message()).toContain("Approved submission for John Doe.");

    await dialog.accept();
  });

  await johnRow.locator(".btn-approve").click();

  const statusCell = johnRow.locator('td[data-label="Status"] span');

  expect(statusCell).toHaveText("Approved");

  const total = await page.locator("#total-count").textContent();
  expect(total).toBe("5");
});

test("Decline Session - confirm dialog + row removal", async ({ page }) => {
  await page.goto(tablePageUrl);

  const janeRow = page.locator("#submissions-table tbody tr", {
    hasText: "Jane Smith",
  });

  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("confirm");
    expect(dialog.message()).toContain(
      "Are you sure you want to decline the submission for Jane Smith?"
    );

    await dialog.accept();
  });
  await janeRow.locator(".btn-decline").click();

  await expect(janeRow).not.toBeVisible();
  const total = await page.locator("#total-count").textContent();

  expect(total).toBe("4");
});
