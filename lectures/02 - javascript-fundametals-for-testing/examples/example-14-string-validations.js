function validateSuccessMessage(actualMessage) {
    // Check if message contains all required keywords
    let isNotEmpty = actualMessage.trim().length > 0;
    let hasSuccess = actualMessage.toLowerCase().includes("success");
    let hasUser = actualMessage.toLowerCase().includes("user");

    return isNotEmpty && hasSuccess && hasUser;
}

// Test the validation function
let successMsg = "User registration successfully";
let isValid = validateSuccessMessage(successMsg);
console.log("Message is valid:", isValid);

// Extract data from response messages
function extractUserId(responseMessage) {
    let idPosition = responseMessage.indexOf("ID: ");
    if (idPosition !== -1) {
        let idString = responseMessage.slice(idPosition + 4);
        return parseInt(idString);
    }
    return null;
}

const apiResponse = "User created successfully with ID: 12345";
let userId = extractUserId(apiResponse);
console.log("Extracted user ID:", userId);

function processApiResponse(responseMessage) {
    const isValid = validateSuccessMessage(responseMessage);

    if (isValid) {
    if (userId != null && !Number.isNaN(userId)) {
        console.log(`Response is valid. Extracted user ID: ${userId}`);
        return { isValid: true, userId};
    } else {
        console.log("Response is valid, but no ID was found.");
        return { isValid: false, userId: null};
    }
} else {
    console.error("Invalid response message.");
    return { isValid: false, userId: null};
    }
}

const ok = "User created successfully with ID: 12345";
const bad = "User creation failed";

processApiResponse(ok);
processApiResponse(bad);