// variables 
name = "Asif";
age =20;
console.log(name+"\n"+age);
console.log(`${name} is ${age} years old`);

/* data types in JS

var - global scope
let - block scope can be re-assigned
const - block scope, cannot be reassigned
*/
let occupation="student";
occupation="developer";
console.log(occupation);

const contry="India";
//country="USA";       // This will throw an error because const cannot be reassigned

{
  let name1="Fazal";
  name1="Ali"; // This will not throw an error because let can be reassigned within the block
  console.log(name1);
}
/*name1="Asif"; // This will throw an error because name1 is not defined outside the block
console.log(name1); // This will throw an error because name1 is not defined outside the block*/


let student ={
  name3 :"asif",
  age:20,
  group :"CSE"
}
console.log(student["group"]);
console.log(student.name3);


//looping 
for(let i=0;i<=10;i++){
  console.log(i);
}

let j=5;
while(j<10){
  console.log(j);
  j++;
}

let city="Ravulapalem";
for(let k of city){
  console.log(k);
}
for(let key in student){
  console.log(key);
  console.log(student[key]);
}

//functions
function add(a,b){
  return a+b;
}
console.log(add(5,8));

const greet=()=> console.log("Hello");            // Arrow Function
greet();