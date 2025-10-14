function isValidEmail(email) {
    let hasAtSymbol = email.includes("@");
    let hasDotSymbol = email.includes(".");
    let isNotEmpty = email.length > 0;
    return hasAtSymbol && hasDotSymbol && isNotEmpty;
}
console.log(isValidEmail("user@test.com")); // true
console.log(isValidEmail("invalid@email")); // false
console.log(isValidEmail("invalid.email")); // false