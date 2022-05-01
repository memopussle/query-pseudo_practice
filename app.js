/////////////////CHANGE CONTENTBY TARGETING ID CLASS
var changeContent = function () {
  document.getElementById("special").innerHTML = "I was changed by JavaScript!";
};

var doc = document;
console.log(document);

///////////////NODE TYPE
//represented by a number value which you can access through the notetype property
console.log(document.nodeType); // -> 9
console.log(document.body.nodeType); // ->1

//ie
var printNodeTypes = function () {
  //get the <body> element's child nodes
  var children = document.body.childNodes;

  for (i = 0; i < children.length; i++) {
    console.log(children[i].nodeType + ": " + children[i].nodeName);
  }
};

printNodeTypes();
//RESULTS
//3: #text
//1: P
//3: #text
//8:#comment


////////////////GetElementByTagName/////////////
//get all h1
var geth1 = document.getElementsByTagName('h1');
console.log(geth1.length); //-> 3

//get second li
var getSecondLi = document.getElementsByTagName('li')[2];
getSecondLi.textContent = 'I\m getting old';



//////////////GetElementByTagName/////////////
var allLi = document.getElementsByClassName('list-item');
console.log(allLi.length);


//////////////GetElementById////////////////
var paragraph = document.getElementById('paragraph');
//node value of first child of paragraph
console.log(paragraph.childNodes[0].nodeValue);



////////////QuerySelectorAll//////////////
//target all p
var paragraphViaQuery = document.querySelectorAll('body > div > p:nth-child(3)');
console.log(paragraphViaQuery);

///////////querySelector////////////////
//return first matching element or null
var firstParagraph = document.querySelector('p');
console.log(firstParagraph);







