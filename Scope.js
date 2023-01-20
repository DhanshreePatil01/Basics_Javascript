// Global Scope---> variables can be accessed from anywhere

let a=10;

function show()
{
    let a=20;             //Local/Function Scope--->Variables can be accessed only within the function.
    console.log("Function Scope: ",a);

    {
        a=56;
        console.log("Block Scope: "+a);  //Block Scope--->Only accessed within the block.
    }
}
show();

console.log("Global Scope: ",a);

