//Syntax I wanted to test so i have written the below code

// console.log("God Js");

// new Promise((resolve, reject)=> {
    
//     setTimeout(()=>reject(new Error("i am rejected")),5000)

//     setTimeout(()=> resolve("Hi nijit"), 5000)
    
   
// }).then((res)=>console.log(res))
// .catch(err=>console.log(err.message));


//Promise.all api demo is below coded
// const p1= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P1 is success"), 3000);
//     // setTimeout(()=> reject(new Error("P1 is Failed")), 3000);
// })
// const p2= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P2 is success"), 1000);
//     // setTimeout(()=> reject(new Error("P2 is failed")), 1000);
// })
// const p3= new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("P3 is success"), 2000);
//     setTimeout(()=> reject(new Error("P3 is failed")), 2000);
// })
// //check for the first Failed one, if got something it will return, if all are success it will return all with success, he will be continuing if he is getting success
// Promise.all([p1, p2, p3])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>console.error(err.message));
//You should always catch the errors before browser caught it, if you don't write this catch then it will be shown as Uncaught Error in your browser[index.js:23 Uncaught (in promise) Error: P3 is failed]
//PROMISE ALL RETURNS THE RESOLVED RESULTS OR THE FIRST REJECTED RESULT == returns the values

//=======================================
//Promise.allSettled api demo below code
//=======================================

// const p1= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P1 is success"), 3000);
//     // setTimeout(()=> reject(new Error("P1 is Failed")), 3000);
// })
// const p2= new Promise((resolve, reject)=>{
//     // setTimeout(()=> resolve("P2 is success"), 1000);
//     setTimeout(()=> reject(new Error("P2 is failed")), 1000);
// })
// const p3= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P3 is success"), 2000);
//     // setTimeout(()=> reject(new Error("P3 is failed")), 2000);
// })
// const promises = []
// promises.push(p1, p2, p3)
// Promise.allSettled(promises)
// .then((res)=>console.log(res))
// .catch(e=>console.log(e))
//all settled = returns the objects consist of {status: , value:} 👈 this is for fullfiled format, {status: , reason: } 👈 this for rejected format
//allSettled will always wait for the all the promises to get settled with rejected/resolve. 


//=======================================
//Promise.race api demo below code
//=======================================

// const p1= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P1 is success"), 3000);
//     // setTimeout(()=> reject(new Error("P1 is Failed")), 3000);
// })
// const p2= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P2 is success"), 1000);
//     // setTimeout(()=> reject(new Error("P2 is failed")), 1000);
// })
// const p3= new Promise((resolve, reject)=>{
//     setTimeout(()=> resolve("P3 is success"), 2000);
//     // setTimeout(()=> reject(new Error("P3 is failed")), 2000);
// })
// const promises = [];
// promises.push(p1,p2,p3)
// Promise.race(promises)
// .then((res)=>console.log(res))
// .catch((err)=>{
//     console.log(err.message)
// })
//race will return whoever settled first. here p2 is taking 1sec, so if p1 fails it will return only p1, if p1 success it will only return p1
//Settled means got the result = it can be resolve or reject
//Synonyms: resolve (success, fulfilled) ,  reject(failure, rejected)

//=======================================
//Promise.any api demo below code
//=======================================

const p1= new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("P1 is success"), 3000);
    setTimeout(()=> reject(new Error("P1 is Failed")), 3000);
})
const p2= new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("P2 is success"), 1000);
    setTimeout(()=> reject(new Error("P2 is failed")), 1000);
})
const p3= new Promise((resolve, reject)=>{
    // setTimeout(()=> resolve("P3 is success"), 2000);
    setTimeout(()=> reject(new Error("P3 is failed")), 2000);
})
Promise.any([p1,p2,p3])
.then((res)=>console.log(res))
.catch((err)=> {
    console.log(err) // it will show the aggregate error but where will we get the array of errors which consist all the errors
    console.log(err.errors)
})
//any will try to find the first resolved/success/fulfilled promise and once he finds that he will return it right away. what if all are rejected then he will throw an aggregate error[AggregateError: All promises were rejected]
//any will ignore the rejected promises until he find out the first resolved/successful/fulfilled promises