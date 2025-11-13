import { test, expect } from "@playwright/test";

test("Filter with query parameters", async ({ request }) => {
    // Get post for specific user
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/posts?userId=2"
    );
    expect(response.status()).toBe(200);
    const posts = await response.json();

    console.log(`Found ${posts.length} posts for user 2`);
    // Verify all posts belong to user 1
    posts.forEach(post => {
        expect(post.userId).toBe(2);
    });
});


test("Filter with query parameters with limit", async ({ request }) => {
    // Get post for specific user
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=5"
    );
    expect(response.status()).toBe(200);
    const posts = await response.json();

    console.log(`Found ${posts.length} posts for user 2`);
    // Verify all posts belong to user 1
    posts.forEach(post => {
        expect(post.userId).toBe(2);
    });
});