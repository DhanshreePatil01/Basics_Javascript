//Event Loop--->The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.

// An event loop is something that pulls stuff out of the queue and places it onto the function execution stack whenever the function stack becomes empty.

//1st Ex
function test1() {
    console.log("Inside test1 function!")
 }
   
 function test2() {
    test1()
 }
   
 function main() {
    test2()
 }
   
 main()

 //2nd Ex
 function multiply(a,b)
{
    console.log(a*b);
}

function square(n)
{
    multiply(n,n);
}

function printSquare(n)
{
    square(n);
}

printSquare(5);

//3rd Ex
console.log("This is the first statement");

setTimeout(function(){
	console.log("This is the second statement");
}, 2000);

console.log("This is the third statement");

//4th Ex
function read1()
{
    console.log("reading the novel");
}
function read2()
{
    read1();
    console.log("reading is done")
}
read2();

//5th Ex

setTimeout(function(){
	console.log("Started From Today");
}, 1000);
console.log("welcome To bridgelabz");

console.log("This is CFP 217 Batch");