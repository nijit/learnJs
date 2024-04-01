//we want to print something after 5 sec

// console.log("Hi nijit");

// function mid(){
//     console.log("in the midway");
// }
// setTimeout(mid,5000);
// setTimeout(()=>console.log("easy"),5000);

// console.log("Bye Nijit");

//Callback Hell , pyramid of doom
// when click on order 1. create order 2. proceed to payment 3. show order summary 4. update wallet
const cart = ["phone","shirt","pant","kurta"];
//callback let us do asynchonous programming, asynchronous programming is possible becasue of callbacks
api.createOrder(cart,function(){
        api.proceedToPayment(function(){
                api.showOrderSummary(function(){
                        api.updateWallet()
                    })
            })
    });
//code is growing horiontally instead of vertically, this is known as callback hell, this is know as pyramid of doom also
// if we see we are giving control of proceedToPayment to the createOrder api, this is very risky because we don't know how that was wrtten
// it is know as inversion of control we are giving control of 1 api to another api
// proceedtoPayment might call twice we don't know so that's very very risky



