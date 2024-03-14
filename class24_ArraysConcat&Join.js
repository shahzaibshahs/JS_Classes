//Array Concat & Join // concat 2 array ko apas me join krta hy

var a = ['apple','mango','graphes','cherry'];

var b = a.concat('banana','Anaar');

document.write(b, "<br>");

//second way of concat

var a = ['apple','mango','graphes','cherry'];

var b = ('Anaar','banana');
var c = a.concat(b);

document.write(c);

//join

 var a = ['apple','mango','graphes','cherry'];
 var b = ['potato','tomato','onion'];
 var c = a.concat(b);
// document.write(c);
var d = c.join(" ");
document.write(d);