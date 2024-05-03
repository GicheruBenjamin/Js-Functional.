
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