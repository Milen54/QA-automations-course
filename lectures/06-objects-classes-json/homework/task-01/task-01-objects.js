let testConfig = {
    suiteName: "Register test",
    environment: "staging",
    maxTimeoutMs: 5,
}
testConfig.retryCount = 4;

let testUser1 = {
    username: "Milen",
    email: "milen@example.com",
    password: "strongpassword",
    role: "IT Recruiter",
    isActive: true,
};

let testUser2 = {
    username: "Roburt",
    email: "roburt@example.com",
    password: "weakpass",
    role: "Fullstack Engineer",
    isActive: true,
};

let testUser3 = {
    username: "Mario",
    email: "mario@example.com",
    password: "MediumPassword",
    role: "Survey Developer",
    isActive: true,
};
console.log("User 1");
console.log("User name:", testUser1["username"]);
console.log("Current position:", testUser1["role"]);

console.log("User 2");
console.log("User name:", testUser2["username"]);
console.log("Current position:", testUser2["role"]);

console.log("User 3");
console.log("User name:", testUser3["username"]);
console.log("Current position:", testUser3["role"]);

let testCases = [
    { name: "register_test", status: "FAIL", duration: 1300, priority: "high" },
    { name: "login_test", status: "SKIP", duration: 800, priority: "high" },
    { name: "payment_test", status: "PASS", duration: 200, priority: "medium" },
    { name: "checkout_test", status: "PASS", duration: 350, priority: "low" },
    { name: "search_product_test", status: "PASS", duration: 500, priority: "low"}
];

const getFailedTests = (cases) => {
    return cases.filter(test => test.status === "FAIL");
};
console.log(getFailedTests(testCases));

const getHighPriorityNames = (cases) => {
    const highPriorityTests = cases.filter(test => test.priority === "high");
    return highPriorityTests.map(test => test.name)

};
console.log("High priority tests:", getHighPriorityNames(testCases));

const getTotalDuration = (cases) =>
    cases.reduce((total, test) => total + test.duration, 0);

console.log("Total duration of all tests:", getTotalDuration(testCases) + "ms");


console.log("Failed tests:", getFailedTests(testCases));
console.log("High priority tests:", getHighPriorityNames(testCases));
console.log("Total test duration:", getTotalDuration(testCases));
