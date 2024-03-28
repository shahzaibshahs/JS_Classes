// class39 Number Methods In JS

var a = "99";

var num = Number(a);

document.write(a,"<br>");

//second example with boolean

var a = true;

var num = Number(a);

document.write(num,"<br>");

// parseInt - isko jo sab se pehli Integer ki Value Mily gi Usey Yeh Return krde ga

var a = "10 20 30";

var num = parseInt(a);

document.write(num,"<br>");

// second example with float

var a = "73.37";

var num = parseInt(a);

document.write(num,"<br>");

// parse Float same parse Int ki tarah kam krta hy lekin yeh flaot numbers me point ke bad wali value bi return krta ha

var a = "73.37";

var num = parseFloat(a);

document.write(num,"<br>");

// isFinite - Yeh Check krey ga given value finite hy ya nahi

var a = 100; // false tb aye ga jab ham non numeric value likhy gy

var num = isFinite(a);

document.write(num,"<br>");

// isIntegar - Yeh check krta hy given value integar hy ya nhi

var a = 1;

var num = Number.isInteger(a);

document.write(num,"<br>");

// toFixed() - yeh samjh se bahir ha

var a = 55.737;

var num = a.toFixed(2);

document.write(num,"<br>");

// toPrecision - samjh se bahir ha

var a = 55.737;

var num = a.toPrecision(2);

document.write(num);


