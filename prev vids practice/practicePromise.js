const cart = ["shirt", "pant", "protein", "books"];

//create order, proceed to payment, show order summary, update wallet balance

createOrder(cart)
.then((orderId)=>{
    return proceedToPayment(orderId);
})
.then(function(paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(orderSummary){
    return updateWallet(orderSummary);
})
.then((walletInfo)=>console.log(walletInfo))
.catch((error)=> console.log(error.message));

function createOrder(cart){
    return new Promise(function(resolve, reject){
        if(!validateCart(cart)){
            reject(new Error("Cart is not Valid!"))
        }else{
            resolve("Cart is Valid. Yaaaayyyy!!")
        }
    })
}

function validateCart(cart){
    return true;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        if(!isUserValid(orderId)){
            reject(new Error("Bad User!"))
        }else{
            console.log("i am inside proceedToPayment and i got 👉 : ",orderId)
            resolve("Good User, Payment success! yayyyy")
        }
    })
}

function isUserValid(orderId){
    return true;
}

function showOrderSummary(paymentInfo){
    return new Promise(function(resolve, reject){
        console.log("i am inside showOrderSummary and i got 👉 : ",paymentInfo)
        reject(new Error("It is not a goof order summay bye!"))
        resolve("It is a good order Summary Yayyy!")
    })
}

function updateWallet(orderSummary){
    return new Promise(function(resolve, reject){
        console.log("i am inside updateWallet and i got 👉 : ",orderSummary)
        resolve("I am updating the Wallet");
    })
}