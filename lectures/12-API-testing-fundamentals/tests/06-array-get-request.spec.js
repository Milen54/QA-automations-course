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
});

test("verify all users have unique ids", async ({ request }) => {
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    // Extract all IDs using .map()
    const userIds = users.map((user) => user.id);

    // Create Set to remove duplicates
    const uniqueIds = new Set(userIds);

    // If all IDs are unique, Set size should equeal array length
    expect(uniqueIds.size).toBe(userIds.length);

    console.log(`All ${users.length} users have unique IDs`);
    console.log(`Unique IDs:`, Array.from(uniqueIds));
});

test("verify all users have valid email addresses", async ({ request }) => {
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    // Check if every user has @ in email using .every()
    const allValid = users.every((user)=> {
        return user.email.includes('@') && user.email.includes('.');
    });

    expect(allValid).toBeTruthy();
    console.log("All users have valid email format");

    // Extract unique domains
    const domains = users.map(user => {
        const domain = user.email.split('@')[1];
        return domain;
    });
    
    console.log("Email domains:", [...new Set(domains)]);
});

test("find and verify specific user by email", async ({ request }) => {
    const response = await request.get(
        "https://jsonplaceholder.typicode.com/users"
    );
    const users = await response.json();

    // Find user by email using .find()
    const targetEmail = "Sincere@april.biz";
    const user = users.find((u) => u.email === targetEmail);

    expect(user).toBeDefined();
    expect(user.name).toBe("Leanne Graham");
    expect(user.id).toBe(1);

    console.log(`✓ Found user: ${user.name} (${user.email})`);
});