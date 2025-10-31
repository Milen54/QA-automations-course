import { simulateApiCall } from "../task-02/task-02-then-catch.js";

export async function runSafeOperation(name, shouldFail) {
    try {
        const result = await simulateApiCall(name, shouldFail);
        return { ok: true, name: name, status: result.status }
    } catch (error) {
        console.error("Error message:", error.message);
        return { ok: false, name: name};
    }
}
// // === Demonstrate 
// runSafeOperation("profile", false)
// .then((result) => {
//     console.log("Success:", result);
// });

// // === Demonstrate
// runSafeOperation("report", true)
// .then((result) => {
//     console.log("Success:", result);
// });