let timeoutSeconds = 30;
let maxRetries = 3;
let expectedItemCount = 5;
let userId = 12345;
let responseTime = 250.75; // milliseconds

console.log(
    timeoutSeconds,
    maxRetries,
    expectedItemCount,
    userId,
    responseTime
);

// Converting string to numbers (common in web testing)
let userIdFromInput = "67890";
let numericUserId = Number(userIdFromInput);
console.log("Converted ID:", numericUserId);
console.log("Type:", typeof numericUserId);

// Parsing numbers from mixed content
let responseTimeText = "334ms";
let timeValue = parseInt(responseTimeText); // Extract 334
console.log("Parsed time:", timeValue);