// What is event in javascript

// javascript was basically create to reponse to the user events .


/*
// program 13

// Event bubling in javascript
// Individual listener consumes more browser memory

// The event object


const listItem = document.getElementsByTagName('li')
for(let i = 0 ; i <listItem.length;i++){

  divList.addEventListener('mouseover',() => {
      listItem[i].textContent = listItem[i].textContent.toUpperCase();
  });
  divList.addEventListener('mouseout',() => {
      listItem[i].textContent = listItem[i].textContent.toLowerCase();
 });

}

// The event object

document.addEventListener('click',(event) => {
  console.log(event.target);
});

Add the event parameter so that the event object is available inside the
listener
program 5 (The event object and bubbling concept in javascript)

Re-read the concept of the event object

divList.addEventListener('mouseover',(event) => {
    if(event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toUpperCase();
  }
});
divList.addEventListener('mouseout',(event) => {
    if(event.target.tagName == 'LI'){
    event.target.textContent = event.target.textContent.toLowerCase();
}
 });

*/

/*


index.html3
Responding to user action

What is event ?

click

dbclick

mouseup

mousedown

mousemove

mouseout

For mobile phones

touchstart

touch move

touch end
------> Button press
keydown
key up
key press


Function as paramter
Function are first class citizen in javascript
Function can be treated as any other data type
Data types in javascript are numbers , objects , arrays


*/


// program 1

/*


function saySomething(something){

  console.log(something)

}

saySomething("hello");



function Saying(func,something){
  func(something)
}
//
// Saying(saySomething,"Hello , I am there");



// Saying(function saySomething(something){
//
//   console.log(something)
//
// },"Hello , I am there");



// Saying((something) => {
//
//   console.log(something)
//
// },"Hello , I am there");


// we have now transformed a statement into an expression
// This is what called as anonymous function in javascript (function without name)


*/



// window.setTimeout to delay the execution time of your call back fucntion


// program 2


// window.setTimeout((something) => {
//
//   console.log(something)
//
// },3000,"Hello , I am there");



// Delaying execution with set timeout

/*   set timeout function in javascript with certain amount of time we need to call back function ,
hence it is know as call back function */



// program 3


// Three basic  fundamentals to make the website interactive



// Selecting the element on the webpage


// Manipulating the elements


// Listening for the user actions


// syntax

//EventTarget.addEventListener();


// target.addEventListener(type , listener [, options]);




// Listener for now is only  functions


// Only listening to the one element





const ulList = document.querySelector('#ulList');
const firstListItem = document.querySelector('li');
const inputItem = document.querySelector('[name = textBox]')
const additemButton = document.querySelector('[name = addButton]')
const removeitemButton = document.querySelector('[name = removeButton]')
const list = document.getElementsByTagName('li');

additemButton.addEventListener('click',() =>{
let ul = document.getElementsByTagName('ul')[0]
let li = document.createElement('li')
li.textContent = inputItem.value;
ul.appendChild(li)
inputItem.value = '';
});

removeitemButton.addEventListener('click',() =>{
let ul = document.getElementsByTagName('ul')[0];
let li = document.querySelector('li:last-child');
ul.removeChild(li);

});


// Adding listener to only one list item


// firstListItem.addEventListener('mouseover',() =>{
//   firstListItem.textContent = firstListItem.textContent.toUpperCase();
//
// });
//
// firstListItem.addEventListener('mouseout',() =>{
//   firstListItem.textContent = firstListItem.textContent.toLowerCase();
//
// });

// Looping through all the list items

// Individual Listener

// for(let i = 0 ; i < list.length ; i++){
//
//   list[i].addEventListener('mouseover',() =>{
//     list[i].textContent = list[i].textContent.toUpperCase();
//
//   });
//
//   list[i].addEventListener('mouseout',() =>{
//     list[i].textContent = list[i].textContent.toLowerCase();
//
//   });
//
//
// }

// Because we added the element later so the new element does not have any event Listener



// Calling the event on parent element is same as calling it on function and this is called as
// event bubbling in javascript (please refer to the green screen short)

// Event bubbling and delegation in javascript





// Individual listener item consumes more memory

// Implementing same to all listeners

// Capitalising all the elements under ul is the promblem


// for(let i = 0 ; i < list.length ; i++){
//
//   ulList.addEventListener('mouseover',() =>{
//     list[i].textContent = list[i].textContent.toUpperCase();
//
//   });
//
//   ulList.addEventListener('mouseout',() =>{
//     list[i].textContent = list[i].textContent.toLowerCase();
//
//   });
// }

// for(let i = 0 ; i < list.length ; i++){
//
//   ulList.addEventListener('mouseover',(event) =>{
//     event.target.textContent = event.target.textContent.toUpperCase();
//
//   });
//
//   ulList.addEventListener('mouseout',(event) =>{
//     event.target.textContent = event.target.textContent.toLowerCase();
//
//   });
//
//
// }

//We can remove for loop is we have applied listener on parent element Only



// event object in javascript

// Appyling event listener to parent element cause the to trigger events on all child elements

// We can find the target element using event object in javscript to find one particular events to be

//triggered






/*

  Adding  Listener to the document object


  document.addEventListener('click',()=>{
    console.log(event.target);
})





*/



  // ulList.addEventListener('mouseover',(event) =>{
  //   event.target.textContent = event.target.textContent.toUpperCase();
  //
  // });
  //
  // ulList.addEventListener('mouseout',(event) =>{
  //   event.target.textContent = event.target.textContent.toLowerCase();
  //
  // });





  ulList.addEventListener('mouseover',(event) => {
      if(event.target.tagName == 'LI'){
      event.target.textContent = event.target.textContent.toUpperCase();
    }
  });
  ulList.addEventListener('mouseout',(event) => {
      if(event.target.tagName == 'LI'){
      event.target.textContent = event.target.textContent.toLowerCase();
  }
   });
