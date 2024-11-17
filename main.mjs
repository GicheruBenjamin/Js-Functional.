import { Add } from "./FuncJs/pure.mjs";
import { Spreadarray } from "./FuncJs/imm.mjs";
import { Factorial } from "./FuncJs/Rec.mjs";
import { Blend, Removeimpurities } from "./FuncJs/Comp.mjs";
import { Cook, Providekeys } from "./FuncJs/Close.mjs";
import { Hasprops } from "./FuncJs/Curr.mjs";

function main() {
    const result = Add(2, 3);
    console.log(result);
    console.log("------------------");
    
    const originalArray = [1, 2, 3];
    const newArray = Spreadarray(originalArray);
    console.log(newArray);
    console.log("------------------");

    const factorialResult = Factorial(5);
    console.log(factorialResult);
    console.log("------------------");

    const fruit = "apple";
    const blendedFruit = Blend(fruit);
    console.log(blendedFruit);
    console.log("------------------");
    
    const items = ["apple", "banana", "orange"];
    const filteredItems = Removeimpurities(items, Blend);
    console.log(filteredItems);
    console.log("------------------");

    const obj = { a: 1, b: 2, c: 3 };
    const keys = Providekeys(obj)();
    console.log(keys);
    console.log("------------------");

    const cooked = Cook();
    cooked();
    console.log("------------------");

    const hasProps = Hasprops(["a", "b"]);
    console.log(hasProps({ a: 1, b: 2, c: 3 }));
    console.log("------------------");

    
}
main();