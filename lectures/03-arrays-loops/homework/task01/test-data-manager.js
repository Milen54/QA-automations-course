export function initializeTestData() {
    let testUsers = [];
    let testEnvironments = ["development", "staging", "production"];
    let browserTypes = ["Chrome", "Firefox", "Safari", "Edge"];

    console.log(`Array test users length: ${testUsers.length}`);
    console.log(`Array test environments length: ${testEnvironments.length}`);
    console.log(`Array browserTypes length: ${browserTypes.length}`);
    
    return [testUsers, testEnvironments, browserTypes];
}

function displayTestDataInfo(testUsers, testEnvironments, browserTypes) {

    let firstElementTestUSers = testUsers[0];
    let firstElementTestEnvironments = testEnvironments[0];
    let firstElementBrowserTypes = browserTypes[0];

    let lastElementTestUsers = testUsers[testUsers.length-1];
    let lastElementTestEnvironments = testEnvironments[testEnvironments.length-1];
    let lastElementBrowserTypes = browserTypes[browserTypes.length-1];

    console.log(`First user: ${firstElementTestUSers} and last is: ${lastElementTestUsers}`);
    console.log(`First environment: ${firstElementTestEnvironments} and last is: ${lastElementTestEnvironments}`);
    console.log(`First browser: ${firstElementBrowserTypes} and last is: ${lastElementBrowserTypes}`);

      return testUsers.length + testEnvironments.length + browserTypes.length;

}

// let mixedArray = initializeTestData();

// let testUsers = mixedArray[0];
// let testEnvironments = mixedArray[1];
// let browserTypes = mixedArray[2];

// let total = displayTestDataInfo(testUsers, testEnvironments, browserTypes);
// console.log(`Total data elements across all arays: ${total}`);

export function addTestUsers(userArray, newUserEmail) {
    console.log(`User array length before adding: ${userArray.length}`);

    userArray.push(newUserEmail);

    console.log(`User array length after adding: ${userArray.length}`);
    console.log(`Updated array: ${userArray}`);

    return userArray.length;
}
// addTestUsers(testUsers, "milen@example.com");
// addTestUsers(testUsers, "dimitar@example.com");
// addTestUsers(testUsers, "maria@example.com");

export function buildTestQueue() {
    let testQueue = [];

    testQueue.push("login_test");
    console.log(`Added ${testQueue[0]}, Queue length: ${testQueue.length}`);

    testQueue.push("logout_test");
    console.log(`Added ${testQueue[1]}, Queue length: ${testQueue.length}`);

    testQueue.push("registration_test");
    console.log(`Added ${testQueue[2]}, Queue length: ${testQueue.length}`);

    console.log(`Final test queue: ${testQueue}`);

    return testQueue;
}
// buildTestQueue();

export function processTestQueue(testQueue) {
    let processed = 0;

    while (testQueue.length > 0) {
        const testName = testQueue.pop();

        console.log(`Processing: ${testName}, Remaining: ${testQueue.length}`);
        processed++;
    }
    console.log(`All tests processed, queue is empty: ${testQueue.length}`);
    return processed;
}
const queue = buildTestQueue();
const totalProcessed = processTestQueue(queue);
console.log(`Total tests processed: ${totalProcessed}`);

export function manageTestResults() {
    let passedTests = [];
    let failedTests = [];
    let skippedTests = [];

    passedTests.push("login_functionality", "user_registration");
    failedTests.push("payment_processing");
    skippedTests.push("email_notifications");

    console.log(`Number of passed tests: ${passedTests.length}`);
    console.log(`Number of failed tests: ${failedTests.length}`);
    console.log(`Number of skipped tests: ${skippedTests.length}`);

    return [passedTests, failedTests, skippedTests];

}
// manageTestResults();

export function rotateTestEnvironments(environmentsArray) {
    const first = environmentsArray[0];
    const last = environmentsArray.pop();

    environmentsArray.push(first);
    environmentsArray[0] = last;

    console.log("After rotation:", environmentsArray);
    return environmentsArray;

}
// rotateTestEnvironments(["dev", "Qa", "prod"]);

export function validateTestDataIntegrity(testUsers, testEnvironments, browserTypes) {
    let validationIssues = [];

    if (testUsers.length === 0) {
        validationIssues.push("No test users defined");
        console.log("Users check: No test users defined");
    } else {
        console.log(`Users check: ${testUsers.length} users`);
    }

    if (testEnvironments.length < 2) {
        validationIssues.push("Insufficient environments");
        console.log("Environments check: Insufficient environments");
    } else {
        console.log(`Environments check: ${testEnvironments.length} environments`);
    }

    if (browserTypes.length < 3) {
        validationIssues.push("Not enough browsers for testing");
        console.log(`Browsers check: ${browserTypes.length} browsers`);
    }

    if (validationIssues === 0) {
        console.log("Validation passed: no issues.");
    } else {
        console.log(`Validation found ${validationIssues.length} issue(s): ${validationIssues.join("; ")}`);
    }

    return validationIssues;
}
let mixedArray = initializeTestData();
let testUsers = mixedArray[0];
let testEnvironments = mixedArray[1];
let browserTypes = mixedArray[2];

const issues = validateTestDataIntegrity(testUsers, testEnvironments, browserTypes);
console.log("Issues array:", issues);

export function generateTestReport(passedTests, failedTests, skippedTests) {
    
    const passedCount = passedTests.length; //2
    const failedCount = failedTests.length; //1
    const skippedCount = skippedTests.length; //1
    const totalTests = passedCount + failedCount + skippedCount; //4

    const firstFailed = failedCount > 0 ? failedTests[0] : null;

    console.log(`Total tests: ${totalTests}`);
    console.log(`Passed:  ${passedCount}, Failed: ${failedCount}, Skipped: ${skippedCount}`);

    if (firstFailed) {
        console.log(`First failed tests: ${firstFailed}`);
    } else {
        console.log("No failed tests");
    }

    return [totalProcessed, passedCount, failedCount, skippedCount];
}
const results = manageTestResults();
const passed = results[0]; //2
const failed = results[1]; //1
const skipped = results[2]; //1

const report = generateTestReport(passed, failed, skipped);
console.log("Report array:", report);