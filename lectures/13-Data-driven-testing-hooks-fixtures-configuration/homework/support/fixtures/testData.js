import { test as base } from "@playwright/test";

export const test = base.extend({
  // Provides a consistent, valid test user
  // eslint-disable-next-line no-empty-pattern
  testUser: async ({}, use) => {
    console.log("Setting up test user...");
    const user = {
      username: "testuser",
      password: "password123",
      email: "testuser@example.com",
      age: 24,
    };
    await use(user);

    console.log("Tearing down test user...");
  },
});
export { expect } from "@playwright/test";
