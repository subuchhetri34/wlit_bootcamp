// function compute(action,x,y){
//     if (action === "add"){
//         return x+y
//     }
//     else if(action === "divide"){
//         return x/y
//     }
// }

// console.log(compute("add",10,5));
// console.log(compute("divide",10,5));

function add(x,y){
    return x+y
    }
function div(x,y){
    return x/y
}

function compute(callBack,x,y){
    return callBack(x,y)
}

console.log(compute(add,10,5));
console.log(compute(div,10,5));