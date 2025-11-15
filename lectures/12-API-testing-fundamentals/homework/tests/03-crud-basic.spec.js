import { test, expect } from "@playwright/test";

test("Create post with POST", async ({ request }) => {
  const payload = {
    title: "New post",
    body: "test post",
    userId: 5,
  };

  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    { data: payload }
  );
  // Check status
  expect(response.status()).toBe(201);

  // Parse response body
  const responseBody = await response.json();

  // Chech that response includes our values
  expect(responseBody.title).toBe(payload.title);
  expect(responseBody.body).toBe(payload.body);
  expect(responseBody.userId).toBe(payload.userId);

  // Check that API assigned an id
  expect(responseBody).toHaveProperty("id");
});

test("Update post with PUT", async ({ request }) => {
  const updatePost = {
    id: 1,
    title: "Updated title",
    body: "Update body",
  };
  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    { data: updatePost }
  );
  expect(response.status()).toBe(200);

  const expectPost = await response.json();
  console.log("Updated post:", JSON.stringify(expectPost, null, 2));

  expect(expectPost.title).toBe(updatePost.title);
  expect(expectPost.body).toBe(updatePost.body);
  expect(expectPost.id).toBe(updatePost.id);
});

test("delete post with DELETE", async ({ request }) => {
  const response = await request.delete(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  expect(response.status()).toBe(200);
});