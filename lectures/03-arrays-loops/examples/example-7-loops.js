let users = ["user1@test.com", "user2@test.com", "user3@test.com"];

for (let i = 0; i < users.length; i++) {
    console.log("Testing user:", users[i]);
}

let testCases = ["login", "logout", "registration", "password"];
for (let i = 0; i < testCases.length; i++) {
    console.log(`Running test ${i + 1} : ${testCases[i]}`);
}
