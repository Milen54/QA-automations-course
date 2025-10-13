let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
let formatedResults = [];

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i] === "PASS") {
        formatedResults.push("===>Pass<===")
    } else {
        formatedResults.push("===>Other<===")
    }
}
console.log("Old way results", formatedResults);

let betterFormated = testResults.map(function(results) {
     if (results === "PASS") {
        return "===>Pass<===";
    } else {
        return "===>Other<===";
    }
});
console.log("New way result:", betterFormated);

let testCases = ["login", "logout", "register", "reset_password"];

// "test_" => "test_login"
let testNames = testCases.map(function(testCase) {
    return "test_" + testCase;
});

console.log("Original:", testCases);
console.log("Transformed: ", testNames);