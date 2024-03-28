//String Methods "Double Quotes ke Ander Jitni Bi charcter & numbers aye gy wo string kehlaty ha"

//afor Counting
var str = "Javascript is one of the best programming language";
var a = str.length;

document.write(a,"<br>");

//for Lower Case
var str = "Javascript is one of the best programming language";
var a = str.toLowerCase();

document.write(a,"<br>");

//for Upper Case
var str = "Javascript is one of the best programming language";
var a = str.toUpperCase();

document.write(a,"<br>");


// Include this is case sensitive and use for word finder
var str = "Javascript is one of the BEST language";
var a = str.includes("BEST");

document.write(a,"<br>");

//startwith() - yeh case sensitive ha & fisrt word & alphabet ko find krny k liye use hota ha

var str = "Welcome to Javascript World";
var a = str.startsWith("Welcome");

document.write(a,"<br>");

// endwith() - yeh case sensitive ha & yeh last word or alphabet ko find krta ha

var str = "Coding is Easy When you Understand the concept";
var a = str.endsWith("Concept");

document.write(a,"<br>")

//search yeh kisi bi word ka index yani location hamey bata ta ha

var str = "Html is easy language";
var a = str.search("easy");

document.write(a,"<br>");

// match yeh bi search krny ke liye use hota ha & isey given value jitni bar mily gi ye usey lekar ek new array bana kr wapis print krde ga

var str = "Computer is best invention of 19 century, smart phones is worst invention of 20 century";

var a = str.match(/century/g);

document.write(a,"<br>");

// indexOf - yeh bi word ki location yani postion return krta hy 

var str = "Today is Friday";
var a = str.indexOf("is");

document.write(a,"<br>");

// LastIndexOf yeh indexOf ka Oppisite ha

var str = "Today is Friday";
var a = str.lastIndexOf("Today");

document.write(a,"<br>");

// replace means replace

var str = "Javascript is Best Backend Language";
var a = str.replace("Javascript","PHP");

document.write(a,"<br>");

// trim - extra spces remove krny ke liye use hota ha

var str = "Javascript use in both side Frontend     and    Backend";
var a = str.trim();

document.write(a,"<br>");




