/*Hoisting in JavaScript is a behavior in which a function or a variable can be used before declaration.

Hoisting --> Hoisting is allows you to move your declarations on top 
means you can call your functions and variables before initializing or defining
*/

//Hoisting a variable
console.log(a);   //printing var a

var a='hi';       //declaration of var a


//Hoisting a function
greet();          //calling function

function greet()  //declaration of function
{
    console.log("Hello from bridgelabz");
}

//anonymus function hoisting
// console.log(sum(4,5));  //gives error as Cannot access 'sum' before initialization

// let sum=(a,b) => a+b;