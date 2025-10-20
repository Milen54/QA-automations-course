// Examples filter + destructuring

const students = [
    { name: "Milen", grade: 5.5},
    { name: "Roburt", grade: 3},
    { name: "Valio", grade: 6}
];

const passedStudents = students.filter(({ grade }) => grade >= 5.5);
// Transforming objects into text messages
const formatted = passedStudents.map(({ name, grade }) => `${name} passed with grade ${grade}`);

console.log("Passed students:", formatted);

const products = [
    { item: "Laptop", inStock: true},
    { item: "Mouse", inStock: false},
    { item: "Monitor", inStock: true}
];

const availableProducts = products.filter(({ inStock }) =>inStock);
const formattedAvailableProducts = availableProducts.map(({ item,inStock}) => `${item} is in stock: ${inStock}`);

console.log("Available products:", formattedAvailableProducts);


const testResults = [
    { name1: "Login Test", status: "PASS" },
    { name1: "Checkout Test", status: "FAIL"},
    { name1: "Profile Update", status: "FAIL"}
];

const failedTests = testResults.filter(({ status }) => status === "FAIL");
const formattedFailedTests = failedTests.map(({ name1, status }) => `${name1} is failed: ${status}`);

console.log(formattedFailedTests);


const customers = [
    { name2: "Milen", age: 25},
    { name2: "Valio", age: 16},
    { name2: "Mario", age:25}
];

const adults = customers.filter(({ age }) => age >= 18);
const formattedAdults = adults.map(({ name2, age }) => `${name2} is: ${age} years old`);

console.log(formattedAdults);

const emails = ["milen@example.com", "invalid-email", "invalid@email"];
const validEmails = emails.filter(email => email.includes("@") && email.includes("."));

console.log("Valid emails:", validEmails);