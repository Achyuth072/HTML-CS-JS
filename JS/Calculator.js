function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function product(x, y) {
    return x * y;
}

function moddivision(x, y) {
    return x % y;
}

function division(x, y) {
    return x / y;
}

function exponet(x, y) {
    return x ** y;
}

let operator = prompt("enter operator");
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
switch (operator) {
    case '+':
        console.log("sum= " + sum(num1, num2));
        break;
    case '-':
        console.log("diffrence= " + subtract(num1, num2));
        break;
    case '*':
        console.log("product= " + product(num1, num2));
        break;
    case '%':
        console.log("remainder= " + moddivision(num1, num2));
        break;
    case '/':
        console.log("quotient= " + division(num1, num2));
        break;
    case '**':
        console.log("answer= " + exponet(num1, num2));
        break;
    default:
        console.log("Invalid operator");
        break;
}