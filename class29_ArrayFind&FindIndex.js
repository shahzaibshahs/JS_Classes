
//Array find & findIndex /// 
//find ko given value me jo bi sab se pehli value mily gi usy return krwa dega or findindex uska index number


var ages = [10,15,20,25,30];

var b = ages.find(checkAdult);
var b = ages.findIndex(checkAdult);

document.write(b);

function checkAdult(ages){
    return ages >= 18;
}