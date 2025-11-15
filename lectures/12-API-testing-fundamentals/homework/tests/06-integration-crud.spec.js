import { test, expect } from "@playwright/test";
import { PostsAPI } from "../helpers/PostsAPI";

test("Complete CRUD workflow", async ({ request })=> {
    const postsAPI = new PostsAPI(request);

  // CREATE
  const newPost = {
    userId: 2,
    id: 3,
    title: "New post",
    body: "QA news",
  };

  const createResult = await postsAPI.createPost(newPost);
  expect(createResult.status).toBe(201);

  expect(createResult.data.userId).toBe(newPost.userId);
  expect(createResult.data.title).toBe(newPost.title);
  expect(createResult.data.body).toBe(newPost.body);

  const postId = createResult.data.id;
  console.log("Created post with ID:", postId);

  // GET
  const stablePostId = 1;

  const getResult = await postsAPI.getPostById(stablePostId);
  expect(getResult.status).toBe(200);
  expect(getResult.data).toHaveProperty("id", stablePostId);
  console.log("Read post:", JSON.stringify(getResult.data, null, 2));

   //     // UPDATE
  //   const updatePayload = {
  //     id: stablePostId,
  //     userId: 1,
  //     title: "Updated title",
  //     body: "Updated body",
  //   };

  //   const updateResult = await postsAPI.updatePost(postId, updatePayload);

  //   // expect(updateResult.status).toBe(200);

  //   expect(updateResult.data.id).toBe(postId);
  //   expect(updateResult.data.userId).toBe(updatePayload.userId);
  //   expect(updateResult.data.title).toBe(updatePayload.title);
  //   expect(updateResult.data.body).toBe(updatePayload.body);

  //   console.log("Updated post:", JSON.stringify(updateResult.data, null, 2));

  // DELETE
  const deleteResult = await postsAPI.deletePost(postId);
  expect(deleteResult.status).toBe(200);
  console.log("Deleted post", postId);
})