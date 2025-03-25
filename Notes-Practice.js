function greet() {
    return "Hello!";
}

const sayHello = greet; // Function assigned to a variable
console.log(sayHello()); // "Hello!"

var a=2
console.log(a)
var a=3
console.log(a)
// Arrow function
const add=(a,b)=>a+b;
console.log(add(5,7)); // 12

//Function declaration
function add(a,b){
    return a+b;
}
add(5,6);