// Date Methods In JS

var now = new Date();

document.write(now,"<br>");

// toStringdate - for short term of current Day-D/M/Y

var now = new Date();

document.write(now.toDateString(),"<br>");

// getDate - for simple date

var now = new Date();

document.write(now.getDate(),"<br>");

//get Full Year - for current year

var now = new Date();

document.write(now.getFullYear(),"<br>");

// getMonth - for current month

var now = new Date();

document.write(now.getMonth(),"<br>"); // yr yeh apko ek month pichy dikahye ga kiu ke js me january 0 hota ha to december 11 aye ga na ke 12

// getDay - for current day

var now = new Date();

document.write(now.getDay(),"<br>"); //yeh 1234567 me return kry ga // 0 mean sunday 1 mean monday continue ->>>

// iskey elawa ap kisi specific given value ki date day month or year me findout kr skty ha
// for example 

var now = new Date("20 December 2001");

document.write(now.getMonth(),"<br>"); // print me 11 aye ga

// get/Hour/minute/seconds - for current hours/minutes/seconds

var now = new Date();

document.write(now.getHours(), " : ", now.getMinutes(), " : ", now.getSeconds(), " : ", now.getMilliseconds(), "<br>"); // yeh 24 hours format me ans dega means agr din ka 1 baj rha hoga to yeh 13 return kry ga or rat ka 1 ko 1 hi return kry ga

// set date - future me kisi din ka time or date check krna 

var now = new Date();

now.setDate(20)
document.write(now,"<br>");

// set full year - is se pata chly ga future ki date ke days ke barey me

var now = new Date();

now.setFullYear(2025)
document.write(now,"<br>");

// set Month 

var now = new Date();

now.setMonth(11)
document.write(now,"<br>");

// set Hours 

var now = new Date();

now.setHours(2)
document.write(now,"<br>");

// get day month & year with readable form

var now = new Date();

document.write(now.getDate() + " /" + now.getMonth() + " /" + now.getFullYear() );


// 