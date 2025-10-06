let errorMessage = "Invalid email adress provided";
let userName = "   john.doe@example.com  ";
let pageTitle = "QA Automation Dashboard";
let apiResponse = "User created successfully with ID: 12345";
console.log(apiResponse);

// indexOf - find position of text (return -1 if not found)
let emailErrorPosition = errorMessage.indexOf("email");
console.log("Email mentioned at position:", emailErrorPosition);
console.log("Contains 'password':", errorMessage.indexOf("password"));

// includes - check if text contains substring (returns boolean)
console.log("Email mentions email:", errorMessage.includes("email"));
console.log("Error mentions passwords:", errorMessage.includes("password "));

// slice - extract part of string
let domain = userName .slice(userName.indexOf("@") + 1) // Gets "@example.com"
console.log("Domain:", domain);

// trim - remove whitespaces
let cleanUserName = userName.trim();
console.log("Original:", userName);
console.log("Trimmed:", cleanUserName);

// toLowerCase/toUpperCase
let expectedTitle = "qa automation dashboard";
console.log("Title match:", pageTitle.toLocaleLowerCase() === expectedTitle);
console.log("Title match:", pageTitle.toUpperCase() === expectedTitle);

// split - cover string to array
let csvData = "test1, test2, test3, test4";
let testNames = csvData.split(",");
console.log("Test names:", testNames);

// replace - modify strings
let templateMessage = "Hello {USERNAME}, welcome {SITE}";
let personalizedMEssage = templateMessage
.replace("{USERNAME}", "John")
.replace("{SITE}","QA Portal");
console.log("Personalized:", personalizedMEssage);