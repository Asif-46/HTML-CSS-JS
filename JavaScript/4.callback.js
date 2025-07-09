/* asynchronous programming in JavaScript*/
console.log("one");
console.log("two");
setTimeout(() =>{
  console.log("hello");
}, 1000);
console.log("three");
console.log("four");

//2
function add(a,b,callback){
  callback(a,b);
}
add(3,4,(a,b)=>{
  console.log(a+b);
})

//3
function print(){
  console.log("hello");
}
setTimeout(print,3000);

//4 
function getdata(id,callback){
  setTimeout(()=>{
    console.log("data",id);
  },3000);
  if(callback){
    callback();
  }
}
getdata(453);

getdata(123,()=>{               //callback hell -> difficult to understand nested callbacks
  getdata(456);                 //    async-await >> promises> callback
});