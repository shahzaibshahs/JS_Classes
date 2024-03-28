// DOM Get & Set Value Methods

//var element;
// inner tex & inner html - HEADING
//element = document.getElementById("header").innerText;
//element = document.getElementById("p").innerText; // jb hm inner tex ko target karey gey to yeh zaroori hy ke usme id ho wrna km nhi hoga
//console.log(element);

//getAttribute
var element;
//how to get inside value of attribute
element = document.getElementById("header").getAttribute("class");

console.log(element);


//getAttributeNode

var element;
//how to get inside value of attribute
element = document.getElementById("header").getAttributeNode("style").value;

console.log(element);

//atribute : yeh sarey attribute nikal kr deta hy

var element;
//how to get all attributes
element = document.getElementById("header").attributes; 
// agar all attributes chaiye hy to end me attributes lagye ga agurkoi particular chaiye to attributtes[2] is tarah number lagye ga

console.log(element);


// Next Methods 

//change inner text
var element;
document.getElementById("header").innerText = "This Is Top" 
document.getElementById("header").innerHTML = "<h2>This Is Top</h1>"

element = document.getElementById("header").innerHTML;

console.log(element);

//how to change/set attribute

var element;
document.getElementById("header").innerText = "This Is Top" 
document.getElementById("header").setAttribute("class","xyz");

element = document.getElementById("header").getAttribute("class");

console.log(element);

//second way

var element;
document.getElementById("header").innerText = "This Is Top" 
document.getElementById("header").attributes[1].value="xyzs"; // but upar wala easy hy

element = document.getElementById("header").getAttribute("class");

console.log(element);

// remove attribute


var element;
document.getElementById("header").innerText = "This Is Top" 
document.getElementById("header").removeAttribute("style");

element = document.getElementById("header").getAttribute("class");

console.log(element);

