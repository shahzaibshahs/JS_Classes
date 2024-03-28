//DOM querySelector & querySelectorAll 

// querySelector yeh sirf first waly ko target karta hy
//querySelectorAll yeh sab ko target karta hy ek sat

var element;

// document.querySelector("#header").innerHTML = "<h1>The Header</h1>";

element = document.querySelectorAll(".list")[1].innerHTML;
console.log(element);

element = document.querySelectorAll("#header h1");
console.log(element);