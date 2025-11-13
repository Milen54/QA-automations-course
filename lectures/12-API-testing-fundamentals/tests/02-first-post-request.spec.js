import { test, expect } from "@playwright/test";

test("Create new user", async ({ request }) => {
    const user = 
    {
    "name": "John Doe",
    "username": "johndoe",
    "email": "johndoe@example.com",
    };


    const response = await request.post(
        "https://jsonplaceholder.typicode.com/users",
        {
            data: user,
        }
    );

    console.log("Status:", response.status());
    expect(response.status()).toBe(201);

    // Convert to JSON
    const createdUser = await response.json();
    console.log("Created user:", JSON.stringify(createdUser, null, 2));

    expect(createdUser.name).toBe(user.name);
    expect(createdUser.username).toBe(user.name);
    expect(createdUser.email).toBe(user.email);
})