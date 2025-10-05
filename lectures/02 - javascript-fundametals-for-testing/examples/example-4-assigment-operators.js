// Basic assigment
let testResult; 
testResult = "pending";
console.log("Intial result:", testResult);

// Compound assigment operators
let errCount = 0;
errCount += 1
console.log("Errors so far:", errCount);

// Building test messages incrementally 
let testLog = "Test started";
testLog += " - Navigation completed";
testLog += " - Login Attempt";
testLog += " - Verification passed";
console.log("Final log:", testLog);

let waitTime = 1000;
waitTime *= 2;
console.log("Adjusted wait time:", waitTime + "ms");