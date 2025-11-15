export class PostsAPI {
  constructor(request) {
    this.request = request;
    this.baseUrl = "https://jsonplaceholder.typicode.com";
  }

  // GET all posts
  async getAllPosts() {
    const response = await this.request.get(`${this.baseUrl}/posts`);
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  async getPostById(postId) {
    const response = await this.request.get(`${this.baseUrl}/posts/${postId}`);
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  async getPostBy(userId) {
    const response = await this.request.get(
      `${this.baseUrl}/posts?userId=${userId}`
    );
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  async createPost(postData) {
    const response = await this.request.post(`${this.baseUrl}/posts`, {
      data: postData,
    });

    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  async updatePost(postId, postData) {
    const response = await this.request.put(`${this.baseUrl}/posts/${postId}`, {
      data: postData,
    });
    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  async deletePost(postId) {
    const response = await this.request.delete(
      `${this.baseUrl}/posts/${postId}`
    );

    return {
      status: response.status(),
      data: await response.json(),
    };
  }

  async searchPostsByTitle(keyword) {
    const response = await this.request.get(`${this.baseUrl}/posts`);
    const posts = await response.json();

    const lowerKeyword = keyword.toLowerCase();

    const result = posts.filter((post) => {
      return post.title.toLowerCase().includes(lowerKeyword);
    });

    return result;
  }
}
