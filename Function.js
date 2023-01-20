//function---->function is a group of statements that performs a specific task.
//function is a way to reuse code.


//function declaration and defination
function greet()
{
    console.log("Hello ");
}        

greet();           //function invocation


//parameterized function
function add(a,b)
{
    console.log(a+b);
}

add(5,4);          //function invocation


//arrow function
let square = (num) => num*num;
console.log("Square is: ",square(5));


//anonymus function
let division= function(x,y) {
    console.log(x/y);
}

division(10,5);