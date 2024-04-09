const p1 = new Promise((resolve, reject )=> {
    setTimeout(()=>{
        resolve("p1 resolved")
        // reject("p1 rejected")
    },3000);
})

const p2 = new Promise((resolve, reject )=> {
    setTimeout(()=>{
        // resolve("p2 resolved")
        reject("p2 rejected")
    },1000);
})

const p3 = new Promise((resolve, reject )=> {
    setTimeout(()=>{
        resolve("p3 resolved")
        // reject("p3 rejected")
    },2000);
})

const promises = [p1,p2,p3];
// Promise.all(promises)
// .then((res)=> console.log(res))
// .catch(e=>console.error(e)); //if success go to next , 2nd one success go next , all success return the array of success results
// if failed in any of the promises return that error and dont case about the rest

// Promise.allSettled(promises)
// .then((res)=> console.log(res))
// .catch(e=>console.error(e));
// i will return array of result even if some of them failed or success, or all failed/success  - i am kind person so i will return everything

// Promise.race(promises)
// .then((res)=> console.log(res))
// .catch(e=>console.error(e));
// its a raceof promises , whoever settled (settled means resolved or rejected, pending doesn't mean settled) that will return , others are losers so we don't care , we only care about the winner


// Promise.any(promises)
// .then((res)=> console.log(res))
// .catch(e=>console.error(e.errors));
// i will try to find the first success among the all promises, if i get anyone success i will return him , on the way while i am searching for the first success if i got some failed i will skip them
// and i will keep on finding the first success even if i got some rejected. Worst case if i get all are rejected among the promises i will return a Aggregated Error : its a list of errors