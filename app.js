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

var div= document.getElementsByClassName('remove-child')[0];
console.log(div);
var note2 = document.getElementById('note2');

var removeNote2 = function() {
  if(note2) {
    div.removeChild(note2);
  }
}


////////////////appendChild/////////////////
//adds a node to the end of the list of children of a specified parent node
var appendNote2 = function() {
  div.appendChild(note2);
}

var note1 = document.getElementById("note1");

var appendNote1 = function () {
  div.appendChild(note1);
};


////////////////insertBefore/////////////
//adds a node as the first child of a parent node

var insertNote2BeforeNote1 = function() {
  //Note 2: target note 
  //Note 1:ref note
  div.insertBefore(note2, note1);
}

//insertBefore can be used as prependChild
var prependChild = function (newNode) {
  //this -> div
   this.insertBefore(newNode, this.firstChild);
}

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

var addTextNode = function() {
  var newTextNode =document.createTextNode('Hello World!');
  //append newTextNode after container
  document.getElementById('container').appendChild(newTextNode);
}


/////////////createElement//////////////////
//create any HTML element by specifying an element tag name as string
var addNewParagraph = function() {
  var newP = document.createElement('p');
  var newTextNode = document.createTextNode("Pussle Perry");
  //append newTextNode after newP
  newP.appendChild(newTextNode);
  //append newP after container
  document.getElementById('container').appendChild(newP);
}