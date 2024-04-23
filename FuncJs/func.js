

// Using the map array function (higher-order function)
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); 

// Example: Pure function
function add(a, b) {
    return a + b;
  }
  
console.log(add(2, 3));  

// Immutability with the spread operator
const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];
console.log(originalArray); 
console.log(newArray); 

// Recursive function to calculate factorial
function factorial(n) {
    if (n === 0) {
      return 1;
    }
    return n * factorial(n - 1);
  }
console.log(factorial(5)); 

//Function composition
const multiplyByTwo = num => num * 2;
const addFive = num => num + 5;
const composedFunction = num => addFive(multiplyByTwo(num));
console.log(composedFunction(2)); 