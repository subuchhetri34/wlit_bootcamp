function fetchData(url,callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('An error occurred:',error));
}

function handleData(data){
    console.log("Recieved data:",data);
}

fetchData("https://course-api.com/react-store-products", handleData);