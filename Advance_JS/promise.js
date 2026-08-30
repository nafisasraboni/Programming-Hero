// callbackHell er bodole eta use hoi asynchoronous task handle korar jonno

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 1 resolved")
//     },5000)
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise 2 resolved")
//     },2000)
// })

// p1.then((result)=>{
//     console.log(result)
// }).catch((e=>{
//     console.log(e)
// }))

// p2.then((result)=>{
//     console.log(result)
// }).catch((e=>{
//     console.log(e)
// }))


function orderFood(item){
    let promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let deliverd = Math.random()>0.8

            if(deliverd){
                resolve(`${item} delivered`)
            }else{
                reject(new Error(`${item} not delivered`))
            }
        },3000)
    })
    return promise;
}

orderFood("Burger").then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e.message)
}).finally(()=>{
    console.log("Food Order processing completed")
})