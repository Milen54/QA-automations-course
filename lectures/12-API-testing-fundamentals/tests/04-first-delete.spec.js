import { test, expect } from "@playwright/test";

test("Delete user", async ({ request }) => {
    let response = await request.delete(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    // 200 OK or 204 No Content
    expect(response.status()).toBe(200);

    response = await request.get(
        "https://jsonplaceholder.typicode.com/users/1"
    )

    const deleteUser = await response.json();
    console.log("Created user:", JSON.stringify(deleteUser, null, 2));
    console.log("Status code:", response.status());
});