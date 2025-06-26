// let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Peach"];

// while(true)
// {
//     let fruiteToFind = prompt("Enter a fruit to find in the list (or type 'exit' to stop):");
//     if(fruiteToFind == "exit")
//     {
//         break;
//     }
//     else
//     {
//         let found = true;
//         for(let iterator = 0; iterator < fruits.length; iterator++){
//             if(fruits[iterator].toLowerCase() == fruiteToFind.toLowerCase()) // Case insensitive search
//             {   
//                 found = true;
//                 break;
//             }
//             else
//             {
//                 found = false;
//             }
//         }
//         if(found == true)
//         {
//             console.log(fruiteToFind + " is found in the list.");
//         }
//         else
//         {
//             console.log(fruiteToFind + " is not found in the list.");
//         }
//     }
// }

// let number = [12, 556 , 45, 67, 89, 23, 45, 67, 89, 12, 34, 56, 78, 90];

// function sumOfArray(numbers)
// {
//     let sum = 0;

//     for(let i = 0; i < numbers.length; i++)
//     {
//         sum = sum + numbers[i]; // 0 + number[0] , 0 + 12 sum -> 12 , i = 1, sum + number[1]
//     }
//     console.log("The sum of all numbers is: " + sum);

// }

// sumOfArray([23,342,123,45,12,5,12,4,4]);
// sumOfArray([12, 556 , 45, 67, 89, 23, 45, 67, 89, 12, 34, 56, 78, 90]);

// function averageOfArray(numbers)
// {
//     let sum = 0;
//     let average = 0;
//     for(let i = 0; i < numbers.length; i++)
//     {
//         sum = sum + numbers[i]; 
//     }
//     average = sum / numbers.length; 
//     console.log("The average of all numbers is: " + average);
// }

// averageOfArray([23,342,123,45,12,5,12,4,4]);

// function maxOfArray(numbers)
// {
//     let max = numbers[0];
//     for(let i = 0; i < numbers.length; i++)
//     {
//         if(numbers[i] > max)
//         {
//             max = numbers[i]; 
//         }
//     }
//     console.log("The maximum number in the array is: " + max);
// }

// maxOfArray([2,8,1, 1000,5, 9, 3, 7, 4, 6, 400, 20, 800]);



// const a = 5;
// const name = "Masood";



// console.log(a);

// a = 10;

// arrow function syntax
const addition = (num1, num2) => {
    return num1 + num2;
}



function subtraction(num1, num2) 
{
    return num1 - num2;
}

const multiply = (num1, num2) => num1 * num2;

console.log(multiply(10, 20)); // returns 200



//console.log(addition(10, 20)); // returns 30






