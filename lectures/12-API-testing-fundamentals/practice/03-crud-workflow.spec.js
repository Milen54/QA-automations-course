import { test, expect } from "@playwright/test";

test("Full CRUD lifecycle", async ({ request }) => {
    const baseUrl = "https://jsonplaceholder.typicode.com/posts";

    // CREATE
    const createRes = await request.post(baseUrl, {
        data: { title: 'Test Post', body: "Content", userId: 1 }
    });

    expect(createRes.status()).toBe(201);
    const post = await createRes.json();
    const postId = post.id;

    // READ / cannot read, because of random ID when create post
    const readRes = await request.get(`${baseUrl}/${postId}`);
    expect(readRes.status()).toBe(200);

    // UPDATE
    const updateRes = await request.put(`${baseUrl}/${postId}`, {
        data: { title: "Update Title "}
    });
    expect(updateRes.status()).toBe(200);

    // DELETE
    const deleteRes = await request.delete(`${baseUrl}/${postId}`);
    expect(deleteRes.status()).toBe(200);
});

// В JSONPlaceholder POST не създава реален ресурс.
