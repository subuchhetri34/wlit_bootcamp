function fetchData(url,callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('An error occurred:',error));
}

function handleData(data) {
    for (let i = 0; i < data.length; i++) {
        const product = data[i];
        console.log("Product Name: " + product.name + ", Price: $" + (product.price / 100));
    }
}

fetchData("https://course-api.com/react-store-products", handleData);