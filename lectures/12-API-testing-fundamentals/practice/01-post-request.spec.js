import { test, expect } from "@playwright/test";

test("create a new user", async ({ request }) => {
  // Step 1: Prepare data to send
  const newUser = {
    name: "Milen",
    username: "Milen541",
    email: "milen@example.com",
  };

  // Step 2: Send POST request with data
  const response = await request.post(
    "https://jsonplaceholder.typicode.com/users",

    { data: newUser }
  );

  // Step 3: Verify 201 Created status
  expect(response.status()).toBe(201);

  // Step 4: Verify response includes our data
  const createdUser = await response.json();
  console.log("Created user:", JSON.stringify(createdUser, null, 2));

  expect(createdUser.name).toBe(newUser.name);
  expect(createdUser.username).toBe(newUser.username);
  expect(createdUser.email).toBe(newUser.email);
  
  expect(createdUser).toHaveProperty('id');
});

test("Create a new post", async ({ request })=> {

    const newPost = {
        userId: 1,
        id: 3,
        title: "New post",
        body: "Awesome post",
    };

    const response = await request.post(
        "https://jsonplaceholder.typicode.com/posts",

        { data: newPost }
    )

    // Verify 201 Created status
    expect(response.status()).toBe(201);

    // Step 4: Verify response includes our data
    const createdPost = await response.json();
    console.log("Created post:", JSON.stringify(createdPost, null, 2));

    expect(createdPost.userId).toBe(newPost.userId);
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);

    expect(createdPost).toHaveProperty('id');
});

test("Create new comment", async ({ request }) => {
    const newComment = {
        postId: 2,
        name: "comment for devs",
        email: "milen@example.com",
        body: "additional information",
    }

    const response = await request.post(
        "https://jsonplaceholder.typicode.com/comments",
        { data: newComment }
    )

    // Verify 201 Created status
    expect(response.status()).toBe(201);

    // Verify response includes our data
    const createdComment = await response.json();
    console.log("Created cooment:", JSON.stringify(createdComment, null, 2));

    expect(createdComment.postId).toBe(newComment.postId);
    expect(createdComment.name).toBe(newComment.name);
    expect(createdComment.email).toBe(newComment.email);
    expect(createdComment.body).toBe(newComment.body);

    expect(createdComment).toHaveProperty('id');

    console.log("Comment created with ID:", createdComment.id);
})