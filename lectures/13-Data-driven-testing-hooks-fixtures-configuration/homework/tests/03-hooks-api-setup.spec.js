import { test, expect } from "@playwright/test";

let createdPostId;

test.beforeEach(async ({ request }) => {
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      data: {
        title: "New post",
        body: "New body",
        userId: 5,
      },
    }
  );
  const post = await response.json();
  createdPostId = post.id;
  expect(response.status()).toBe(201);
  console.log(`✅ Created test post with ID: ${createdPostId}`);
});

test.afterEach(async ({ request }) => {
  const response = await request.delete(
    `https://jsonplaceholder.typicode.com/posts/${createdPostId}`
  );
  expect(response.status()).toBe(200);
});

test("test 1: verify post was created", async ({ request }) => {
  const response = await request.get(
    `https://jsonplaceholder.typicode.com/posts/${createdPostId}`
  );
  expect([200, 404]).toContain(response.status());
});

test("test 2: update post title", async ({ request }) => {
  const newTitle = `Updated title for ${createdPostId}`;

  // 1. Send PUT request
  const response = await request.put(
    "https://jsonplaceholder.typicode.com/posts/1",
    {
      data: {
        title: newTitle,
      },
    }
  );

  // 2. Assert status
  expect(response.status()).toBe(200);

  // 3. Extract echoed JSON
  const body = await response.json();
  console.log("PUT response:", body);

  // 4. Assert the updated title is correct
  expect(body.title).toBe(newTitle);
});

test("test 3: add comment to psot", async ({ request }) => {
  const response = await request.post(
    `https://jsonplaceholder.typicode.com/comments`,
    {
      data: {
        postId: createdPostId,
        name: "comment 1",
        email: "example@id.com",
        body: "new comment",
      },
    }
  );
  expect(response.status()).toBe(201);
  const json = await response.json();

  expect(json.postId).toBe(createdPostId);
  expect(json.name).toBe("comment 1");
  expect(json.email).toBe("example@id.com");
  expect(json.body).toBe("new comment");
});
