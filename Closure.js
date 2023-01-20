/*Closure-->

You have a closure when a function reads or modifies the value of a variable defined outside its context.
a closure gives you access to an outer function's scope from an inner function
*/

//Closure Example 1
let count = 1
function OutsideFunction() 
{
    console.log("OutsideFunction Value: ",count);
    function printValues()
    {
        for(count=11;count<21;count++)
        {
            console.log(count);
        }
    }
    console.log("printValues function for printing values from 11 to 20: ");
    printValues();
}

OutsideFunction() 


//Closure Example 2
function function1(){
    let SomeVariable = 5;
    console.log("function 1 variable: ",SomeVariable);

    function function2(){
        console.log("function 2 variable: ", SomeVariable);
    }
    function2();
}

function1();


//Closure Example 3
function showOuter()
{
    let val=2;
    console.log("showOuter Value: ",val);

    function showEven()
    {
        for(val=2;val<=20;val++)
        {
            if(val % 2 == 0)
            {
            console.log(val);
            }
        }
    }
    console.log("Printing Even No: ");
    showEven();
}

showOuter();
