// And operator (&&) - all conditions must be true
let isLoggedIn = true;
let hadPermission = true;
let canAccessFeature = isLoggedIn && hadPermission;
console.log("Can access feature:", canAccessFeature);

// OR operator (||) - at least one condition must be true
let isAdminUser = true;
let isOwner = true;
let canDeleteItem = isAdminUser || isOwner;
console.log("Can delete:", canDeleteItem);

// NOT operator (!) - reverses boolean value
let hasErrors = false;
let testPassed = !hasErrors;
console.log("Test passed:", testPassed);

// Complex test validation scenario
let statusCode = 200;
let responseTime = 300;
let hasRequiredDate = true; 

let apiTestPassed = statusCode === 200 && responseTime < 500 && hasRequiredDate;
console.log("API test passed:", apiTestPassed);