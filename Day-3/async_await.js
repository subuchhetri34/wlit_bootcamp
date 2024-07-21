// const DEMO_URL = "https://course-api.com/react-store-products"

// const fetchAPI = async function(){
//     const res = await fetch(DEMO_URL)
//     const data = await res.json()
//     console.log(data)
// }

// fetchAPI()
// console.log("Hello")


// using error handling
const DEMO_URL = "https://course-api.com/react-store-products"

const fetchAPI = async function(){
    try{
        const res = await fetch(DEMO_URL)
        const data = await res.json()
        console.log(data)
    }
    catch(error){
        console.log("Error",error)
    }
    
}

fetchAPI()
console.log("Hello")