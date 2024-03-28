
// Arrray Map Method

// var ary = [11,4,9,15];
// var b = ary.map(test)

// document.write(b);


// function test(x){
//     return x * 10;
// }


//second way


var arry = [
    {fname : "Shahzaib", lname : "Shah"},
    {fname : "Kashif", lname : "Ali"},
    {fname : "Hammad", lname : "Shah"},
];

var b = arry.map(tests);

document.write(b);

function tests(x){
    return x.fname + " " + x.lname;
}
