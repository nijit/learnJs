/**
What is async?
What is await?
How async await works behind the scenes?
Example of using async/await?
Error Handling
Interviews
Async await vs Promise.then/ .catch
**/

//async function will always returns a promise
//suppose you are not returning a promise then this funciton will wrap your returned value inside a Promise->Promise.Result then return 
//ultimately it will return a promise
// async function getData(){
// return "nijitCode";
// //equivalent new Promise((resolve, reject)=>{resolve("nijitCode")}); 
// //equivalent return Promise.resolve("nijitCode");
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(res=>console.log(res)); //so Then function will automatically take the PromiseResult from the Promises

//async and await combo used to handle promises
//How we handled promises before async-await

// const promise = new Promise((resolve, reject)=>{
//     resolve("i am resolved")
// })

// function test(){
//     promise.then(result=>{
//         console.log(result)
//     })
// }
// test() //promises are asynchronous - so the the result of this function might print after priniting the below console.log()

// //How we handled with async-await
// console.log("this is for async await")
// console.log("hey test me")
// const promiseForAsyncAwait = Promise.resolve("I am resolved for async-await");

// async function testAsyncAwait(){
//     const p = await promiseForAsyncAwait; //it will wait until the promise is settled , await can be used inside async function only
//     //instead of doing promiseForAsyncAwait.then  you will do await promiseForAsyncAwait
//     console.log(p)
// }
// testAsyncAwait()

// console.log("i am after async await")

// ==========================
// DIVE DEEP INTO ASYNC AWAIT
// ==========================

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("i am resolved p1")
//     },10000);
// })

// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("i am resolved p2")
//     },5000);
// })

// async function handlePromise(){
//     const val = await p;
//     console.log(await p);
//     console.log(await p2);
// }
// handlePromise();
//NOTE: all the promises will be registered asynchronously -> so at once all will be done
// async function getData(){
//     console.log("Start 1");
//     try{
//         console.log(await p1);
//     }catch(err){
//         console.log(err)
//     }
//     // p.then(res=>console.log(res));   //this is the difference between async await and normal promise then. when you use then JS engine will register that promise and move on the next line, 
//     //but when you use await JS engine will wait till the promise is settled
//     //JS engine will  wait till the promise to be resolved
//     console.log("Start 2 ");
//     console.log(await p2);
// }
// getData();
// console.log("i am here because p1 is taking 10 second , i want to come to callstack and do my task in the meanwhile")

//Try to test by making p1 less time and p2 more time, also vice-versa , so it is like js engine appears to wait but it won't wait 🤣
//so what is happening? initially in callstack getData() will be there, then it will start executing line by line bcz js is synchnous single threded lang
//so when inside getData() js engine encounter a await it will suspend getData() from call start until await p1 is settled


//Case p1= 10sec , p2=5sec : in this case first it will wait till p1 completed then it will go to the next line, by the time it reaches to p2 -> p2 will be already resolved because it is taking less time.
//it means in the memory alocation phase of execution context it already registered the promises.

//while encounter await method will be suspended from callstart so that the main thread won't get blocked and other method can come and do his job

// so await is suspending the function execution on that line , behind the scenes js engine is taking care the line number, which function all these things



// ===================
// REAL WORLD EXAMPLES
// ===================

const API_URL = "https://apdi.github.com/users/nijit";

async function realWorld(){
    //Try catch we can use to handle error
    // try{
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    // }catch(err){
    //     console.log(err.stack)
    // }
    
    //normally 
    // fetch(API_URL).then(res=> res.json()).then(res=>console.log("kk",res));


    // console.log(data); // it is a promise
    // console.log("i am json",(await data).json().then(res=>console.log(res)));
    // fetch() => it will give a response=> Response.json() [this json is also a promise] => jsonValue
}

//Fetch will always return a promise
realWorld().catch((err)=> console.log(err))  //we can do error handling like this also because async always returns promise
//just for testing
// function hi(){
//     return "hi"
// }
// let test = fetch("hi.txt");
// console.log(test)