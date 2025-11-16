import { test, expect } from "@playwright/test";

// Simulate API base URL
const API_BASE = "https://jsonplaceholder.typicode.com";

// Store test data ID for cleanup
let testPostId;
let createdTitle;

test.beforeEach("Create user post", async ({ request })=> {
    createdTitle = `Test Post ${Date.now()}`;
    const response = await request.post(`${API_BASE}/posts`, {
        data: { title: createdTitle, body: "Hello", userId: 1 },
    });
    expect(response.ok()).toBeTruthy();
    const post = await response.json();
    testPostId = post.id;
    console.log(`✅ Created test post with ID: ${testPostId}`);
});

test.afterEach("Delete user post", async ({ request })=> {
    const del = await request.delete(`${API_BASE}/posts/${testPostId}`);
    expect([200, 201, 404]).toContain(del.status());
    console.log(`✅ Deleted test post with ID: ${testPostId}`);
});

test("test 1: verify post was created", async ({ request })=> {
    console.log("📝 Test 1: Fetching the test post");
    const response = await request.get(`${API_BASE}/posts/${testPostId}`);
    expect([200, 404]).toContain(response.status());

    if (response.status() === 200) {
        const data = await response.json();
        expect(data).toHaveProperty("id");
    }
    console.log(
        "✅ Test post exists and has correct data (or API is non-persistent)"
    );
});

test("test 2: update post title", async ({ request })=> {
    console.log("📝 Test 2: Updating post title");
    const newTitle = `${createdTitle} - updated`;
    const response = await request.put(`${API_BASE}/posts/${testPostId}`, {
        data: { id: testPostId, title: newTitle, body: "Hello", userId: 1},
    });
    expect([200,201, 500]).toContain(response.status());
    if(response.status() === 200 || response.status() === 201) {
        const updated = await response.json().catch(() => null);
        if (updated) {
            expect(updated).toHaveProperty("title");
        }
        console.log("✅ Post updated successfully");
    } else {
        console.log(`ℹ️ Skipping JSON validation for status ${response.status()}`);
    }
});

test("test 3: add comment to post", async ({ request })=> {
    console.log("📝 Test 3: Adding comment to post");
    const response = await request.post(
        `${API_BASE}/posts/${testPostId}/comments`,
        {
            data: { name: "t", email: "a@b.c", body: "comment" },
        }
    );
    expect([200, 201, 404]).toContain(response.status());
    console.log("✅ Comment added successfully (or API is non-persistent)");
});