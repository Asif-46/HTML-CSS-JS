/* promises have 3 states : 1.pending 2.fulfilled 3.rejected */

// 1.creating a promise
let promise = new Promise((resolve,reject)=>{
  console.log("I am a Promise");
  resolve("promise is resolved");
  //reject("promise is rejected");
})
//2.
function getdata(id){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data",id);
      resolve("promise is resolved");
    }, 3000);
  })
}

// Using Promises  .then((res)=>{}) and .catch((err)=>{})
  const p = ()=>{
    return new Promise((resolve,reject)=>{
      console.log("I am Promise 2");
      resolve("promise 2 is resolved");
    })
  }
  let pr =p();
  pr.then((res)=>{
    console.log("Promise 2 is resolved successfully");
  })
  
  // chaining of promises
  function get1(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data1");
        resolve("Success");
      },3000);
    })
  }
   function get2(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        console.log("data2");
        resolve("Success");
      },3000);
    })
  }

  /*console.log("loading data1");
  let p1 =get1();
  p1.then((res)=>{
      console.log("loading data2");
      let p2 = get2();
      p2.then((res)=>{
      });
  });*/

  get1().then((res)=>{
    return get2()
    .then((res)=>{
      console.log(res)
    })
  })

  // async await = to return a promise compulsoryly

