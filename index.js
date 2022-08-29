let name = 'Flatiron';

// Data type in JS

// integer: 12
// float: 1.2
// boolean: true, false
//string: 'any words or sentence'
//char: 'A' 

// difference between null and undefined
// null is a value, undefined is not a value: it means it was never assigned to a value.

let num = 20
console.log(num)

let num1 = null
console.log(num1)

//operators in JS
// +, -, *, /, %

//conditional operators in JS
// ||, &&, ==, ===, !

//if else-----------------
console.log("10" === 10)

let a = 15
let b = 12

if (a > b){
    console.log(a+b)
} else if ( a === b){
    console.log(a * b)
} else {
    console.log(b - a)
}

//----------------------

//functions in JS 

//Block of code, that performs operations
//can be used later
//makes the code DRY
//DRY - DO NOT REPEAT YOURSELF

//Create a function that takes 2 integer and returns the sum

// function sum(num1, num2){
//     return ( num1 + num2)
// }

// console.log(sum(100, 20) + 100)

// Create a function that takes an argument, it checks for the type of that argument

function checkType(variable){
    if (typeof variable == 'string'){
        return 'This is a string'
    } else if(typeof variable == 'number'){
        return 'This is an number'
    } 

    return('The variable is: ' + variable)
}

console.log(checkType(100))

//arrow function

const sum = (num1, num2) =>{ 
    return num1 + num2
 }

console.log(sum(10, 15))

//Callback function


//write a function that takes 3 numbers, it adds the first two numbers and then subtracts the third number from it's sum

// const addAndSubtract = (num1, num2, num3, sumFunction) => sumFunction(num1, num2) - num3

// console.log(addAndSubtract(10, 15, 8, sum))


//----------------------------------------------------------------//

function addAndSubtract(num1, num2, num3, additionFunction) {
    return additionFunction(num1, num2) - num3
}

console.log(addAndSubtract(10, 15, 8, sum))


const morningGreetings = () => console.log("Good Morning!")

const greetings = (greetingFunction) => greetingFunction()

greetings(() => console.log("Good Moring!"))

const printValue = (value) => console.log(value)
let list = [1, 2, 3]


list.map(   (num) => printValue(num)      )

