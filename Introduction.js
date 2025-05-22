let name = "Abdul Samad";  // String
const age = 25;    // Number
let isStudent = true; // Boolean
let fruits = ["Apple", "Mango", "Banana"]; // Array
let person = { name: "samad", age: 25 }; // Object
console.log(person);

// fsdfasdfasdfasdfadfdsafsadhjfklasdfdsafkjhdk?
// this is a simple comments
//function
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Abdul Samad"));

// Arrow Functions (Used in React)
const greet = (name) => `Hello, ${name}!`;
console.log(greet("Ali"));

// Destructuring
const user = { name: "Ali", age: 25 };
const { name, age } = user;
console.log(name, age);

// Spread & Rest Operators
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];  // Spread
console.log(newNumbers);

const sum = (...args) => args.reduce((acc, val) => acc + val, 0);
console.log(sum(1, 2, 3, 4));


// Template Literal
const message = `My name is ${name} and I am ${age} years old.`;

// 4. Promises & Async/Await
const fetchData = async () => {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
fetchData();


// 5. Array Methods (Useful in React)
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(num => num * num);
console.log(squared);  // [1, 4, 9, 16, 25]

const evens = numbers.filter(num => num % 2 === 0);
console.log(evens);  // [2, 4]

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);  // 15
