//Multidimensional Arrays

var array = [
    ["Shahzaib",22,"Male","Bachelour"],
    ["Kashif",25,"Male","Matric"],
    ["Hammad",23,"Male","FSC"],
    ["Usama",26,"Male","FSC"]
];
document.write("<table border='1px' cellspacing='0'>");
for(var a = 0; a < array.length; a++){
    document.write("<tr>"); 
for(var b = 0; b < array[a].length; b++){

document.write( "<td>" + array[a][b] + "</td>");
}

document.write("</tr>"); 
}
document.write("</table>");