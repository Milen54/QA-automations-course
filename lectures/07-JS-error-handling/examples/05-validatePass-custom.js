function validatePassword(password) {
    if(!password) {
        throw new Error ("Password is required!");
    }

    if (typeof password !== "string") {
        throw new Error("Password must be string");
    }

    if(password.length < 8) {
        throw new Error("Password must be at least 8 characterrs long");
    }

    if (password.length > 100) {
        throw new Error ("Password is too long (max 100 characters)")
    }

    return true;
}
let password = "212";
try {
    console.log("Is password valid:", validPassword(password));
} catch (error) {
console.log(`The password: [${password}] is not valid. Error ${error}`);
}

let validPassword = "2145125235235";
console.log("Is password valid:", validatePassword(validPassword));
