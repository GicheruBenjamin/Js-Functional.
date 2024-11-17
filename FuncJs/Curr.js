



//Currying
export function Hasprops(props) {
    return function(obj) {
        return Object.keys(obj).some(key => props.includes(key));
    };
}

