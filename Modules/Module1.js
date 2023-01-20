/*Module-->ES6 introduces file based module, in which each module is represented 
by a separate .js file. Now, you can use the export or import statement in a module
to export or import variables, functions, classes or any other entity to/from other
modules or files.
*/
const a=10;
const someVar = (name="Dhanshree") => {
    console.log(`Good Morning ${name}`) ;
}

const square =(num=5) => {
    console.log(num*num);
}

export default{a,someVar,square};