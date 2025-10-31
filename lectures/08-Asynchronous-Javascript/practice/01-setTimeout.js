// console.log("1. Starting...");

// setTimeout(() => {
//     console.log("2. Waited 2 seconds!");
// }, 2000);
// console.log("3. Ended!");


// Example 2
// console.log("=== Example 2 ===");

// console.log("Starting timmers...");

// setTimeout(() => console.log("Timer 1: (after 3000ms)"), 3000);
// setTimeout(() => console.log("Timer 2: (after 1000ms)"), 1000);
// setTimeout(() => console.log("Timer 3: (after 2000ms)"), 2000);

// Example 3 
// console.log("=== Example 3 ===");
// console.log("Starting....");

// function wait (ms) {
//     const end = Date.now() + ms;
//     while (Date.now() < end) {

//     }
// }
// wait(2000);
// console.log("Ended after 2 seconds!");


// Example 4
// console.log("Start...");

// setTimeout(() => {
//     console.log("After 1 second...");
//     setTimeout(() => {
//         console.log('After 2 seconds...');
//         setTimeout(() => {
//             console.log("After 3 seconds...");
//         }, 3000);
//     }, 2000);
// }, 1000);

// console.log("=== Example 1 ===");
// function delayedMessage() {
//     console.log("Waiting 2 seconds...");

//     setTimeout(() => {
//         console.log("Time's up!");
//     }, 2000);
// }
// delayedMessage();
// console.log("Function is called, but not waiting to complete");

// console.log("=== Example 2 ===");
// function greetAfterDelay(name, delay) {
//     console.log(`I will greet ${name} after ${delay / 1000} seconds...`);
    
//     setTimeout(() => {
//         console.log(`Hello, ${name}!`);
//     }, delay);
// }
// greetAfterDelay("Mario", 2000);

function loadData() {
    console.log("Loading data from server...");

    setTimeout(()=> {
        console.log("Data is loaded!");
    }, 2500);
}
console.log("Starting program");
loadData();
