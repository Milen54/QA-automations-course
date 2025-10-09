let testEnvironments = ["development", "staging", "production", "UAT"];

console.log("Number of environments:", testEnvironments.length);

if (testEnvironments.length > 0) {
    console.log("We have environments to test");
} else {
    console.log("No test environments configured");
}