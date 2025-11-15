import { test, expect } from "@playwright/test";

test("Understanding JSON serialization", async ({ request }) =>{
    const userData = {
        name: "Milen Denkov",
        age: 25,
        active: true,
    };

    // This is what your object looks like as JSON
    const jsonString = JSON.stringify(userData);
    console.log("JSON string:", jsonString);
    // Output: {"name":"Jane Smith","age":30,"active":true}

    // Playwright does this automatically when you pass data:
    const response = await request.post(
        "https://jsonplaceholder.typicode.com/users",
        {
            data: userData,
        }
    );

    // The response comes back as JSON, and .json() parses it
    const result = await response.json();

    expect(result.name).toBe("Milen Denkov");
});
