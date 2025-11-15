import {test, expect } from "@playwright/test";

test("Handle API errors gracefully", async ({ request })=> {
    try {
        const response = await request.get(
            "https://jsonplaceholder.typicode.com/users/99999");

         console.log("Status:", response.status());

    // With JSONPlaceholder, this returns 404
    expect(response.status()).toBe(404);

    // Try to parse JSON - might be empty
    const data = await response.json();
    console.log("Response data:", data);
    } catch (error) {
        console.log("Error occurred:", error.message);
    }
});

test("Handle network errors", async ({ request })=> {
    try {
        const response = await request.get(
            "https://this-domain-does-not-exist-12345.com"
        );

        console.log("Status:", response.status());
    } catch (error) {
        console.log("Network error caught:", error.message);
        expect(error.message).toBeTruthy();
    }
});