function processAllTestUsers(testusers) {

    for (let i = 0; i < testusers.length; i++) {
        const userEmail = testusers[i];
        console.log(`Processing user ${[i + 1]}: ${userEmail}`);
    }

    console.log(`Total users processed: ${testusers.length}`);
    return testusers.length;
}
const testUsers = ["milen@example.com", "roburt@example.com", "mario@example.com"];
// processAllTestUsers(testUsers);

function validateAllEmails(emailArray) {

    let validEmails = [];
    let invalidEmails = [];

    for (let i = 0; i < emailArray.length; i++) {
        let isValid = emailArray[i].includes("@");
        if (isValid) {
            validEmails.push(emailArray[i]);
        }
        else if (!isValid) {
            invalidEmails.push(emailArray[i]);
        }
        console.log(`Email ${i + 1}: ${emailArray[i]} ${isValid ? "Valid" : "Invalid"}`);
    }

}
// validateAllEmails(testUsers);

function calculateResponseTimes(responseTimesArray) {
    let totalTime = 0;
    let slowestTime = 0;
    
    for (let i = 0; i < responseTimesArray.length; i++) {
        totalTime += responseTimesArray[i];
        if (slowestTime < responseTimesArray[i]) {
            slowestTime = responseTimesArray[i];
        }
        console.log(`Response ${i + 1} : ${responseTimesArray[i]} ms`);
    }

    let averageTime = totalTime / responseTimesArray.length;
    console.log(`Total time: ${totalTime}, Average time: ${averageTime}, Slowest time: ${slowestTime}`);

    return [totalTime, averageTime, slowestTime];
}
let responseTimes = [50, 100, 150, 300];
calculateResponseTimes(responseTimes);

function simulateTestExecution(testCases) {
    let executionResults = [];

    for (let i = 0; i < testCases.length; i++) {
        let testName = testCases[i];

        let status = (i % 3 === 0) ? "PASSED" : "FAILED";

        let result = `${testName}:${status}`;
        console.log(`Processing ${testName} -- ${status}`);
        executionResults.push(result);

    }

    let passedCount = 0; 
    let failedCount = 0;

    for (let i = 0; i < executionResults.length; i++) {
        let entry = executionResults[i];
        if (entry.includes(":PASS")) {
            passedCount++;
        } else if (entry.includes(":FAIL")) {
            failedCount++;
        }
    }
    console.log(`Passed tests: ${passedCount}`);
    console.log(`Failed tests: ${failedCount}`);
    return executionResults;
}
const execResults = simulateTestExecution([
    "login_test", "logout_test", "registration_test", "password_reset", "profile_update"
]);
console.log("Execution results:", execResults);

function retryFailedTest(testName) {
    let attempts = 0;
    let maxRetries = 3;
    let testPassed = false;

    while (attempts < maxRetries && !testPassed) {
        attempts++;

        const status = (attempts === maxRetries) ? "PASS" : "FAIL";
        if (attempts === 3) {
            testPassed = true;
        }
        console.log(`Retry attempt ${attempts} for ${testName}: ${status}`);
    }

    if (testPassed) {
        console.log(`Final result for ${testName}: PASSED in ${attempts} attempt(s)`);
    } else {
        console.log(`Final result for ${testName}: FAILED after ${attempts} attempt(s)`);
    }
    return [testPassed, attempts];
}
const result = retryFailedTest("registration_test");
const testPassed = result[0];
const attempts = result[1];
console.log(`Returned -> ${testPassed} attempts: ${attempts}`);

function monitorTestQueue(testQueue) {
    let processedCount = 0;
    let maxProcessingTime = 10;

    while (testQueue.length > 0 && processedCount < maxProcessingTime) {
        processedCount++;
        const removed = testQueue.pop();
        console.log(`Processed test ${processedCount} (${removed}), Queue remaining ${testQueue.length}`);
    }

    const stoppedBecause = 
    testQueue.length === 0 ? "queue is empty" : "time limit reached";

    console.log(`Final status: procesed= ${processedCount}, remaining= ${testQueue.length}, stop reason: (${stoppedBecause})`);

    return [processedCount, testQueue.length];
}
let queue = ["logout_test", "login_test", "register_test"];
monitorTestQueue(queue);

function waitForTestCompletion(expectedDuration) {
    let elapsedTime = 0;
    let testComplete = false;
    let logEvery = 100;

    while (!testComplete && elapsedTime < expectedDuration * 2) {
        elapsedTime++;

        if (elapsedTime >= expectedDuration) {
            testComplete = true;
        }

        if (elapsedTime % logEvery === 0) {
                console.log(`Waiting...Elapsed time ${elapsedTime}`);

        }
    }
    console.log(testComplete ? "test completed" : "timed out");
    return [testComplete, elapsedTime];
}
waitForTestCompletion(300);

function processTestResultsStream(testResults) {
    let passCount = 0;
    let failCount = 0;
    let currentIndex = 0;

    while (currentIndex < testResults.length) {
        const currentResult = testResults[currentIndex];

        if (currentResult === "PASS") {
            passCount++;
        } else if (currentResult === "FAIL") {
            failCount++;
        }
        console.log(`Processing result ${currentIndex}:${currentResult}`);
        currentIndex++;
    }
    const totalTests = passCount + failCount;
    const successRate = totalTests ? (passCount / totalTests) * 100 : 0;

    console.log(`Tests passed: ${passCount}`);
    console.log(`Failed tests: ${failCount}`);
    console.log(`Success rate: ${successRate.toFixed(2)}%`);

    return [passCount, failCount, successRate];
}
let results = ["PASS", "FAIL", "FAIL", "PASS"]
processTestResultsStream(results);

function compareLoopApproaches(dataArrray) {
    console.log("Comparing for loop vs while loop approaches");
    console.log("== Starting for loop ==");

    let forProcessedCount = 0;

    for (let i = 0; i < dataArrray.length; i++) {
        console.log(`Processed element: ${i} --> ${dataArrray[i]}`);
        forProcessedCount++;
    }
    console.log("== Starting while loop! ==");
    let index = 0;
    let whileProcessedCount = 0;

    while (index < dataArrray.length) {
        console.log(`Processed element: ${whileProcessedCount} --> ${dataArrray[index]}`);
        whileProcessedCount++;
        index++;
    }
    return [forProcessedCount, whileProcessedCount];
}
let dataArrray = ["login_test", "logout_test", "register_test", "deleteUser_test"];
compareLoopApproaches(dataArrray);