//Array indexOf & lastIndexOf
//indexOf array ki value ki location check krny ke lye use hota ha

var a = ['pakistan','saudia arabia','iran','turkey'];

var b = a.indexOf("pakistan");
document.write(b);

var b = a.indexOf("iraan"); // yeha mny iran ki speling wrong likhi to output me -1 aya jo isey nhi milta wo minus 1 kr ke return krta ha
document.write(b);


//lastIndexOf


var a = ['pakistan','saudia arabia','iran','turkey'];

var b = a.lastIndexOf("turkey");
document.write(b);

//Array Includes // yeh array ki value search krny ke liye use hota ha

var a = ['Shahzaib','Sheraz','Janzaib','Alamzaib'];

var b = a.includes("Shahzaib");

document.write(a,"<br>",b);