console.log("----------------------Array Of Objects-------------------------")
const person = [
    {
        name : "Dhanshree Patil",
        age : 22,
        result : "pass"
    },
    {
        name : "Mayuri Kasle",
        age : 25,
        result :"fail"
    },
    {
        name : "Diksha Landge",
        age : 30,
        result :"pass"
    }
];

console.log("Printing person array of object: ",person);

let person1 = person[0];
console.log("Printing person at index 1 from an person array of object: ");
console.log(person1);

let size =person.length;
console.log("length of an array: ",size);

let personname = person[0].name;
console.log("Printing person name from an person array of object: ",personname);
console.log("------------------------------------------------------------")

console.log("----------------------Nested Array-------------------------")
const nestedArray =[10,20,30,40,[50,60,70,80]];
console.log("printing Nested Array: ",nestedArray);

console.log("index 0 element: ",nestedArray[0]);
console.log("index 1 element: ",nestedArray[1]);
console.log("Nested Array index 0 element: ",nestedArray[4][0]);

//Printing nested array
for(let k=0;k<nestedArray.length;k++)
{
    console.log(nestedArray[k]);
}

console.log("------------------------------------------------------------")
