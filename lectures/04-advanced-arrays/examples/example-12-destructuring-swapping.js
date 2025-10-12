let firstTest = "login_test";
let secondTest = "logout_test";

console.log(`Before swap: ${firstTest}, ${secondTest}`);

// Traditional swap
let temp = firstTest;
firstTest = secondTest;
secondTest = temp;

console.log("After traditional swapping:", firstTest, secondTest);

// Destructuring
[firstTest, secondTest] = [secondTest, firstTest];
console.log(`After destructuring swap: ${firstTest}, ${secondTest}`);