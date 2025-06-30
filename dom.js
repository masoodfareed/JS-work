// DOM - Document Object Model
// The DOM is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programming languages to manipulate the content, structure, and style of web pages.



// console.log(document.getElementsByTagName('h1'));

// document.getElementById('heading1').innerText = 'Hello, World!';

// let p = document.createElement('p');
// p.innerText = 'This is a new paragraph added to the document.';
// p.style.color = 'red';


// document.body.appendChild(p);

// function displayMessage()
// {
//     // alert('This is a message from the displayMessage function!');
//     p.innerText = 'This paragraph has been updated by the displayMessage function.';
// }

// let count = 0;
// function countMe()
// {
//     count++;
//     console.log('Count is now: ' + count);
//     p.innerText = 'Count is now: ' + count;
// }

// let h1 = document.getElementById('heading1');
// h1.innerText = 'Hello, World!';
// h1.style.color = 'blue';

// let counterH1 = document.getElementById('counter');
// counterH1.innerText = 'Counter: 0';


// let count = 0;
// let counterH1 = document.getElementById('counter');
// function add()
// {
//     count++;
//     counterH1.innerHTML = '<i> Counter: ' + count + '</i>';
//     counterH1.style.color = 'green';
//     counterH1.style.border = '2px solid green';
//     counterH1.style.backgroundColor = 'lightgreen';
//     counterH1.style.marginTop = '200px'
// }

// function subtract()
// {
//      count--;
//      counterH1.innerHTML = '<i> Counter: ' + count + '</i>';
//      counterH1.style.color = 'red';
//      counterH1.style.border = '2px solid red';
//      counterH1.style.backgroundColor = 'lightcoral';
    
// }

function addItem()
{
   let itemBoxElement = document.getElementById('item-box');
   console.log(itemBoxElement.value);

   
   document.getElementById('item').innerHTML += itemBoxElement.value + '<br>';
}



