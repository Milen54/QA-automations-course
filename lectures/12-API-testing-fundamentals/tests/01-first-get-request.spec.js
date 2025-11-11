import { test, expect } from "@playwright/test";

test("Get a single user", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  console.log("Status code:", response.status());

  expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy(); // ok() returns true for 200 - 299

  // GET response body as JSON
  const user = await response.json();
  console.log("User data:", JSON.stringify(user, null, 2));

  // Check properties exist
  expect(user).toHaveProperty("id");
  expect(user).toHaveProperty("name");
  expect(user).toHaveProperty("email");

  // Check specific values
  expect(user.id).toBe(1);
  expect(user.name).toBe("Leanne Graham");
  expect(user.email).toBe("Sincere@april.biz");
  expect(user.address.street).toBe("Kulas Light");

  // Check data types
  expect(typeof user.id).toBe("number");
  expect(typeof user.name).toBe("string");
});

test("Get all users", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = await response.json();

  // Verify it's an array
  expect(Array.isArray(users)).toBeTruthy();
  expect(users.length).toBe(10);

  // Validate each user has requiered fields
  for (const user of users) {
    expect(user).toHaveProperty("id");
    expect(user).toHaveProperty("email");
  }

  //Find specific user (using .find from lecture 4)
  const leanne = users.find((u) => u.name === "Leanne Graham");
  expect(leanne).toBeDefined();

  // Filter users (using .filter from lecture 4)
  const bizUsers = users.filter((u) => u.email.endsWith("biz"));
  expect(bizUsers.length).toBeGreaterThan(0);
});
