
// json - Java script object notations


// let jsonData = `
// [
//     {
//     "productName": "Laptop",
//     "price" : 5000.00,
//     "inStock" : true,
//     "features": ["lightweight" , "fast" , "Memory efficient"]
//     },
//      {
//     "productName": "Mobile",
//     "price" : 5000.00,
//     "inStock" : true,
//     "features": ["lightweight" , "fast" , "Memory efficient"]
//     },
//      {
//     "productName": "LED",
//     "price" : 5000.00,
//     "inStock" : true,
//     "features": ["lightweight" , "fast" , "Memory efficient"]
//     }
// ]`

// console.log(jsonData);

// let convertedList = JSON.parse(jsonData);

// console.log(convertedList);

// convertedList.forEach(element => {
//     console.log(element.productName)
// });

// let API_url = 'https://jsonplaceholder.typicode.com/todos';

// console.log('Started fetching tasks data...')

// fetch(API_url).
// then((data) => {
//     if(data.ok != true)
//     {

//     }
//     return data.json()
// }).
// then( data => {
//     console.log(data);

//     data.forEach(task => {
//         let li = document.createElement('li');
//         if(task.completed == true)
//         {
//               li.innerText = task.title + ' -- (Completed)'; 
//         }
//         else
//         {
//              li.innerText = task.title + ' -- (Incomplete)'; 
//         }
      
        
//         document.getElementById('tasks').appendChild(li);
//     });
// }).
// catch((error) => {
//     console.log(error)
// })

// console.log('Data Fetched...')

let apiURL = 'http://goweather.xyz/weather/';
async function getData()
{
    let cityValue = document.getElementById('fruit-name').value;

    await fetch(`${apiURL}/${cityValue}`).then((response) =>
    {
        return response.json();
    }).then(result => {
        console.log(result);
    })

    console.log(cityValue);
}


