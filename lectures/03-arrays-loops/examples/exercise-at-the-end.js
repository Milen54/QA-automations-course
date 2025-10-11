// Test data for our validation system
const TEST_CONFIG = {
  maxResponseTime: 1000, // milliseconds
  requiredStatusCode: 200,
  maxRetries: 3,
  environment: "staging"
};

// Test result data
let apiResponse = {
  statusCode: 200,
  responseTime: 750,
  message: "User login successful",
  hasData: true,
  retryCount: 1
};

// Your task: Complete these functions

// 1. Validate API response time
  // TODO: Return true if actualTime is less than or equal to maxTime
  // Use comparison operator and return boolean

function validateResponseTime(actualTime, maxTime){
    return actualTime <= maxTime;
}
console.log(validateResponseTime(300, 1000));

// 2. Check if response message contains success indicators
  // TODO: Check if message contains "success" (case-insensitive)
  // Use string methods: toLowerCase() and includes()
  // Return true if success is mentioned

function validateSuccessMessage1(message) {
    return message.toLowerCase().includes("success");
}
console.log(validateSuccessMessage1("User created successfully"));