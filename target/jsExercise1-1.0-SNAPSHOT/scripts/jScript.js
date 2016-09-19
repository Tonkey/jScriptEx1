//assignment 1!
console.log("Assignment 1");
var name = "Nicklas";
var noOfStudents = 1;
var isStudent = true;
var Person = {studentId: 1, studentName: name, studentAge: 20};
var listOfPersons = [Person, new Object({studentId: 2, studentName: "Louise", studentAge: 20})];
console.log(Person, name, noOfStudents, isStudent);

//assignment 2!
console.log("Assignment 2");

var assign2 = [Person, name, noOfStudents, isStudent];

assign2.forEach(function (element) {
    console.log(typeof element);
});

//assignment 3!
console.log("Assignment 3");

function student(studentId, studentName) {
    this.studentId = studentId;
    this.studentName = studentName;

    this.toString = function () {
        return this.studentId + " " + this.studentName;
    };
}

var listOfStudents = [new student(1, "Nicklas"), new student(2, "Louise"), new student(3, "Emma")];
listOfStudents.forEach(function (student) {
    console.log(student.toString());
});

//assignment 4!
console.log("Assignment 4");

function advStudent(name, age, isFemale) {
    this.name = name;
    this.age = age;
    this.isFemale = isFemale;
}


function studentList() {
    var studList = [new advStudent("Nicklas", 20, false), new advStudent("Louise", 20, true), new advStudent("Emilie", 19, true)];
    this.getFemales = function () {
        var listOfFemales = [];
        studList.forEach(function (stud) {
            if (stud.isFemale)
                listOfFemales.push(stud);
        });
        return listOfFemales;
    };
    this.getYoungest = function () {
        var youngest = studList[0];
        for (var i = 1; i < studList.length; i++) {
            if (studList[i].age < youngest.age)
                youngest = studList[i];
        }
        return youngest;
    };
}
var studentList = new studentList();
var femList = studentList.getFemales();
femList.forEach(function (female) {
    console.log(female.name + " " + female.age);
});


//assignment 5!
console.log("Assignment 5");
var aStud = new student(1, "Nicklas");
var sortedList = [aStud, new student(2, "Louise"), new student(3, "Michael"), new student(4, "Emma")];
sortedList.sort(function (a, b) {
    var x = a.studentName.toLowerCase();
    var y = b.studentName.toLowerCase();
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});

function assign5(list, stud) {
    this.list = list;
    this.stud = stud;
    console.log("Current array size " + this.list.length);
    for (var i = 0; i < this.list.length; i++) {
        if (this.list[i] === stud)
            this.list.splice(i, 1);
    }
    return this.list;
}
console.log("array size after splice: " + assign5(sortedList, aStud).length);

//assignment 6!
console.log("Assignment 6");

var assign6List = [new advStudent("Nicklas", 20, false), new advStudent("Louise", 32, true), new advStudent("Michael", 35, false)];
assign6List.forEach(function (advStud) {
    if (advStud.age > 30)
        console.log(advStud.name);
});

//assignment 7!
console.log("Assignment 7");

function max() {
    var highest = arguments[0];
    for (var i = 1; i < arguments.length; i++)
        if (arguments[i] > highest)
            highest = arguments[i];
    return highest;
}

console.log(max(1, 2, 3, 4, 3000, 200));

//assignment 8!
console.log("Assignment 8");
Date.prototype.getDayOfWeek = function(){
    return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][this.getDay()];
};

var today = new Date();

console.log("Today is " + today.getDayOfWeek());

//assignment 9!
console.log("Assignment 9");
//I changed name to race as it makes more logical sense
function animal(race,age,isMammal,isFemale){
    this.race=race;
    this.age=age;
    this.isMammal=isMammal;
    this.isFemale=isFemale;
    this.getInfo = function (){
        return this.race + ", " + this.age + ", " + this.isMammal + ", " + this.isFemale;
    };
}

var animalList = [new animal("Lion",14,true,false), new animal("Shark",7,false,true), new animal("Falcon", 3, false, false)];
animalList.forEach(function(animal){
    console.log(animal.getInfo());
});

//assignment 10!
console.log("Assignment 10");

var mammalList = animalList.filter(function(animal){
    return animal.isMammal;
});

mammalList.forEach(function(mammal){
    console.log(mammal.getInfo());
});

//assignment 11!
console.log("Assignment 11");

var animalNameList = animalList.map(function (animal){
    return animal.race;
});

animalNameList.forEach(function (races){
    console.log(races);
});
