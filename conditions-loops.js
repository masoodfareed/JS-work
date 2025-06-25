

// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");

// console.log("Username: " + username);
// console.log("Password: " + password);

// if(username === "admin") {
//     if(password === "1234") {
//         console.log("Welcome to the system!");
//     }
//     else {
//         console.log("Your password is not correct.");
//     }
    
// }
// else {

//     console.log("Your username is not correct.");
// }

// let number = "10";

// if(number == 10)
// {
//     console.log("The number is equal to 10 using == operator.");
// }
// else {
//     console.log("The number is not equal to 10 using == operator.");
// }

// let input = prompt("Enter a number: ");
// console.log(parseInt(input)); // Converts the input to an number

// let firstNumber = prompt("Enter the first number: "); // 120
// let secondNumber = prompt("Enter the second number: "); // 300
// let thirdNumber = prompt("Enter the third number: "); // 80

// if(firstNumber > secondNumber && firstNumber > thirdNumber)
// {
//     console.log(firstNumber);
//     if(secondNumber > thirdNumber){
//         console.log(secondNumber);
//         console.log(thirdNumber);
//     }
//     else {
//         console.log(thirdNumber);
//         console.log(secondNumber);
//     }
// }
// else if(secondNumber > firstNumber && secondNumber > thirdNumber)
// {
//     console.log(secondNumber);
//     if(firstNumber > thirdNumber){
//         console.log(firstNumber);
//         console.log(thirdNumber);
//     }
//     else {
//         console.log(thirdNumber);
//         console.log(firstNumber);
//     }
// }
// else
// {
//     console.log(thirdNumber);
//     if(firstNumber > secondNumber){
//         console.log(firstNumber);
//          console.log(secondNumber);
//     }
//     else {
//         console.log(secondNumber);
//         console.log(firstNumber);
//     }

// }

// Loops - repition of code until a condition is met

// for loop, while loop, do-while loop, foreach loop

// for(let iterator = 0; iterator <= 20; iterator+=2) // iterator = iterator + 1
// {
//     console.log("Masood Fareed" + iterator);
    

// }

// let input = parseInt(prompt("Enter a number: "));
// for(let iterator = 1; iterator <= 100; iterator++) // i = -1
// {
//     if(iterator % input == 0)
//     {
//         console.log(iterator + " is divisible by " + input);
//     }
//     else{
//         console.log(iterator + "is not divisible by " + input);
//     }
// }

// while loop

// let iterator = 0; // initialization

// while(iterator != 10)
// {
//     console.log("Masood Fareed " + iterator);
//     iterator++; // increment
// }

// while(true) // make a menu that runs until the user decides to exit
// {
//     let input = parseInt(prompt("Enter a number: "));
//     if(input == 0)
//     {
//         console.log("You entered zero, exiting the loop.");
//         break; // exit the loop
//     }
//     else if(input < 0)
//     {
//         console.log("You entered a negative number, exiting the loop.");
//         break; // exit the loop
//     }
//     else
//     {
//         console.log("You entered a positive number: " + input);
//     }
// }

// do-while loop
// let iterator = 0; // initialization
// do{
//     console.log("Masood Fareed " + iterator);
//     iterator++; // increment
// }
// while(iterator == 10); // condition



// functions - reusable blocks of code that can be called multiple times

// function greeting(name, age) {
//     console.log("Hello " + name + ", welcome to the system!");
//     console.log("Your age is: " + age);

// }

// greeting("Masood Fareed", 7672);
// greeting("Jean" , 25)
// greeting("John Doe");
// greeting("Steph")


// function addition(num1 , num2)
// {
//     console.log("The addition is: " + (num1 + num2));
// }
// function subtraction(num1 , num2)
// {
//     console.log("The subtraction is: " + (num1 - num2));
// }
// function multiplication(num1 , num2)
// {
//     console.log("The multiplication is: " + (num1 * num2));
// }
// function division(num1 , num2)
// {
//     console.log("The division is: " + (num1 / num2));
// }

// let a = 10;
// let b = 20;

// addition(a, b);
// subtraction(20, 10);
// multiplication(10, 20);
// division(20, 10);



// function print(message)
// {
//     console.log(message);
// }

// function add(a, b, c)
// {
//     // This function adds three numbers and returns the result
//     return a + b + c;
// }

// let answer = add(10, 20, 30); // returns 60
// print("The answer is: " + answer);

// console.log(add(2,2,2));

// Array - a collection of elements
let fruites = ["Apple", "Banana", "Orange", "Mango", "Grapes", "pineapple" , "Peach"];
let numbers = [1, 2, 3, 4, 5];

// //console.log(fruites); 
// console.log(fruites[0]);
// console.log(fruites[1]);
// console.log(fruites[2]);
// console.log(fruites[3]);
// console.log(fruites[4]);

for(let iterator = 0; iterator < 7; iterator++)
{
    console.log(fruites[iterator]);
}

let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes", "Pineapple", "Peach"];
for(let i = 6; i >= 0; i--)
{
    console.log(fruits[i]);
}



