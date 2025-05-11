// datatype in javascript

// there is two type of datatype

// # primitive type
// there is 7 type of primitive datatype 

// String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt

// Reference type (non- primitive)

// Array
// Object
// function

// let heros = ["salman","krishna","radhe"]

// let = myObj = {
//     name:"shri krishan",
//     age:34
// }

// let myfunction = function(){
//     console.log("Hello world")
// }

// JavaScript is a dynamically typed language.
// dynamically mean we don't have to define the type of the variable
// statically mean we have to define the type of the variable that is other language like c++, java,typescript




// **********************************************************

// memory in javascript

// stack and heap memory 

// stack(primitive)
// heap (non- primitive)


// stack memory

let a = 45;
let b = a;

b = 70

console.log(a)
console.log(b)


// heap memory
let mydata ={
    name:"Shri krishna",
    phone:"9510089534"
}

let userData = mydata

userData.name = "Ram"

console.log(mydata.name)
console.log(userData.name)