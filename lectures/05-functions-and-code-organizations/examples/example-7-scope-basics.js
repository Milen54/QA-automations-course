// Global scope - variable
let globalMessage = "Available everywhere";

function testGlobalAccess() {
    console.log("Inside function:", globalMessage);
}
testGlobalAccess();

console.log("Outside function:", globalMessage);

// Function scope
function testFunctionScope() {
    let localMessage = "Only available inside this function";
    console.log("Inside function:", localMessage);
}
testFunctionScope();

// console.log("Outside function:", localMessage);   - NOT AVAILABLE ; out of scope / not defined error