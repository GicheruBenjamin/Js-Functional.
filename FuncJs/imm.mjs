// Immutability is achieved by pure functions and immutable values
//This is  done by creating copies and destructuring of ds

// Mutable approach (modifying the original array)
export function Spreadarray(arr){
    let newArray = [...arr];
    newArray[0] = 10;
    return newArray;
}
