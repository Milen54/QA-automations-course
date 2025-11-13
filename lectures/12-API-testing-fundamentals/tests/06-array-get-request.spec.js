import { test, expect } from "@playwright/test";

test("validate array of users", async ({ request }) => {
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    // Verify it's an array
    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBe(10);

    // Validate each user has requiered fields
    users.forEach(user => {
        expect(user).toHaveProperty('id');
        expect(user).toHaveProperty('email');
    });

    // Find specific user (using .find from Lecture 4)
    const leanne = users.find(u=> u.name === "Leanne Graham");
    expect(leanne).toBeDefined();

    // Filter users (using filter from Lecture 4)
    const bizUsers = users.filter(u=>
        u.email.endsWith('.biz')
    );
    expect(bizUsers.length).toBeGreaterThan(0);
})