//Array of Objects / object ke ander array kesy banaty hain

var student = [
    {
        name: 'Shahzaib', age : 22
    },

    {
        name: 'Kashif', age : 25
    },

    {
        name: 'Madi', age : 24
    }
];

console.log(student);

for(var a = 0; a < student.length; a++){

document.write(student[a].name + " " + student[a].age , "<br>");
}

