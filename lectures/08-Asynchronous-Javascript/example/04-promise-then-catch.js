function executeTestCase(testName) {
    return new Promise (function(resolve, reject) {
        console.log("Executing:", testName);
        const duration = 5000;

        setTimeout(function() {
            const result = {
                testName: testName,
                status: "FAIL",
                duration: duration,
            }

            if (result.status === "PASS") {
                resolve(result);
            } else {
                reject(new Error(`Test ${testName} failed assertion`));
            }
        }, duration);
    })
}

console.log("Starting tests...");
executeTestCase("login_test").then(function (result) {
    console.log("Test completed!");
    console.log("Test name:", result.testName);
    console.log("Status:", result.status);
    console.log("Duration:", result.duration + "ms");
})
.catch(function (error) {
    console.log("Test failed:", error.message);
})
console.log("Test promise created (still running in the background)");