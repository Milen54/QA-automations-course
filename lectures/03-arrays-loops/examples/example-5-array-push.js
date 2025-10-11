let testResults = ["PASS", "FAIL"];
console.log("Initial results:", testResults);

testResults.push("PASS");
console.log("After adding one result", testResults)

testResults.push("Skip");
testResults.push("Cancelled")

console.log("Adding more results", testResults);

let statusCode = 404;
let errors = [];

if (statusCode >= 400) {
    errors.push(`HTTTP Error: ${statusCode}`)
} 

if (errors.length > 0) {
    console.log("Errors found:", errors);
}