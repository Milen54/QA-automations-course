let testCases = [
    { name: "login_test", status: "PASS", duration: 250, priority: "high"},
    { name: "logout_test", status: "FAIL", duration: 300, priority: "normal"},
];

let failedTests = testCases.filter((test) => test.status === "FAIL");
console.log("Failed tests:", failedTests);

let testName = testCases.map((test) => test.name);
console.log("All test names:", testName);

let totalDuration = testCases.reduce((sum, test) => sum + test.duration, 0);
console.log("Total execution time:", totalDuration + "ms");