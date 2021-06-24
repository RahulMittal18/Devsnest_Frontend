// Problem1
function display(student) {
    let arr = Object.keys(student);
    return arr.join(",");
}

console.log(display({ name: "David Rayy", sclass: "VI", rollno: 12 }));



// Problem2
function del(student) {
    console.log(student);
    delete student.rollno;
    return student;
}

console.log(del({ name: "David Rayy", sclass: "VI", rollno: 12 }));



// Problem3
function len(student) {
    let ans = Object.keys(student).length;
    return ans;
}

console.log(len({ name: "David Rayy", sclass: "VI", rollno: 12 }));



//Problem4
var library = [
    { 
        author: "Bill Gates",
        title: "The Road Ahead", 
        readingStatus: true },
    { 
        author: "Steve Jobs", 
        title: "Walter Isaacson", 
        readingStatus: true },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    },
];

function displayStatus() {
    library.forEach((value) => {
        if (value.readingStatus === true) {
            console.log("User has read '" + value.title +"' written by " + value.author);
        } else {
            console.log("User hasn't read '" + value.title +"' written by " + value.author);
        }
    });
}
displayStatus();



// Problem5
class Cylinder {
    constructor(height, radius) {
        this.height = height;
        this.radius = radius;
    }
    // Getter
    get volume() {
        return this.calcVol();
    }
    // Method
    calcVol() {
        return this.height * this.radius * 2 * 3.1415;
    }
}

const cylinder = new Cylinder(5, 2);

console.log(cylinder.volume.toFixed(4));



// Problem 6
var library = [
    { 
        title: "The Road Ahead", 
        author: "Bill Gates", 
        libraryID: 1254 },
    { 
        title: "Walter Isaacson", 
        author: "Steve Jobs", 
        libraryID: 4264 },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        libraryID: 3245,
    },
];

library.sort(function (a, b) {
    return a.libraryID - b.libraryID;
});

console.log(library);