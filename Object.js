student=[
    {
        "name": "John",
        "grade":50,
        "class":2
    },
    {
        "name": "Benigne",
        "grade":60,
        "class":2
    },
    {
        "name": "Boris",
        "grade":10,
        "class":2
    },
    {
        "name": "Wilson",
        "grade":70,
        "class":2
    },
    {
        "name": "Teta",
        "grade":40,
        "class":2
    }
];
//Add new student to the array
const newStudeent={"name":"Celine","grade":80,"class":4}
student.push(newStudeent);
console.log("THE NEW STUDENT IS:");
console.log(student);
//Update the grade of  a specific student

student[0].grade=90;
console.log("THE STUDENT WITH THE NEW GRADE IS:");
console.log(student);

//Filter students who has grade over 50

const FilteredStudent=student.filter((stud)=>stud.grade>50)
console.log("THE STUDENTS WITH GRADE OVER 50 ARE:");
console.log(FilteredStudent);

//Find a student by name

const findByName=student.find((stude)=>stude.name="Boris")
console.log("THE STUDENT WITH THE NAME Boris IS:");
console.log(findByName);

//Calculate the average of all students

const average=student.reduce((sum,studen)=>sum+studen.grade/student.length,0)
console.log("THE AVERAGE GRADE OF ALL STUDENTS IS:");
console.log(average);

// Track Passed Students Using a Closure (Students with a grade above 50)

function createPassTracker(minGrade){
    return function(student){
        return student.filter((s)=>s.grade>minGrade)
    }
}
const trackPassedStudent=createPassTracker(50);
console.log("THE STUDENTS WITH GRADE ABOVE 50 ARE:");
console.log(trackPassedStudent(student));







