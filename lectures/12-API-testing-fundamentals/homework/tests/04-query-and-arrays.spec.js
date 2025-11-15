import { test, expect } from "@playwright/test";

test("filter posts by userId", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?userId=1"
  );
  expect(response.status()).toBe(200);
  const posts = await response.json();

  posts.forEach((post) => {
    expect(post.userId).toBe(1);
  });
});

test("limit results", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = await response.json();
  expect(posts.length).toBe(5);
});

test("find a specific post in the collection", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const posts = await response.json();

  const post = posts.find((p) => p.id === 1);

  expect(post).toBeTruthy();

  expect(post).toHaveProperty("userId");
  expect(post).toHaveProperty("id");
  expect(post).toHaveProperty("title");
  expect(post).toHaveProperty("body");
});

test("extract and check titles with map", async ({ request }) => {
  const response = await request.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const posts = await response.json();

  const titles = posts.map((p) => p.title);

  expect(titles.length).toBe(100);

  const containKeyword = titles.some((title) => title.includes("sunt"));
  expect(containKeyword).toBe(true);
});
