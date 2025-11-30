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

test("search comments by post", async ({ request }) => {
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/comments?postId=1"
    );
    expect(response.status()).toBe(200);
    const comments = await response.json();
    
    console.log(`Post 1 has ${comments.length} comments`);
    expect(comments.length).toBeGreaterThan(0);

    // Verify all comment belong to post 1
    comments.forEach(comment => {
        expect(comment.postId).toBe(1);
    });

    //1 Verify comment structure - Проверява ВСИЧКИ коментари (по-строга проверка)
    comments.forEach(comment => {
        expect(comment).toHaveProperty("id");
        expect(comment).toHaveProperty("name");
        expect(comment).toHaveProperty("email");
        expect(comment).toHaveProperty("body");
    });

    //2 Verify comment structure - Проверява само ПЪРВИЯ коментар (по-бърза, но по-слаба проверка)
    expect(comments[0]).toHaveProperty("id");
    expect(comments[0]).toHaveProperty("name");
    expect(comments[0]).toHaveProperty("email");
    expect(comments[0]).toHaveProperty("body"); 
});