//create function that mimic basicMath operations
//addition,multiplication,division and subtraction

//addition
function add (a,b) {
    return a + b;
}

//multiplication
function multiply (a,b) {
    return a * b;
}

//division
function divide (a,b) {
    return a / b;
}

//subtraction
function subtract (a,b) {
    return a - b;
}

/*create a new function operate that takes operator and two numbers
 and then calls on the above function on the numbers
*/

function operate(operator, num1, num2) {
    return operator(num1, num2);
}

//call multiply on the operate function
let product=operate(multiply,30,2)
console.log(product);

//call addition
let sum=operate(add,30,2)
console.log(sum);

//call subtraction
let diff=operate(subtract,30,2)
console.log(diff)

//call divide
let div=operate(divide,30,2)
console.log(div)