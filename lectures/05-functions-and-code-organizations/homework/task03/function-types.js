export function formatTestResultDecl(testName, status) {
    let icon = status === "PASS" ? "✅" : "❌";
    return icon + " " + testName + " - " + status;
}
// let tests = ["logout test", "register test"];
// let testStatus = ["PASS", "FAIL"];

// console.log("Formatted results /Declaration/:");
// console.log(formatTestResultDecl(tests[0], testStatus[0]));
// console.log(formatTestResultDecl(tests[1], testStatus[1]));

export let testResultExpr = function(testName1, status1) {
    let icon1 = status1 === "PASS" ? "✅" : "❌";
    return icon1 + " " + testName1 + " - " + status1;
}
// let tests1 = ["register test", "checkout test"];
// let testStatus1 = ["FAIL", "PASS"];

// console.log("Formatted results /Expression/:");
// console.log(testResultExpr(tests1[0], testStatus1[0]));
// console.log(testResultExpr(tests1[1], testStatus1[1]));

export let testResultArrow = (testName2, status2) => 
    `${status2 === "PASS" ? "✅" : "❌"} ${testName2} - ${status2}`;

// let test2 = ["payment test", "checkout test"];
// let testStatus2 = ["PASS", "FAIL"];

// console.log("Formatted results /Arrow/");
// console.log(testResultArrow(test2[0], testStatus2[0]));
// console.log(testResultArrow(test2[1], testStatus2[1]));

export function calculateAverageDecl(numbers) {
    let sum = numbers.reduce(function(acc, num) {
        return acc + num;
    }, 0);
    return sum / numbers.length;
}
// let nums = [20, 10];
// console.log("Average Declaration:",calculateAverageDecl(nums));

export let calculateAverageExpr = function(numbers1) {
    let sum1 = numbers1.reduce(function(acc1, num1) {
        return acc1 + num1;
    }, 0);
    return sum1 / numbers1.length;
}
// let nums1 = [30, 30];
// console.log("Average Expression:", calculateAverageExpr(nums1));

export let calculateAverageArrow = (numbers2) =>
    numbers2.reduce((acc2, num2) => acc2 + num2, 0) / numbers2.length;

// let nums2 = [20, 20];
// console.log("Average Arrow:", calculateAveraArrow(nums2));


// Demonstration calls

// 1. formatTestResult
let tests = ["logout test", "register test"];
let testStatus = ["PASS", "FAIL"];

console.log("Formatted results /Declaration/:");
console.log(formatTestResultDecl(tests[0], testStatus[0]));
console.log(formatTestResultDecl(tests[1], testStatus[1]));

// // 2. testResultExpr
// let tests1 = ["logout test", "register test"];
// let testStatus1 = ["PASS", "FAIL"];

// console.log("Formatted results /Expression/:");
// console.log(testResultExpr(tests1[0], testStatus1[0]));
// console.log(testResultExpr(tests1[1], testStatus1[1]));

// // 3. testResultArrow
// let tests2 = ["logout test", "register test"];
// let testStatus2 = ["PASS", "FAIL"];

// console.log("Formatted results /Arrow/");
// console.log(testResultArrow(tests2[0], testStatus2[0]));
// console.log(testResultArrow(tests2[1], testStatus2[1]));

// // 4. calculateAverageDecl
// let nums = [10, 20, 30];
// console.log("Average Declaration:",calculateAverageDecl(nums));

// // 5. calculateAverageExpr
// let nums1 = [10, 20, 30];
// console.log("Average Expression:", calculateAverageExpr(nums1));

// // 6. calculateAverageArrow
// let nums2 = [10, 20, 30];
// console.log("Average Arrow:", calculateAveraArrow(nums2));

