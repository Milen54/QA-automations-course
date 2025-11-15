import { test, expect } from "@playwright/test";

let testUserId;

test.beforeEach(async ({ request }) => {
    const response = await request.post(
        "https://jsonplaceholder.typicode.com/users",{
            data: { name: "Test User", email: "example@domain.com"}
        });
    
        const user = await response.json();
        testUserId = user.id;
        console.log(`Created user with ID: ${testUserId}`);
});

// Runs after each test - deletes test user
test.afterEach(async ({ request })=> {
    await request.delete(`https://jsonplaceholder.typicode.com/users/${testUserId}`);
    console.log(`Deleted user with ID: ${testUserId}`);
});

// Test 1 - user already created!
// test("verify user profile", async ({ request }) => {
// const response = await request.get(`https://jsonplaceholder.typicode.com/users/${testUserId}`);
//   //expect(response.status()).toBe(200);

//   const user = await response.json();
//   console.log("Get user:", JSON.stringify(user, null, 2));

//   expect(user).toHaveProperty("id");
//   expect(user).toHaveProperty("name");
//   expect(user).toHaveProperty("email");
// });