
// Array Some & Every Methods
//some array ki value ko check krta hy wo given value se eaqual ya bari hy ya nahi
//aur is some ko single use nhi kr skty hy isky liye function bana prta ha

var ages = [10,15,20,25,30];

var b = ages.some(checkAdult);

document.write(b);

function checkAdult(ages){
    return ages >= 18;
}

//every // yeh check krta hy har value given value se bari hy ya nhi agr hy to ture aye ga nhi to false
//some me ek bi true ajye to output true ajata hy every me sab ko match krna zaroori ha

var ages = [10,15,20,25,30];

var b = ages.every(checkAdult);

document.write(b);

function checkAdult(ages){
    return ages >= 18;
}