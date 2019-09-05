//  Traversing through the DOM
/*
  Using parent element to traverse through the DOM






*/



const ulList = document.querySelector('#ulList');
const listy = ulList.children;
const firstListItem = document.querySelector('li');
const inputItem = document.querySelector('[name = textBox]')
const additemButton = document.querySelector('[name = addButton]')
const removeitemButton = document.querySelector('[name = removeButton]')
const list = document.getElementsByTagName('li');

let listl = ulList.children;

let firstlistItem = ulList.firstElementChild.style.color = "red";
let lastlistIteam = ulList.lastElementChild.style.color = "blue";


for(var i = 0 ; i < listl.length ; i++ ){
    addbuttonofListitems(listl[i]);
}

additemButton.addEventListener('click',() =>{
let ul = document.getElementsByTagName('ul')[0]
let li = document.createElement('li')
li.textContent = inputItem.value;
addbuttonofListitems(li);
ul.appendChild(li)
inputItem.value = '';
});

ulList.addEventListener('click',(event) => {
    if(event.target.tagName ==='BUTTON'){
      if(event.target.className === 'remove'){
        let li = event.target.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li);
      }
      if(event.target.className === 'up'){
        let li = event.target.parentNode;
        let preLi = li.previousElementSibling;
        let ul = li.parentNode;
        if(preLi){
          ul.insertBefore(li,preLi)
        }
      }
      if(event.target.className === 'down') {
        let li = event.target.parentNode;
        let nextli = li.nextElementSibling;
        let ul = li.parentNode;
          if(nextli){
              ul.insertBefore(nextli,li);
            }
        }

  }
});


// // function will get called and with li as function parameter
function addbuttonofListitems(li){
// we need to create up down and remove button for all li elements
// mention code here and call the function
let up = document.createElement('button');
up.className = 'up';
up.textContent = 'Up'
li.appendChild(up); // we are adding button to li element so appening

let down = document.createElement('button');
down.className = 'down';
down.textContent = 'Down'
li.appendChild(down);

let remove = document.createElement('button');
remove.className = 'remove';
remove.textContent = 'Remove'
li.appendChild(remove);
//calling the function before adding new list item in ul
//calling the fucntion in additems
//take all list as one array in one so that predefined list have buttons
}
