import inquirer from "inquirer";
interface ansType{
    userid:string
    userpin:number
    accounttype:string
    transtactiontype:string
    amount:number
}
const answers: ansType = await inquirer.prompt([
    {

    type: "input",
    name: "userid",
    message: "kindly enter your id"
    
},

{

    type: "number",
    name: "userpin",
    message: "kindly enter your pin"
    
},

{

    type: "list",
    name: "accounttype",
    choices: ["current","seaving"],
    message:"select your account type",
    
},

{

    type: "list",
    name: "transactionType",
    choices: ["fastcash","withdrawl"],
    message:"select your transaction",
    when(answers) {
        return answers.accounttype
    },
    
},

{

    type: "list",
    name: "amount",
    choices: [1000, 3000, 10000, 40000],
    message:"enter your amount",
    when (answers){
        return answers.transactionType == "fastcash"
    }
    
},

{

    type: "number",
    name: "amount",
    message:"enter your amount",
    when (answers){
        return answers.transactiontype == "withdraw"
    }
    
},


])

if (answers.userid && answers.userpin) {
    const balance =Math.floor( Math.random()*10000000)
    console.log(balance)
    const enteredamount = answers.amount;
    if(balance < enteredamount){
      const remaning = balance - enteredamount;
    console.log("your remaining balance is", remaning)

    }else {
        console.log("insuficiant balance")
    }
}