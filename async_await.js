//async-->The keyword async before a function makes the function return a promise:

const getData = async() => {
    var data = "Hello World";
    return data;
    }
      
    getData().then(data => console.log(data));

//Await: Await function is used to wait for the promise. It could be used within the async block only. 
//It makes the code wait until the promise returns a result. It only makes the async block wait.

const getData1 = async() => {
    var y = await "Hii All";
    console.log(y);
    }
      
    console.log(1);
    getData1();
    console.log(2);

  //Async-await Ex
  function display()
{
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(console.log("Student surnames:"));
        },100);
    })
}

async function show()
{
    console.log("Reshma");
    console.log("Pooja");
    
    await display()
    console.log("Mane");
    console.log("Patil")
}

show()

