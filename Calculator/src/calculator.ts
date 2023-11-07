#! /usr/bin/env node

import inquirer from "inquirer";

let answers : {
    numberOne: number
    numberTwo: number
    operator: string
} = await inquirer.prompt([

    {
        type: "number",
        name: "numberOne",
        message: "please enter your frist number",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "please enter your second number",
    },
    {
        type: "list",
        name: "operator",
        choices: ["*","+","-","/"],
        message: "select operator",
    }

])
let {numberOne,numberTwo,operator} = answers;
if (numberOne && numberTwo && operator) {
    let result: number = 0;
    if (operator === "+") {
        result = numberOne + numberTwo
    }if (operator === "-") {
        result = numberOne - numberTwo
    }if (operator === "*") {
        result = numberOne * numberTwo
    }if (operator === "/") {
        result = numberOne / numberTwo
    }
    console.log("your result is", result)
}else{
    console.log("kindly enter valid input")
}