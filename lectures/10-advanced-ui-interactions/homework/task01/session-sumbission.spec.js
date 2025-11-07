import { test, expect } from "@playwright/test";
import path from "node:path";
import { getLocalUrl } from "./getLocalUrl";

const formUrl = getLocalUrl("../pages/registration-form.html", import.meta.url);

test("Happy path - successful submission and confirmation", async ({
  page,
}) => {
  await page.goto(formUrl);

  await page.locator("#session-format").selectOption("lightning");
  await page.locator("#topic-testing").check();
  await page.locator("#level-intro").check();
  await page.locator("#code-of-conduct").check();

  const files = [
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file1.txt"),
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file2.txt"),
  ];
  const fileInputLocator = page.locator("#materials");
  await fileInputLocator.setInputFiles(files);

  await page.locator("#submit-proposal").click();

  await expect(page.locator("h1")).toHaveText("Thank you for your submission!");

  await expect(page.locator("#confirm-format")).toHaveText(
    "Lightning Talk (15 mins)"
  );
  await expect(page.locator("#confirm-topics")).toHaveText("Automated Testing");
  await expect(page.locator("#confirm-level")).toHaveText("Introductory");
  await expect(page.locator("#confirm-files")).toHaveText(
    "file1.txt, file2.txt"
  );
});

test("Negative - validation blocks submission when requiered data is missing", async ({
  page,
}) => {
  await page.goto(formUrl);

  await page.locator("#session-format").selectOption("lightning");
  await page.locator("#topic-testing").check();
  await page.locator("#level-intro").check();

  const files = [
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file1.txt"),
    path.resolve("lectures/10-advanced-ui-interactions/test-files/file2.txt"),
  ];
  const fileInputLocator = page.locator("#materials");
  await fileInputLocator.setInputFiles(files);

  await page.locator("#submit-proposal").click();

  page.on("dialog", async (dialog) => {
    expect(dialog.message()).toBe(
      "Please confirm acceptance of the code of conduct."
    );
    await dialog.accept();
  });
  await expect(page.locator("h1")).toHaveText(
    "Submit Your Playwright Summit Session"
  );
});
