// FOR loops when:
// working with arrays
// you know the exact number of iterations
// you need an inde counter

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];
console.log("For loop example");
for (let i = 0; i < browsers.length; i++) {
    console.log("Testing browsers:", browsers[i]);
}

// While loop when:
// you don't know how many iterations you need
// you are waiting for a condition to become true
// you processing until something is empty/complete

let attempts = 0;
let success = false;

while (!success && attempts <5){
    attempts++
    // Simulate a random success
    success = Math.random() > 0.5;
    console.log(`Attempt ${attempts}: ${success ? "Success!" : "Failed, retrying..."} `);
}