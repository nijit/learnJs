// const cart =["pants","jeans","shoes"];
//inversion of control, we are giving control of proceedToPayment to the hand of createOrderAPI, we are just sitting relax, we think that createOrderAPI will call after doing the things
// createOrderAPI(cart, function(orderId){
//     proceedToPayment(orderId);
// });

// const promise = createOrderAPI(cart);
//at the time of start it will be like promise{data: undefined} , after some time when createOrderAPI is done with its work it will be like promise{data :[]} it will filled with data automatically
//promise is nothing but a special object

//promise then will execute when the promise is filled with data. it will call only once, also in this case we have complete control with us, 
// we are not relying in createOrderAPI to call proceedToPayment. promise is giving us kind of trust, 
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

//fetch is api given by the browser, webapi to fetch resource from api
// const API = "https://jsonplaceholder.typicode.com/users";
// const users = fetch(API);
// console.log(users);
// users.then(function (data){
//     console.log(data.json())
// });//with this we removed the inversion of control problem
//promise consist of 1. Promise State 2. Promise result 
// state can be : pending, fulfilled and rejected
// promise is immutable, users can't be changed while doing some operations
//A Promise is an object representing the eventual completion or failure of an asynchronous operation.[MDN]


// createOrder(cartArray, function(orderId){
//     proceedToPayment(orderId, function(paymentId){
//         showOrderSummary(paymentId, function(summaryid){
//             updateWallet(summaryid);
//         })
//     })
// })
//Above is call back hell. below is replace with promise chaining
// createOrder(cartArray)
// .then((orderId)=>{ return proceedToPayment(orderId);}) //this is to show that return is required
// .then((paymentId)=>showOrderSummary(paymentId))
// .then((summaryid)=>updateWallet(summaryid)); //Code becomes lean and easy to maintain, read, understanding

//Produce and Consume promise
const cart = ["shoes", "pants", "kurta"];


//Case 1
console.log("case 1");
createOrder(cart)
.then(function (orderId) {
    // return proceedToPayment();
    console.log(orderId);
    return orderId;
})
.then(function (orderId) {
    return proceedToPayment(orderId); //we can attack then() after this also, but it will again create promise hell just like the callback hell
})
.then(function (paymentInfo) {
    console.log(paymentInfo);
})
.catch(err => console.log(err.message)) //This catch will handle all the exception on the top of chain
.then(function (){
    console.log("No Matter what happens i will be definitly called.");
})
//Case 2

// createOrder(cart)
// .then(function (orderId) {
//     // return proceedToPayment();
//     console.log(orderId);
//     return orderId;
// })
// .catch(err => console.log(err.message)) //This catch will handle all the exception on the top of chain, so below will execute even if the top chain are failed.
// .then(function (orderId) {
//     return proceedToPayment(orderId); //we can attack then() after this also, but it will again create promise hell just like the callback hell
// })
// .then(function (paymentInfo) {
//     console.log(paymentInfo);
// })


//producer
function createOrder(cart) {

    const pr = new Promise((resolve, reject) => {
        if (!validateCart(cart)) {
            reject(new Error("Cart is not valid"));
            
        }
        console.log("i am after reject");
        //logic for createorder
        const orderId = "1234";
        if (orderId) {
            setTimeout(() =>{
                console.log("i am inside setTimeout");
                resolve(orderId) //can't go to resolve if it is already rejected, reject/resolve is like a terminating state
            } , 5000);
        }
    });
    return pr;
}

function validateCart(cart) {
    return false;
}

function proceedToPayment(orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successful")
    });
}

//Once promise is reject or resolved it will remain in that state itself, it cannot goes to other state, even if it goes it will have no effect