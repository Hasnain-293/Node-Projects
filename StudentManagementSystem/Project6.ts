import inquirer from "inquirer"

interface studentinterface{
  id?: number;
  name: string;
  balance: number;
  courseenrolled: string[];
  paidfees: boolean;
}

interface questioninterface{
    choice: string
}

interface answerinterface {
    name: string;
    balance: number;
    coursesenrolled: string[];
    paidfees: string;
}
class managmentsystem {
    newstudent: studentinterface = {
        id: 0,
        name: "",
        balance: 0,
        courseenrolled: [""],
        paidfees : false,

    }


    students: studentinterface [] = []
    newstudentbalance: number = 0;
    addnewstudent(newstudent: studentinterface){
        this.students = [...this.students,newstudent];
        this.newstudentbalance - newstudent.balance

    }
  viewbalance() {
    if(this,this.students.length == 0){
    console.log("no student have been enroled")
return;
  } 
  return this.newstudentbalance
}
showstatusofallstudents() {
    if(this.students.length == 0) {
    console.log("no students have been enroled")
    return
} 

     this.students.map((stnt) => {
    console.log(`id ${stnt.id}\nname: ${stnt.name}\nbalance: ${stnt.balance}\ncourses enrolled ${stnt.courseenrolled}\nfees status ${stnt.paidfees}\n`)
   })

}
}

const system = new managmentsystem()
async function main() {
    const questions: questioninterface = await inquirer.prompt([
    {
       type: "list",
       name: "choice",
       message: "choices",
       choices: [
        "Hasnain Mughal new student",
        "Display all the student and their details",
        "Display the current student blance",
        "Exit",
       ]


    }    
    ])
    if (questions.choice === "Hasnain Mughal new student") {
     const newstudent: answerinterface = await  inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter Your Name",
      },

      {
        type: "number",
        name: "balance",
        message: "Enter Your Balance [Minimum 500]",
        default: 0,
        validate: (answer: number) => {
            if(answer >= 500){
            return true
        } else {
            console.log("\nbalance is too low")
            return false
        }
}
     },

     {
        type: "checkbook",
        name: "courses",
        message: "choose the course for yourself",
        choices: ["Typescript", "Python", "Node.js", "Next.js"],
        default: "javascript",
     },

     {
       type: "list",
       name: "payfees",
       message: "Do You Want To Pay The Fees Now?",
       choices: ["YES", "NO"],
     },
     ]);
     let feesstatus = false
     if(newstudent.paidfees === "YES") {
        feesstatus = true;
        newstudent.balance -=500;
     }
     const studentobj = {
        id: Math.floor(Math.random() * 999999) + 1000,
        name: newstudent.name,
        balance: newstudent.balance,
        courseenrolled: newstudent.coursesenrolled,
        paidfees: feesstatus
     };

  system.addnewstudent(studentobj);
  main(); 
}
if(questions.choice === "Display all the students and their details") {
    console.log("The status off all the students is:")
    system.showstatusofallstudents();
    main();
};
if(questions.choice === "Display the current student balance") {
    console.log("The balance of this student is:")
    console.log(system.viewbalance())
    main()
}if(questions.choice === "Exit"){
    return;
}
}
main();


    





