 //var is the keyword that tells JavaScript you're declaring a variable.

 var a=20;       //declaration of variable
 console.log(a);

//Variable Declared With var keyword can be redeclared.
 var b=20;
 var b=56;       //redeclaration of a variable

 console.log(b);

//variable declared with var keyword are not block scoped they are function scoped
 if(b===56)
 {
    var c=40;
    console.log(c);
 }
 console.log(c);   //printing value 40 means it is not block scoped.

 function test()
 {
    var d=100;
    console.log(d);
 }
test();

 //console.log(d);   //It is giving the error as "d is not defined" means it is function scoped.