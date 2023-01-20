//Variable Declared with let keyword allows you to declare variables that are limited to the scope of a block statement,

let a=35;     //Declaration with let keyword
console.log(a);

let b=30;   //redeclaration is not allowed in let keyword
//let b=56;    
console.log(b);

let x=45;
x=78;        //reassign the value 
console.log(x);

//variable declared with let keyword are block scoped means we can not access the let variable value outside the block
if(true)
{
    let c=40;
    console.log(c);
}
//console.log(c);  //Gives error as c is not defined as let is a block scoped.

