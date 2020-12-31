console.log("This is Tutorial 37");

// Assume that this response is from server
const students = [
    {name : "Tushar", subject : "Python"},
    {name : "Min", subject : "Javascript"}
];

function enrollStudent(student, callback) {
    setTimeout(() => {
        students.push(student);
        console.log("Student has been enrolled(To the Database)")
        callback();
    }, 3000); // 3s
}

function getStudents() {
    setTimeout(() => {
        let str = ``;
        students.forEach(student => {
            str += `<li><b>${student.name}</b></li>`;
        });
        document.getElementById('students').innerHTML = str;
        console.log("Student have been fetched(From Database)");
    }, 1000); // 1s
}

let newStudent = {name: "James", subject: "C++"};
enrollStudent(newStudent, getStudents);

/*
A fuction that calls another funtion when it's called is called as a callback funtion.
A callback function can be:-
Synchronous - forEach()
Asynchronous - setTimeout()

As we can see in this example code, Enrolling Student is more time consuming than fething it so the students are fetched first and then enrolled which is a problem for us as the new student is not included as the student list has been fetched before enrolling student.
To solve this issue we argumented tge getStudents funtion as a callback funtion to enrollStudent funtion which means that the callback function will be called when the student is enrolled.
*/