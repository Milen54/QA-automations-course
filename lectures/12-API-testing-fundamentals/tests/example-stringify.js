const user = {
    id: 1,
    name: "Milen Denkov",
    email: "denkov@success.com",
};
// Without pretty print
console.log("Without pretty print");
console.log(JSON.stringify(user));

console.log("==============");

// With pretty print
console.log("With pretty print");
console.log(JSON.stringify(user, null, 2));

// NEW Example
const employee = {
    id: 2,
    name: "Milen Denkov",
    email: "example@example.com",
    password: "123456",
};

const replacer = (key, value) => {
    if (key === "password") return undefined;
    return value;
};
console.log(JSON.stringify(user, replacer, 2));

// NEW Example Функция + подравняване

const car = {
    brand: "Skoda",
    model: "Octavia",
    price: 32000,
    year: 2021,
};

const replacer1 = (key, value) =>{
    if (key === "price") return `$${value}`;
    return value;
}
console.log(JSON.stringify(car, replacer1, 4));


// NEW Example
const product = {
    name: "Laptop",
    price: 1200,
    weight: 2.3, 
    inStock: true,
};

const replacer2 = (key, value) => {
    if (key === "price") return `$${value}`;
    if (key === "weight") return `${value} kg`;
    return value;
};
console.log(JSON.stringify(product, replacer2, 2));