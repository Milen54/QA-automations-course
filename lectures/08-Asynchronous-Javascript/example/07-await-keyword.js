function executeTestCase (testName) {
    return new Promise (function(resolve, reject) {
        const duration = 7000;
        console.log(`Executing: ${testName}`);
        setTimeout(() => {
            const result = {
                testName: testName,
                status: "PASSED",
                duration: duration,
            }
            console.log("Test completed");
            resolve(result);
        }, duration)
    })
}

async function runTest() {
    console.log("Starting test execution");
    const result = await executeTestCase("login_test");
    console.log("Result recieved inside async function:", result);
    return result;
}

runTest().then(function (finalResult) {
    console.log("Final result frorm runTest()", finalResult);
});

// await navigatePage();
// await populateEmail();
// clickContinueButto();