/////////////////////DOM MANUPILATION/////////////

/////////////////CHANGE CONTENTBY TARGETING ID CLASS
// var changeContent = function () {
//   document.getElementById("special").innerHTML = "I was changed by JavaScript!";
// };

// var doc = document;
// console.log(document);

///////////////NODE TYPE
//represented by a number value which you can access through the notetype property
// console.log(document.nodeType); // -> 9
// console.log(document.body.nodeType); // ->1

//ie
// var printNodeTypes = function () {
//get the <body> element's child nodes
// var children = document.body.childNodes;

// for (i = 0; i < children.length; i++) {
//   console.log(children[i].nodeType + ": " + children[i].nodeName);
// }
//};

// printNodeTypes();
//RESULTS
//3: #text
//1: P
//3: #text
//8:#comment

////////////////GetElementByTagName/////////////
//get all h1
// var geth1 = document.getElementsByTagName('h1');
// console.log(geth1.length); //-> 3

//get second li
// var getSecondLi = document.getElementsByTagName('li')[2];
// getSecondLi.textContent = 'I\m getting old';

//////////////GetElementByTagName/////////////
// var allLi = document.getElementsByClassName('list-item');
// console.log(allLi.length);

//////////////GetElementById////////////////
// var paragraph = document.getElementById('paragraph');
//node value of first child of paragraph
// console.log(paragraph.childNodes[0].nodeValue);

////////////QuerySelectorAll//////////////
//target all p
// var paragraphViaQuery = document.querySelectorAll('body > div > p:nth-child(3)');
// console.log(paragraphViaQuery);

///////////querySelector////////////////
//return first matching element or null
// var firstParagraph = document.querySelector('p');
// console.log(firstParagraph);

//////////////removeChild/////////////////

var div = document.getElementsByClassName("remove-child")[0];
console.log(div);
var note2 = document.getElementById("note2");

var removeNote2 = function () {
  if (note2) {
    div.removeChild(note2);
  }
};

////////////////appendChild/////////////////
//adds a node to the end of the list of children of a specified parent node
var appendNote2 = function () {
  div.appendChild(note2);
};

var note1 = document.getElementById("note1");

var appendNote1 = function () {
  div.appendChild(note1);
};

////////////////insertBefore/////////////
//adds a node as the first child of a parent node

var insertNote2BeforeNote1 = function () {
  //Note 2: target note
  //Note 1:ref note
  div.insertBefore(note2, note1);
};

//insertBefore can be used as prependChild
var prependChild = function (newNode) {
  //this -> div
  this.insertBefore(newNode, this.firstChild);
};

var prependNote2 = function () {
  prependChild.call(div, note2);
};

/////////////////replaceChild//////////
var note3 = document.getElementById("note3");
var replaceNote3WithNote2 = function () {
  div.replaceChild(note2, note3);
};

var appendNote3 = function () {
  div.appendChild(note3);
};

//////////////createTextNode////////////////

var addTextNode = function () {
  var newTextNode = document.createTextNode("Hello World!");
  //append newTextNode after container
  document.getElementById("container").appendChild(newTextNode);
};

/////////////createElement//////////////////
//create any HTML element by specifying an element tag name as string
var addNewParagraph = function () {
  var newP = document.createElement("p");
  var newTextNode = document.createTextNode("Pussle Perry");
  //append newTextNode after newP
  newP.appendChild(newTextNode);
  //append newP after container
  document.getElementById("container").appendChild(newP);
};

//////////////////////innerHTML////////////////
// create or edit the child elements of a node without using the methods as demonstrated above
//however due to security conterns , it is recommended to be avoided.
//attackers can steal people's secret information
var setContent = function () {
  var html =
    "<p>Hello world!</p>" + "<p>Hello world!</p>" + "<p>Hello world!</p>";
  document.getElementById("container").innerHTML = html;
};

////////////////////className & id///////////////////
//set class of an element through className property
var makeGreen = function () {
  var paragraph = document.getElementsByClassName("intro")[0];

  //add class name
  paragraph.className = "green";
};

var makeBold = function () {
  var paragraph = document.getElementsByClassName("intro")[0];
  paragraph.id = "bold";
};

////////classList method: add,remove, toggle, contains, replace/////////
var toggleGreen = function () {
  var paragraph = document.getElementsByClassName("intro")[0];
  paragraph.classList.toggle("green");
};

////////Toggling an Element to Show/////////
var show = function (index) {
  var paragraphs = document.getElementById("paragraphs").children;
  //loop thru paragrphs
  for (var i = 0; i < paragraphs.length; i++) {
    //toggle.hidden class if index !==i
    paragraphs[i].classList.toggle("hidden", index !== i);
  }
};

/////////.children & .childNodes///////////
//.childrenreturns a list ofimmediate nodes contained in a ParentNode.
//.children:element nodes, childNodes: node types

document.querySelector("div").childNodes.length;
document.querySelector("div").children.length;

//////////////////getAttribute, setAttribute, removeAttribute////////////
//setAttribute : attribute name, value you want to set
paragraph.setAttribute("class", "green");
paragraph.getAttribute("class"); //-> green
paragraph.removeAttribute("class");

//it is recommended to use prefixing data- => prevent conflict with HTML attributes
var makeParagraphsBlue = function () {
  paragraphs = document.getElementById("paragraphs2").children;
  for (var i = 0; i < paragraphs.length; i++) {
    var paragraph = paragraphs[i];
    if (paragraph.getAttribute("data-color") === "blue") {
      paragraph.classList.add("blue");
    }
  }
};

////////////Element.style/////////////////
//define in-line styles of an elemen
var styleObject = document.getElementsByTagName("p")[0].style;
console.log(styleObject); //-> CSSStyleDeclaration

//log css Text
console.log(styleObject.cssText);

///////////////style.csstext / Element.Attribute////////////
// These two methods will overwrite entire style value, recommended only for setting multiple CSS properties at one.
var p = document.getElementById("paragraphs2");
p.style.cssText = "color: red; font-size: 20px;";
p.setAttribute("style", "color: green; font-size: 30px;");

////////////style elements///////////
//replicate <style></style> in HTML file
var addCSSNode = function () {
  //create <style></style>
  var styleNode = document.createElement("style");
  //style p in style sheet
  styleNode.innerHTML = "#paragraph1 {color: red; font-weight: bold;}";
  //locate style sheet in head
  document.getElementsByTagName("head")[0].appendChild(styleNode);
};

//////////////ANIMATION////////////////
//change position of the box to left
var left = 0;
var moveBoxRight = function () {
  //select selector
  var box = document.querySelector("#box");
  //move to right 10px every click
  left += 10;
  box.style.left = left + "px";
};

////////////////Animate With SetInterval///////
// arguments: a call back function + number represents the miliseconds
//heavy to load, animation might suffer / out of sync
var angle = 0;

var oscillateHorizontally = function () {
  var box = document.querySelector("#box");
  //execute every 1 millisecons
  angle += 0.001;

  // change the left property of the box based on a sine graph
  //sine paragraph between 1 & -1 => Math.sin method -> 0 & 1
  box.style.left =
    Math.abs(Math.sin(angle)) * (document.body.clientWidth - 50) + "px";
};

var interval;
var startInterval = function () {
  //pass ioscillicateHorizontally
  interval = window.setInterval(oscillateHorizontally, 10);
};

var stopInterval = function () {
  if (interval) {
    window.clearInterval(interval);
  }
};

///////////////////RequestAnimationFrame/////////////
//arguments: a callback function ( 60 times/sec) / capable of handling animations
var lastTime = null;
var request;
var oscillateByStep = function (time) {
  var box = document.querySelector("#box");
  if (lastTime !== null) {
    //a static 0.001 to the angle
    //increase angle based on the time pased
    angle += (time - lastTime) * 0.0001;
  }
  lastTime = time;
  box.style.left =
    Math.abs(Math.sin(angle)) * (document.body.clientWidth - 50) + "px";
  request = requestAnimationFrame(oscillateByStep);
};

//start requestAnimationFrame
var startAnimationRequest = function () {
  request = requestAnimationFrame(oscillateByStep);
};

//stop stop animationRequest
var stopAnimationRequest = function () {
  if (request) {
    window.cancelAnimationFrame(request);
  }
};

///////////////Activating CSS Animation With JavaScript////////////
var toggleCSSAnimation = function () {
  var box = document.querySelector('#box');
  box.classList.toggle('sliding');
}
