interface Student {
    firstName: string;
    lastName: string;
    age: number;
    grades: (number | string | undefined)[];
}

function printStudent(student: Student): void {
    console.log(`${student.firstName} ${student.lastName} (${student.age})`);
    console.log("=".repeat(30));
    console.log("Noten:");
    console.log(student.grades.map(grade => {
        if(typeof grade == "number" && grade > 6){
            return "invalid";
        }else{
            return grade ?? "*";
    }
    }).join(","));
    console.log("\n");


    console.log("\n");
}

function printAllStudents(students: Student[]): void {
    students.forEach(student => printStudent(student));
}

const students: Student[] = [
    {
        firstName: "Bastian",
        lastName: "B",
        age: 27,
        grades: [1, 1, 1, 1, "A", undefined, 1, 1]
    },
    {
        firstName: "Bastian",
        lastName: "Zwei",
        age: 27,
        grades: ["A", undefined, 6]
    },
    {
        firstName: "Bastian",
        lastName: "Drei",
        age: 27,
        grades: ["A", 6, undefined, 6, 6, 6, 7]
    }
];

printAllStudents(students);