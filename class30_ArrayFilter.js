// Array Filter // yeh given value ya us se ziada ki sari value nikal kr deta ha

var ages = [10,12,18,24,26,28,30];

var b = ages.filter(checkadlt);

document.write(b);

function checkadlt(ages){
    return ages >= 18;


}
