let retryCount = 0;
let maxRetries = 3;
let testPassed = false;

while (retryCount < maxRetries && !testPassed) {
    retryCount ++;
    console.log(`Attempt ${retryCount}: Running flaky test...`);

    testPassed = retryCount === 2

    if (testPassed ) {
        console.log("Test passed!");
    } else {
        console.log("Test failed, will retry...");
    }
}

if (!testPassed) {
    console.log("Test failed after all retries");
}