export function isValidEmail(email) {
    let hasAtSymbol = email.includes("@");
    let hasDotSymbol = email.includes(".");
    let isNotEmpty = email.length > 0;

    return hasAtSymbol && hasDotSymbol && isNotEmpty;
}
// console.log(isValidEmail("user@test.com"));
// console.log(isValidEmail("invalid@email"));
// console.log(isValidEmail("invalid.email"));

export function formatDuration(milliseconds) {
    if (milliseconds < 1000) {
        return milliseconds + "ms";
    } else {
        let seconds = milliseconds / 1000;
        return seconds.toFixed(1) + "s";
    }
}
// console.log(formatDuration(1200));

export function generateTestEmail(baseName, domain) {
    if (!domain) {
        domain = "testcompany.com";
    }

    return baseName + "@" + domain;
}
// console.log("Generated email:", generateTestEmail("Milen", "example.com"));
// console.log("Generated email:", generateTestEmail("Ivan"));


// Demonstration calls

// // 1. isValidEmail
// // console.log(isValidEmail("user@test.com"));
// console.log(isValidEmail("invalid@email"));
// console.log(isValidEmail("invalid.email"));

// 2. formatDuration
// console.log(formatDuration(1200));
// console.log(formatDuration(800));

// 3. generateTestEmail
// console.log("Generated email:", generateTestEmail("Milen", "example.com"));
// console.log("Generated email:", generateTestEmail("Ivan"));