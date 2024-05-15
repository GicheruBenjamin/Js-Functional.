// Immutability is achieved by pure functions and immutable values
//This is  done by creating copies and destructuring of ds

// Mutable approach (modifying the original array)
const numbers = [1, 2, 3];
numbers[0] = 10; // Modifies the original array
console.log(numbers); 
const newNumbers = [...numbers, 4]; // Spreads the original array and adds 4
console.log(numbers); 
console.log(newNumbers); 
