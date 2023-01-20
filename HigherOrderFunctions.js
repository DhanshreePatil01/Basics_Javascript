/*Higher Order Functions--->

Higher order function is a function which accepts another function as parameter or returns a function
a function which takes another function as an argument or returns a function is known as a higher order function.
*/


//.filter() Method--The .filter() method executes a callback function on each element in an array.

console.log("filter() method")

//1st Ex of Filter
const numbers = [40, 55, 91, 10, 56];
const filteredArray = numbers.filter(n => {  
  return n%2==0;
});

console.log("Even No using Filter Method: ",filteredArray);

//2nd Ex Of filter
const array = [78,41,25,36,12];
const filter = array.filter(n => {
       return n<50;
});

console.log("Numbers less than 50 using filter method: ",filter);

console.log("-----------------------------------------------------------------------------------");

//.map() Method-->.map() method executes a callback function on each element in an array. 

console.log("map() method")

//1st Ex Map
const names =["Dhanshree","Poonam","Diksha","Mayuri"];

const notice = names.map(n => {
    return n+" Had Joined to company";
})
console.log(notice);

//2nd Ex Map
const students =["Mayuri","Pratiksha","anchal","Navya"];

const result = students.map(member => {
    return member+" Passed in Exams";
});
console.log(result);
console.log("-----------------------------------------------------------------------------------");

//.forEach() method -->.forEach() method executes a callback function on each of the elements in an array in order.

console.log("forEach() method")
const array1 = [5,10,15,20,25,30];
const sortEx = array1.forEach(n => {
    console.log(n);
})
sortEx
console.log("   ")

const array2 = [10,20,30,40,50,60];

array2.forEach(Number => {
    console.log(Number*2);
})
console.log("-----------------------------------------------------------------------------------");

/*.reduce() Method
The .reduce() method iterates through an array and returns a single value.*/

console.log("reduce() method")

//1st Reduce Ex
const arr = [1,2,3,4,5];

let check = arr.reduce((a,b) => {
    return a+b;
});
console.log(check);

//2nd Reduce Ex
let check1 = arr.reduce((a,b) => {
    return a*b;
})
console.log(check1);