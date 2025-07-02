// Synchronous vs. Asynchronous

// Synchronous code runs sequentially, blocking the execution of subsequent code until the current operation completes.

// Asynchronous code allows other operations to run while waiting for a task to complete, improving performance and responsiveness.

// halt state 

// console.log('Task 1: Starting synchronous operation...');
// function chopVegetables()
// {
//     console.log('Task 2.. Chooping vegetables...');
//     let startime = new Date().getTime();
//     while(new Date().getTime() < startime + 5000)
//     {

//     }
//     console.log('Task 3: Vegetables chopped.');
    
    
// }


// chopVegetables();

// console.log('Task 4: Continuing with other operations...');

// Async - Asynchronous

// line 1
// line 2 5sec
// line 3

// callback and promise

// console.log('Task 1: Start Task..')

// setTimeout(() => {
//     console.log('Task 2: Setting the pause..')
// }, 5000);

// console.log('Task 3, should execute first');
// for(let i =0; i < 10; i++)
// {
//     console.log(i);
// }

// Callbacks

// function callBackNotification(msg)
// {
//     console.log(msg);
// }
// function greetUser(name, callback)
// {
//     console.log('Hello ' + name);
//     setTimeout(() => {
//         let message = 'Welcome ' + name + ' your greeting is done!'
//         callback(message);
//     } , 5000);
// }



// console.log('Task 1. Started');
// console.log('Lets Greet');

// greetUser('Masood' , callBackNotification);

// console.log('Continue the task while greeting!')

// Promise - (async - await)

//Pending: The initial state; the operation is still running.

//Fulfilled (Resolved): The operation completed successfully.

//Rejected: The operation failed.

// console.log('Starting Async Operation');
// function fetchData()
// {
//     console.log('Fetching Data...');
//     return new Promise((resolve, reject) => {
//         let success = true;
//         setTimeout(() => {
//             if(success == true)
//             {
//                 let data = [{ id: 1, name: 'Masood'},
//                     {}
//                 ];
//                 console.log('Data fetched..')
//                 resolve(data)
//             }
//             else
//             {
//                 console.log('Failed to fetch')
//                 reject('Error in the operation')
//             }
//         }, 3000)
//     })
// }

// console.log('Starting fetching Data...')

// fetchData()
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error)
// }).
// finally(() => {
//     console.log('Promise operation done');
// });

