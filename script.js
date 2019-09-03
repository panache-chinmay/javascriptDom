/*
  Javascript lets you create interactive web pages that lets you deal with the
  user interaction


  Interactive pages with javascript

  1)Selecting the element

  2)Manipulating the element

  3) Listening to user actions

*/



/*

  some are basically the property of global environment object which is called as window.


  1)alert("Hello World");

  2)location.href

  3)(type window and search for the alert() and location object).

  4) All these will be basically the part of global  window object.

  5) window.alert(); // same function as written obove

  6)document is basically another property of window

  (document basically refers to the current page).


 */



 /*

        document.getElementById('newid').style.color ='purple';

        document.getElementById('newid').style.color = 'yellow';

        document.getElementById('newid').style.backgroundColor = 'yellow';

        document.getElementById('newid').style.backgroundColor = 'orange';

 */


/*

    What is Document ?

          Document is  a global object representing the html content of a web page

          DOM is representation of html elements which javascript can use .

          DOM is basically the live entity , changes that javascript made to the DOM ,changes the whole entity

         DOM represents the webpage in tree like struture (please refer to screen short)


*/



/*
      Recap:-


          Global scope - window object

          Document

          Document object model

          -------------------------------------->


          Select an element

          Read or change elements

          Respond to user events

          Add Event Listener is a fucntion which tells the element to listen to the browser events.

          (A field can basically respond to its content with user actions , please refer to screen short)


          ----------------------------------------->

*/



/*

        GETTING HANDLE WITH DOM


        // program One


        (Change the  color of heading text to red user click)


        const myHeading = document.getElementById('red'); // returns the element if present

        console.log(myHeading)

        myHeading.addEventListener('click', () => myHeading.style.color = 'red');


        // Second parameter is the call back function

        // document is a global variable and get element by Id is the method of global object document


        (Selecting the element basically makes it avaiable for us to do something with it)

    */


    /*

        // Program Two

        (Changing the color of heading with click on button)

        const myHeading = document.getElementById('red'); // returns the element if present

        const myButton = document.getElementById('myButton');

        console.log(myButton)

        myButton.addEventListener('click', () => myHeading.style.color = 'red');

        */

        /*


        // Program 3

        (Changing the color of heading with respect the color entered in checkbox)


        // We can access the value of any element with .value

        const myHeading = document.getElementById('myHeadings'); // returns the element if present

        const myButton = document.getElementById('myButton');

       const myText = document.getElementById('myTextInput');

       console.log(myButton)

       myButton.addEventListener('click', () => myHeading.style.color = myText.value );


       (use console to demonstrate , how the value works )

       */

       /*


       // Program 4 (Loop over the list of elements and turn everthing in list to color);

       (For the programme statement , comment button and input text field and add html list)


       //myList[2].style.color = 'purple'

       const mylist = document.getElementsByTagName('li');

       for(let i = 0 ;i < mylist.length ;i++ ){

       mylist[i].style.color = "green";

     }
     */

     /*

     //Program 5 (Selecting element with class attribute)

     (placing a css style to element with class like the error warning shown before)

     (update the html with class attribute to few list elements)

     // Selecting the element with class name

     const errorNotPurple = document.getElementsByClassName('not-color-purple');

     for(let i = 0 ; i < errorNotPurple.length ;i++ ){

        errorNotPurple[i].style.color = "red";
 }

 */

 // Program 6

 /*





 document.querySelector(); // returns only the first element with the selector
 document.querySelectorAll(); // returns all the elements that matches the selector

 // first try in console

 // selecting the element with tagName

 document.querySelector('li');
 document.querySelectorAll('li')

 // selecting the element with class and id
 document.querySelector('#myHeadings');
 document.querySelectorAll('.not-color-purple');

 // selecting the element with attribute

document.querySelector('[title = label]');




const idElement = document.querySelector('#myHeadings')
console.log(idElement)
idElement.style.color = "red";

const classElement = document.querySelectorAll('.not-color-purple')
console.log(classElement)
for(let i = 0 ; i < classElement.length ; i++){
  classElement[i].style.color = 'green';
}

const even = document.querySelectorAll('li:nth-child(even)');
for(let i = 0 ; i < even.length ; i++){
    even[i].style.backgroundColor ="yellow";
}

const odd = document.querySelectorAll('li:nth-child(odd)');
for(let i = 0 ; i < odd.length ; i++){
    odd[i].style.backgroundColor ="orange";
}


// We have used css psuedo classes.

*/


// program 7


/*


    Theory

    Basically you can decide the selector based on the html you are going to work with

    Above mentioned selectors have  good browser support

    MDN(to look for more details)

    caniuse.com



*/

 //MAKING CHANGES TO THE DOM
//(index2.html)


 // program 8



 /*

How to read and change text of element using javascript.

Making changes to the DOM

/*


  Getting and Setting text with textContent and innerHTML

  Element.textContent
  Element.innerHTML

  As we can see from the example above the innerText property sets or returns the text content as plain text of the specified node,
  and all its descendants whereas the innerHTML property gets and sets the plain text or HTML contents in the elements.
  Unlike innerText, inner HTML lets you work with HTML rich text and doesn’t automatically encode and decode text.

  textContent to either read or set value of HTML element

  The other way of altering element is inner HTMl

  console.log("Hello");

  const myHeading = document.querySelector('h1');

  console.log(myHeading.textContent)

  changing the content of HTML element with textContent

  myHeading.textContent = "New heading inserted"


  Adding input text and button and giving each the same class

  */

  /*


const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

 button.addEventListener('click',() =>{
   p.textContent = input.value +":"
 })

const myHeading = document.getElementById("myHeading");
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');

button.addEventListener('click',() =>{
    p.innerHTML = input.value +":"
  })

console.log(document.querySelector('ul').innerHTML)

//innerHTML gives the complete UI element




 */



 /*
    program 9


     const myHeading = document.getElementById("myHeading");
     const input = document.querySelector('input');
     const p = document.querySelector('p.description');
     const button = document.querySelector('button');
     const list = document.querySelector('ul');

     button.addEventListener('click',() =>{
        list.innerHTML = "<li>New list Implemented </li><li>New list Implemented</li><li>New list Implemented  </li>"
  });

  console.log(document.querySelector('ul').innerHTML)


 */


 /*

      program 10

      // Changing the element attribute

      // tagName.attributeName ---> gives you the value

      //tagName.attribute = 'newVaule' ---> setting the new value

      //Element.className



       const myHeading = document.getElementById("myHeading");
       const input = document.querySelector('input');
       const p = document.querySelector('p.description');
       const button = document.querySelector('button');
       const list = document.querySelector('ul');

        button.addEventListener('click',() =>{
          list.innerHTML = "<li>New list Implemented</li><li>New list Implemented</li>"
        })

       p.title = "New description added"
      This is not recommended


 */




 // program 11



 /*


         //Styling elements


        //Element.style.color

        //Style is itself is a object

        //Element.style to view all the styles (all are inline css styles)

        //Element.style.attribute ---> gives you value

        const myToggleButton = document.getElementById('toggleButton');
        const divList = document.getElementById('list')
        const myHeading = document.getElementById("myHeading");
        const input = document.querySelector('input');
        const p = document.querySelector('p.description');
        const button = document.querySelector('button');
        const list = document.querySelector('ul');

        myToggleButton.addEventListener('click',() =>{
          if(divList.style.display =='none'){
            divList.style.display = 'block'
            myToggleButton.textContent = 'Hide Element'
          }
          else{
            divList.style.display = 'none';
            myToggleButton.textContent = 'ShowElement'
          }
        })
        button.addEventListener('click',() =>{
          list.innerHTML = "<li>New list Implemented  </li>"
        })

        button also refers to first button which is togglebutton so
        both the events are getting called


 */






 // Program 12


 /*


 //program 5 and 6 and program 7
// Creating the new DOM elements

// document.createElement('elementname')

// creating element will not display the element to DOM

// Removing the elements from the page

// Appending nodes

// Node belongs to DOM
//Elements are plain HTML

const myToggleButton = document.getElementById('toggleButton');
const divList = document.getElementById('list')
const myHeading = document.getElementById("myHeading");
const input = document.querySelector('input');
const p = document.querySelector('p.description');
const button = document.querySelector('button');
const list = document.querySelector('ul');
const inputItem = document.querySelector('input.additem')
const additemButton = document.querySelector('button.additem')
const removeitemButton = document.querySelector('button.removeitem')

myToggleButton.addEventListener('click',() =>{
if(divList.style.display =='none'){
 divList.style.display = 'block'
 myToggleButton.textContent = 'Hide Element'
}
else{
 divList.style.display = 'none';
 myToggleButton.textContent = 'ShowElement'
}
})
button.addEventListener('click',() =>{
list.innerHTML = "<li>New list Implemented</li>"
})

additemButton.addEventListener('click',() =>{
let ul = document.getElementsByTagName('ul')[0]
let li = document.createElement('li')
li.textContent = inputItem.value;
ul.appendChild(li)
inputItem.value = '';

// Auto clearing the input
})

// additemButton.addEventListener('click',() =>{
//   let ul = document.getElementsByTagName('ul')[0]
//   let li = document.createElement('li')
//   li.textContent = inputItem.value;
//   ul.appendChild(li)
//   inputItem.value = ''
//
//   // Auto clearing the input
// })
//

removeitemButton.addEventListener('click',() =>{
let ul = document.getElementsByTagName('ul')[0];
let li = document.querySelector('li:last-child')
ul.removeChild(li)

})























 */
