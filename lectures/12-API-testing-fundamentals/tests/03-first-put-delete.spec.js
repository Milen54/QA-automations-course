import {test, expect } from "@playwright/test";

test("Update user", async ({ request }) => {

    let response = await request.get(
        "https://jsonplaceholder.typicode.com/users/",
    );
    const user = await response.json();
    const userId = user.id;
    console.log("User id from GET:", userId);

    user.name = "John Doe";

     const expectUser = {
        "name": "John Doe",
        "username": "johndoe",
        "email": "john@doe.com",
    };

    response = await request.put(
        "https://jsonplaceholder.typicode.com/users/1",
        { 
            data: user
        }
    );

    expect(response.status()).toBe(200);

    const updatedUser = await response.json();
    console.log("Updated user:", JSON.stringify(expectUser, null, 2));

    expect(updatedUser.name).toBe(expectUser.name);
    expect(updatedUser.username).toBe(expectUser.username);
    expect(updatedUser.email).toBe(expectUser.email);
    expect(updatedUser.id).toBe(userId);

});