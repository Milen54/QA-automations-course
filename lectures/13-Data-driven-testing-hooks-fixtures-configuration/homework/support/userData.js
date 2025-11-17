export const validUsers = [
  { username: "admin", password: "admin123" },
  { username: "user", password: "user123" },
  { username: "manager", password: "manager123" },
];

export const invalidUsers = [
  {
    username: "wronguser",
    password: "wrongpass",
    description: "wrong credentials",
  },
  { username: "", password: "password123", description: "empty username" },
  { usernmae: "admin", password: "", description: "empty password" },
];
