import inquirer from "inquirer";
let Todo = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "what do you want to add in your todo"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "what do you want to add more todo?",
            default: false
        }
    ]);
    const { TODO, addmore } = answer;
    loop = addmore;
    if (TODO) {
        Todo.push(TODO);
    }
    else {
        console.log("kindly add valid input");
    }
}
if (Todo.length > 0) {
    console.log("your new Todo list /n");
    Todo.forEach(TODO => {
        console.log(Todo);
    });
}
else {
    console.log("no todo found");
}
