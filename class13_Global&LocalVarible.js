
// // Global & Local Variable
// // jo function ke bbahir variables hoty hy usey ham kehty hy global variable
// // aur jo functions ke ander variables hoty hy usey ham kehty hy local variable

// //Global Variable
var a = "Hp Laptop";

function computers(){
    // alert(a);
}

computers(a);
document.write(a)

//Local Variable

function computer(){
    var p = "Dell System";
    document.write(p);
}

computer();
document.write(p);