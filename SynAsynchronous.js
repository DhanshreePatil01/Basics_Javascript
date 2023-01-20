// Synchronus Programming-->Code is executed in the order it is written.

function sum(x,y){
    let result=x+y;
    console.log(result);
}
sum(5,5);

function div(a,b){
    let division=a/b;
    console.log(division);
}
div(6,3);

// ASynchronus Programming-->Code is executed independently of main program flow.

//1st ex-with timeout
setTimeout(myFunct, 3000);

function myFunct() {
  console.log("Welcome To Bridgelabz!!");
}

//2nd ex-with callback
function myDisplayer(something) {
    console.log("Addition: ",something);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);
