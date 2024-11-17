
//Closure invovles creating a function within a function
// The inner function has access to the variables in the outer function
// The inner function can access the variables in the outer function
// The inner function can also access the variables in the global scope
// The inner function can access the variables in the outer function and the global scope
export function Cook(){
    let food = "Chicken";
    return function(){
        console.log(food);
    }
}

export function Providekeys(obj){
    function Keys(){
    let keys = Object.keys(obj);
    return keys;
    }
    return function(){
        console.log(Keys);
    }
}