function countPassedTests(results) {
    let passedCount = 0;
    for (let i = 0; i < results.length; i++) {
        if (results[i] === "PASS") {
            passedCount++;
        }
    }
    return passedCount;
}

let loginResult = ["PASS", "FAIL", "PASS"];
let logoutResult = ["PASS", "FAIL", "PASS"];
let registerResult = ["PASS", "FAIL", "PASS"];

console.log("Login passed:", countPassedTests(loginResult));
console.log("Logout passed:", countPassedTests(logoutResult));
console.log("Register passed:", countPassedTests(registerResult));
