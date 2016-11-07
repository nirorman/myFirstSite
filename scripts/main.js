/*document.querySelector('h1').textContent = 'Hello world!';*/

/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/ 

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/JS.png') {
      myImage.setAttribute ('src','images/css.png');
    } 
	else {
      if (mySrc === 'images/css.png'){
		myImage.setAttribute ('src','images/HTML.png');
	  }
	  
	  else{
		if(mySrc === 'images/HTML.png'){
			myImage.setAttribute ('src','images/JS.png');
		}
	  }
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent =  myName+ ', Welcome to JavaScript learning ' ;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome back, '+ storedName + ', Let\'s learn JavaScript!' ;
}
myButton.onclick = function() {
  setUserName();
}