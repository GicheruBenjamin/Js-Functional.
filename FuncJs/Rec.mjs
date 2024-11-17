
// Recursive function to calculate factorial
export function Factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * Factorial(n - 1);
  }