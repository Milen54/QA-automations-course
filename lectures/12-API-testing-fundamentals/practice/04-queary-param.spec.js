import { test, expect } from "@playwright/test";

test("Filter with querry parameters", async ({ request })=> {
    // GET posts for specific user
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/posts?userId=1"
    );

    const posts = await response.json();

    // Verify all posts belong to user 1
    posts.forEach(post => {
        expect(post.userId).toBe(1);
        console.log("Post id:", post.id);
    });
});

test("Combine multiple parameters", async ({ request })=> {
    // GET first 5 posts from user 2
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/posts?userId=2&_limit=5"
    );
    const posts = await response.json();

    expect(posts.length).toBe(5);
    posts.forEach(post => {
        expect(post.userId).toBe(2);
        console.log("Post id:", post.id);
    });
});