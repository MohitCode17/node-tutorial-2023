const {welcome, add} = require("./local.js");

const greet = welcome();
const sum = add(10, 12);

console.log(greet);
console.log(sum);

console.log("This code comes from local js file");