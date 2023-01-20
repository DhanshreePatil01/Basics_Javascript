//const is like constant value.

const val='Hello';  //Declaration of a variable with const keyword.
console.log(val);

const a=100;
//const a=45;       //Redeclaration is not allowed with const keyword.

console.log(a);


const b=500;
//b=45;        //ReAssignment is not allowed with const keyword.

console.log(b);


if(a===100)
{
    const c=40;
    console.log(c);
}

//console.log(c);  //const is always a block scoped. we can not access the value outside the block.