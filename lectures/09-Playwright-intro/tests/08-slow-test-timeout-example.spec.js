import { test } from "@playwright/test";

test("Slow test", async() => {
    test.setTimeout(6000);
});