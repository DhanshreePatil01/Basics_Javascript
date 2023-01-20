//Performing all the array operations.

//Declaring array of color
let colors = ["Red","Green","Yellow","Black"];

//printing array
console.log("Colors Array : ",colors);

console.log("---------------------------------------------------");

let length=colors.length;   //Retriving Length of an array

console.log("Length of Colors Array is: ",length);

console.log("---------------------------------------------------");

//Converting Arrays into Strings-toString() Method
let check=colors.toString();
console.log("Array To String:",check);

//Join() method is similar like toString()
let join=colors.join();
console.log("Join:",join);

console.log("---------------------------------------------------");
//sorting Array--Sort() method

let sortOutput=colors.sort();
console.log("Sorted Array: ",sortOutput);

let numbers =[78,45,14,79,36];
let sortNumbers = numbers.sort();
console.log("Sorted Numbers: ",sortNumbers);

console.log("---------------------------------------------------");

//Accessing an array item based on index

let index= colors[2];
console.log("Color at given index: ", index);

console.log("---------------------------------------------------");
//Getting last element from array

let last = colors[colors.length-1];
console.log("Last element from an array: ",last);

//Second last element from an array
let secondLast = colors[colors.length-2];
console.log("Second Last element from an array: ",secondLast);

console.log("---------------------------------------------------");

//Add Item at the end of an array-- push method is used

colors.push("Purple");
console.log("Pushed Item as Purple: ",colors);

console.log("---------------------------------------------------");

//Remove Item at the end of an array-- Pop method is used

colors.pop("Purple");
console.log("Poped Item as Purple: ",colors);
console.log("---------------------------------------------------");

//Loop over an array

console.log("-----Printing array elements with its index---- ")
colors.forEach((value,i) => {
      console.log(value,i);
})

console.log("-----Printing array elements only---- ")
colors.forEach((value) => {
      console.log(value);
})

console.log("-----Printing array Index only---- ")
colors.forEach((value,i) => {
      console.log(i);
})

console.log("---------------------------------------------------");

//Remove item from the start of an array--Shift() method is used.

let firstDelete = colors.shift();
console.log("Shifted First element as Red: ",colors);
console.log("---------------------------------------------------");

//Add item at the start of an array--unShift() method is used.

let firstAdd = colors.unshift("White");
console.log("UnShifted First element as White: ",colors);
console.log("---------------------------------------------------");

//find index of an item in the array--indexOf() method

let position = colors.indexOf("Green");
console.log("Green is present at index: ",position);
console.log("---------------------------------------------------");

//Adding or Deleting item from an array ---using Splice() method

//Splice method--->It is used to add or remove elements from an array

colors.splice(0,2);  //deleting item
console.log("Splice is used to delete 2 items : ",colors);

colors.splice(2,0,"Indigo","Grey","Blue","Gold");  //Adding item
console.log("Splice is used to add 4 items : ",colors);

console.log("---------------------------------------------------");

//The slice() method slices out a piece of an array into a new array.

//slice on array
let ArrSlice = colors.slice(3);
console.log("Slice method on color Array: ",ArrSlice);

//slice on string
let text = "I am Dhanshree";
let Slice = text.slice(2,9);
console.log("Slice method on string: ",Slice);

console.log("---------------------------------------------------");

//Split method()-->The split() method splits a string into an array of substrings.
//If (" ") is used as separator, the string is split between words.

let some = "Welcome To BridgeLabz";
let splitEx = some.split("");      //Split the characters, including spaces
console.log("Split inclusing spaces: " , splitEx);


let splitEx1 = some.split(" ");     //Split the words
console.log("Split words: " , splitEx1);


let splitEx2 = some.split(" ",1);  //Use the limit parameter
console.log("Split using limit: " , splitEx2);

console.log("---------------------------------------------------");

//concatinating arrays

const fruit1 =["Apple","PineApple"];
const fruit2 =["orange","Lemon"];
const fruit3 =["Strawberry"];

const mergeArray = [...fruit1,...fruit2,...fruit3];
console.log("Merged Array: ",mergeArray);

const concatArray = fruit1.concat(fruit2,fruit3);
console.log("Concatenated Array: ",concatArray);


console.log("---------------------------------------------------");
console.log("---------------------------------------------------");