function generateTestEmail(baseName, domain = "@test.com") {
    return `${baseName}${domain}`;
}
console.log(generateTestEmail("Milen", "@example.com"));
console.log(generateTestEmail("Mario"));

let findSlowTests = function(testTimes, threshold = 1000) {
    let slowTests = [];

    for (let i = 0; i < testTimes.length; i++) {
        if (testTimes[i] > threshold) {
            slowTests.push(i);
        }
    }
    return slowTests;
};
let times = [200, 1500, 678, 5600, 400, 2700, 101];

console.log(findSlowTests(times));