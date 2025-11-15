import { test, expect } from "@playwright/test";

test("update user", async ({ request })=> {
    const updatedDate = {
        name: "Updated Name",
        email: "updated@example.com",
    };

    const response = await request.put(
        "https://jsonplaceholder.typicode.com/users/1",

        { data: updatedDate }
    );

    expect(response.status()).toBe(200);

    const user = await response.json();
    expect(user.name).toBe('Updated Name');
    console.log("Updated user:", JSON.stringify(user, null, 2));
});

test("Delete user", async ({ request })=> {
    const response = await request.delete(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    expect(response.status()).toBe(200);
})