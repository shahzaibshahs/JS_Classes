// Objects Tutorial / object ko ap advance version of array keh sekty hy or yeh curly bracket se start hoty hy

var a = {
    fname : "Shahzaib",
    lname : "Waris Shah",
    age : 22,
    email : "iamshahzaibshah@gmail.com",
    living : {
        city : "Karachi",
        country : "Pakistan"

    },
    salary : function(){
        return 50000;
    },

    fullname : function(){
        return this.fname + " " + this.lname;
    }
}

document.write(a.fname,"<br>");
document.write(a.salary(),"<br>");
document.write(a.fullname(),"<br>");
document.write(a.living.city, " " + a.living.country, "<br>");



console.log(a);
console.log(a.lname);
console.log(a.salary());
console.log(a.fullname());



//part 2 second method

var person = new Object();

person.fname = 'Elon';
person.lname = 'Musk';
person.nethworth = 999999999999;

document.write(person.fname + " " + person.lname + " " + person.nethworth);

console.log(person);





