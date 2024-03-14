// Arrays

var ary = [10,20,30,40,50];
var sum = 0;
document.write("<ul>");

for(var a = 0; a <= 4; a++){

    document.write("<li>" + ary[a] + "</li>");
    sum = sum + ary[a];
}
document.write("</ul>");
document.write("Total Sum : " + sum);

// get value in array from users

var ary = new Array(3);

for(var g = 0; g < 2; g++){
ary[g] = prompt("Enter the Value :  ");
}

document.write("<ul>");

for(var a = 0; a <= 3; a++){

    document.write("<li>" + ary[a] + "</li>");
    
}
document.write("</ul>");