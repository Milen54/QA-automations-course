export function readTestRow(row) {
    let [name, status, time, priority] = row;

    return `${status} ${name} (${time}ms) - ${priority}`;
}
// let testRow = ["login_test", "PASS", 200, "HIGH"];
// console.log(readTestRow(testRow));

export function extractFirstLast(arr) {
    let [first] = arr;

    let [last] = [arr[arr.length - 1]];

    return [first, last];
}
// let numbers = [10, 20, 30, 40, 50];
// console.log(extractFirstLast(numbers));

export function quickPassedAlphabetical(tests) {
    return tests
    .filter(function([name, status, time, priority]) {
        return status === "PASS" && time < 500;
    })
    .map(function([name]){
        return name;
    })
    .sort();
}

// let tests = [
//  ["login_test", "PASS", 200, "HIGH"],
//  ["profile_test", "PASS", 550, "LOW"],
//  ["payment_test", "FAIL", 300, "HIGH"],
//  ["admin_panel", "PASS", 120, "MEDIUM"],
//  ["z-module", "PASS", 300, "LOW"]];

// console.log(quickPassedAlphabetical(tests));


// === Demonstration calls ===

// 1. readTestRow
let testRow = ["login_test", "PASS", 200, "HIGH"];
console.log(readTestRow(testRow));

// 2. extractFirstLast
let numbers = [10, 20, 30, 40, 50];
console.log(extractFirstLast(numbers));

// 3. quickPassedAlphabetical
let sampleTests = [
  ["login_test", "PASS", 200, "HIGH"],
  ["profile_test", "PASS", 550, "LOW"],
  ["payment_test", "FAIL", 300, "HIGH"],
  ["admin_panel", "PASS", 120, "MEDIUM"],
  ["z-module", "PASS", 300, "LOW"]
];

console.log(quickPassedAlphabetical(sampleTests));
