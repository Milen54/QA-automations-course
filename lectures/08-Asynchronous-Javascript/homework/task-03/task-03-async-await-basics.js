import { simulateApiCall } from "../task-02/task-02-then-catch.js";

export async function runSingleOperation(name, shouldFail) {
    console.log("Starting...");
    const result = await simulateApiCall(name, shouldFail);
    console.log("Result:", result);
    return result;
}
// === Demonstrate a successful call
runSingleOperation("dataProcessing", false)
.then((result) => {
    console.log("Success:", result);
})
.catch((error) => {
    console.log("Error:", error.message);
});

// // === Demonstrate a failing call
// runSingleOperation("login", true)
// .then((result) => {
//     console.log("Success:", result);
// })
// .catch((error) => {
//     console.log("Error:", error.message);
// });