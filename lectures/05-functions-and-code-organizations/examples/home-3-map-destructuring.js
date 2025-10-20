// 1.
const numbers = [1, 2, 3, 4, 5];

const increased = numbers.map(num => num + 10);
console.log(increased);

// 2. 
const coordinates = [
    [2, 3],
    [5, 7],
    [10, 20]
];

const formatted = coordinates.map(([x, y]) => `(${x}, ${y})`);
console.log(formatted);

// 3. Map + destructuring objects

const users = [
    { name: "Milen", age: 23},
    { name: "Roburt", age: 29},
    { name: "Mario", age: 25}
];

const userInfo = users.map(({ name, age }) => `${name} is ${age} years old`);
console.log(userInfo);

// 4. Map + destructuring objects ! Names to upperCase

const employees = [
    { name: "Milen", city: "Sofia"},
    { name: "Roburt", city: "Pernik"},
    { name: "Mario", city: "Blagoevgrad"}
];

const upperNames = employees.map(({ name }) => name.toUpperCase());
console.log(upperNames);

// 5. Map + destructuring ! Format sentence

const products = [
    { name1: "Laptop", price: 1500},
    { name1: "Mouse", price: 40},
    { name1: "Keyboard", price: 100}
];

const productInfo = products.map(({ name1, price }) => `${name1} costs $${price}`);
console.log(productInfo);

// 6. Map + destructuring ! Add new field in each object

const students = [
    { name2: "Milen", grade: 5.5},
    { name2: "Valio", grade: 2},
    { name2: "Vlado", grade: 5}
];

const updated = students.map(({ name2, grade}) => 
    `${name2}: ${grade} | ${grade >=5 ? "✅ Passed" : "❌ Failed"}`
);

console.log(updated);


// const users = [
//     { name: "Milen", age: 23},
//     { name: "Roburt", age: 29},
//     { name: "Mario", age: 25}
// ];

const info = users.map(({ name, age}) => `${name} is ${age} years old`);

console.log(info);

const pairs = [
    ["Milen", "QA"],
    ["Roburt", "Backend Engineer"],
    ["Mario", "Designer"]
];

const roles = pairs.map(([name, role]) => `${name} works as ${role}`)

console.log(roles);

// More examples
const celsius = [0, 10, 20, 30, 40];

const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);

console.log("Input of tempretures in celsius:", celsius);
console.log("Temperatures in °F:", fahrenheit.join(", "));


const products1 = [
    { item: "Laptop", price: 1500},
    { item: "Mouse", price: 40},
    { item: "Keyboard", price: 100}
];

const priceLabels = products1.map(({ item, price}) => `${item} costs $${price}`);
console.log(priceLabels);

const books = [
    { title: "Clean code", rating: 9.5},
    { title: "JavaScript Basics", rating: 7.2},
    { title: "Testing for QA", rating: 5.8}
];

const ratedBooks = books.map(({ title, rating }) =>
    `${title} -> ${rating >= 8 ? "⭐ Top rated" : "📘 Average"}`
);
console.log(ratedBooks);

const tasks = [
    { task: "Write documentation", done: true},
    { task: "Fix bug #32", done: false},
    { task: "Deploy to staging", donte: true}
];

const taskList = tasks.map(({ task, done}) =>
    `${done ? "✅" : "❌"} ${task}`
);
console.log(taskList);

const flights = [
    ["SOF", "LON", 180],
    ["SOF", "PAR", 200],
    ["VAR", "BER", 150]
];

const flightReports = flights.map(([from, to, duration]) =>
    `✈️ ${from} -> ${to} (${duration} mins)`
);
console.log(flightReports);