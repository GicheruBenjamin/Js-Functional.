
//There are sevaeral ways to have high order funcs
// One is craeting the functions themselves 
//Two is to use built in functions e.g array iterator methods

function display(f){
    console.log(f);
}
let sum = (a,b) =>{
    return a+b;
}

display(sum(5,7))

let san =[12,53,48,66,11,27,83,79,21];
console.log(san.map(s => s - 9));
console.log(san.filter(a => a/2 == 0));
console.log(san.reduce(s => (s/2) == 0));