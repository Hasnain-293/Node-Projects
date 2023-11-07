import inquirer from "inquirer";
class Student {
    constructor(n) {
        this.name = n;
    }
}
class Person {
    constructor() {
        this.students = [];
    }
    addstudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programmStart = async (persons) => {
    do {
        console.log("WellCome Hasnain");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap Kis Sa Bat Krna Pasand Kara Ga...",
            name: "select",
            choices: ["Khud Sa:Self", "Student"],
        });
        if (ans.select == "Khud Sa:Self") {
            console.log("Hello Me Khud Sa Bat Kr Raha Ho");
            console.log("Mari Tabiyat Achi Hia.");
        }
        if (ans.select == "Student") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Ap Ko Kis Student Sa Bat Krni Hia",
                name: "student",
            });
            const student = persons.students.find(val => val.name == ans.student);
            if (!student) {
                const name = new Student(ans.student);
                persons.addstudent(name);
                console.log(`Hello I Am ${name.name}, And I Am Fine`);
                console.log(persons.students);
            }
            if (student) {
                console.log(`Hello I Am ${student.name}, And I Am Fine...........`);
                console.log(persons.students);
            }
        }
    } while (true);
};
programmStart(persons);
