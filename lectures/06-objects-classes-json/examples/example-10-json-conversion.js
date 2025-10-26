let apiResponse = {
    statusCode: 200, 
    message: "User created successfully",
    data: {
        userId: 12345,
        userName: "testUser",
        email: "testuser@example.com",
    },
    timestamp: Date.now(),
}

console.log("Original object", apiResponse);

// Convert object to JSON string
let jsonString = JSON.stringify(apiResponse, null, 2);
console.log("JSON string:", jsonString);
console.log("Type:", typeof jsonString);

// Convert JSON string to object
let parsedObject = JSON.parse(jsonString);
console.log("Parsed back to object:", parsedObject);
console.log("Type:", typeof parsedObject);