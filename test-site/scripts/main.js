
/*textContent is the whatever the content is under h1
myHeading.textContent = 'The Bold Globe';*/

/*let myHeading = document.querySelector('h1');

/*This line of code creates an "event" that gives you a message
when you click anywhere on the web page.*/
document.querySelector('img').onclick = function() {
    alert('Changing picture');
}

/*Adding an image changer*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/the-globe.jpg') {
      myImage.setAttribute ('src','images/oldusmap.jpg');
    } else {
      myImage.setAttribute ('src','images/the-globe.jpg');
    }
}

/*Add a personalized welcome message*/

/*This takes references to the new button
and the heading, storing them inside variables:*/ 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/*localStorage is an API*/
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

  /*This will put the onclick function on the button*/
  myButton.onclick = function() {
      setUserName();
  }


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}  