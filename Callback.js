//CallBack---->
//Callback is a function that is passed as an argument to another function.

//1st EX
function square(n,callback){
    let result=n*n;
    callback(result);
}

square(5,function(mult){
    console.log("Square : ",mult);
});


//2th Ex
function multiplication(x,y,callback){
    let result=x*y;
    callback(result);
}

multiplication(5,5,function(mult){
    console.log("Multiplication : ",mult);
});


//3rd ex
let result=(x,y,callback) => {
    callback();
}
let check= () => {
 console.log("Welcome all");
}

result(2,3,check);


//4th ex
function add(k,l,callback)
{
    let ans=k+l;
    callback(ans);
}

add(10,10,function(sum){
    console.log("addition : ",sum);
})

//5th Ex
let some=(callback) => {
    callback();
}
let display= () => {
 console.log("Dhanshree Patil");
}

some(display);