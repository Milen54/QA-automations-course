let testResult = {
    testName: "login_test",
    status: "PASS",
    duration: 250
}

let jsonString = `{"testNmae": "login_test", "status":"PASS", "duration":250}`;
console.log("JavaScript object", testResult);
console.log("JSON string", jsonString);
console.log("JSON object type:", typeof jsonString);
console.log("JSON string type:", typeof jsonString);