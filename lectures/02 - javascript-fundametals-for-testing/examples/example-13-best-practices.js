function validateLoginForm(email, password) {
    if (!email || email.trim().length === 0) {
        return "Email is required";
    }

    if (!email.includes("@")) {
        return "Email format is invalid";
    }

    if (!password || password.length < 8) {
        return "Password must be at least 8 characters";
    }
    
    return "Form is valid";
}

console.log(validateLoginForm("", "password"));
console.log(validateLoginForm("user@test.com", "123"));
console.log(validateLoginForm("user@test.com", "password123"));