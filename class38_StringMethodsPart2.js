//String Methods Part2

//chartAt - yeh given value ke charaters ko return krta ha

var str = "Today is Friday";
var a = str.charAt(4);

document.write(a,"<br>");

//char code At - yeh alphabet ke code return krta hy

var str = "Today is Sunday";
var a = str.charCodeAt(3);

document.write(a,"<br>");

//Fromcharcode - yeh samjh se bahir ha

var a = String.fromCharCode(115);

document.write(a,"<br>");

// concat - yeh 2 variable ko merch yani add krta ha

var str = "Hello ";
var str2 = "Javascript is best language";

var a = str.concat(str2);

document.write(a,"<br>");

// split - yeh ek variable me se chize alag/delete krta hy

var str = "Javascript is best is language";

var a = str.split("is")

document.write(a,"<br>");

// repeat means repeat , kisi bi varible ko dobra print kr skty hy is function se ya koi particular value

var str = "Hello Welcome To JS World";

var a = str.repeat(2);

document.write(a,"<br>");

// slice - yeh string ke bech me se koi word ya character nikalna ho to ye use kr sakty ha
 
var str = "Hello Welcome To JS World";

var a = str.slice(2)

document.write(a,"<br>");

// substr - yeh slice ki trah ki kam krta ha thorey difference ke sat agr given value 2 hy to 2 se agey ka data return krde ga


var str = "Ai is boosting so fast";

var a = str.substr(2);

document.write(a,"<br>");

// substr - yeh character ka index me jo value hogi usey return karey ga

var str = "Chat Gpt is one of the most popular Example of Ai";

var a = str.substring(5);

document.write(a,"<br>");

//toString - yeh numberic value ko stringme convert kardeta ha

var str = 50;

var a = str.toString();

document.write(a + 20 ,"<br>"); // yeh isky output me 50,20 aye ga dono plus nhi hongey becuase 50 string ban chuka hy aur 20 integer ha

//Valueof wohi kam krta hy jo doucment.write() karta ha

var str = "Hello Js Students";

var a = str.valueOf();

document.write(a);





