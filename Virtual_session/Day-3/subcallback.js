function sub(x,y){
    return x-y
    }
function mul(x,y){
    return x*y
}

function compute(callBack,x,y){
    return callBack(x,y)
}

console.log(compute(sub,10,5));
console.log(compute(mul,10,5));