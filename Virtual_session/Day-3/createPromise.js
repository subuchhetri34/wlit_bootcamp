const promise = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Successful")
        reject("Rejected")
    },2000)
    })

    promise.then((response)=>{
        console.log("response", response)
    }).catch((error)=>{
        console.log("error", error)
    })
    
    console.log('hello')

