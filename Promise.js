/*Promise-->Promise in javascript is a object that represents eventual completion or failure of an event..
Promise is having 3 states--> 1.Pending  2.Fullfilled   3.Rejected

1.Pending-->Promise object is "pending" (working), the result is undefined
2.Fulfilled-->Promise object is "fulfilled", the result is a value.
3.Rejected-->Promise object is "rejected", the result is an error object.
*/
//1st Ex
let myPromise = new Promise((resolve,reject) => {
    const random=Math.random();
    if(random>0.5)
    {
        resolve(random);
    }
    else
    {
        reject(`The random is low ${random}`);
    }
});

myPromise
      .then(result => {
        console.log(`random is: ${result}`);
      })
      .catch(error => {
        console.log(`Error is: ${error}`);
      })
//console.log("--------------------------------------------------------");     

//2nd Ex

let myPromise1 = new Promise((resolve, reject) => {
    let age = (Math.floor(Math.random()*(20-1))+1);
    
    if (age <18) {
      resolve("Age is Valid");
    } else {
      reject("Error");
    }
  });
  
  
  myPromise1
  .then(value => {
    console.log(value);
  })
   .catch(error => {
     console.log(error)
   });

   //console.log("--------------------------------------------------------");     

   //3rd Ex
   let promise = new Promise((resolve,reject) => {
    const a=(Math.floor(Math.random()*(20-1)+1));
    const b=(Math.floor(Math.random()*(20-1)+1));
    const result=a+b;

    if(result>25)
    {
        resolve("Pass ",result);
    }
    else
    {
        reject(`You are Fail ${result}`);
    }
});

promise
      .then(result => {
        console.log(`Result is: ${result}`);
      })
      .catch(error => {
        console.log(`Error is: ${error}`);
      })

 //4th ex
 const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);

//5th Ex
let countval = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
    reject("Promise rejected");
  });
  
  // executes when promise is resolved successfully
  
  countval
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });