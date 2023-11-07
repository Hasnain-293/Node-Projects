import { faker } from "@faker-js/faker";
import inquirer from "inquirer";
import chalk from "chalk";
// Customer Class
class Customer {
    constructor(fName, lName, age, gender, mob, acc) {
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
        this.gender = gender;
        this.accNumber = acc;
        this.mobNumber = mob;
    }
}
// Class Bank
class Bank {
    constructor() {
        this.customer = [];
        this.account = [];
    }
    addCustomer(obj) {
        this.customer.push(obj);
    }
    addAccountNumber(obj) {
        this.account.push(obj);
    }
    transaction(accObj) {
        let NewAccount = this.account.filter((acc) => acc.accNumber !== accObj.accNumber);
        this.account = [...NewAccount, accObj];
    }
}
let myBank = new Bank;
// Create Customer 
for (let i = 1; i <= 3; i++) {
    let fName = faker.person.firstName('male');
    let lName = faker.person.lastName();
    let num = parseInt(faker.phone.number('3##########'));
    let cus = new Customer(fName, lName, 18 * i, "male", num, 1000 + i);
    myBank.addCustomer(cus);
    myBank.addAccountNumber({ accNumber: cus.accNumber, balance: 100 * i });
}
//Bank functionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Please select the service",
            choices: ["ViewBalance", "Cash Withdraw", "Cash Deposit"]
        });
        if (service.select == "ViewBalance") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number",
            });
            let account = myBank.account.find((acc) => acc.accNumber, res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let name = myBank.customer.find((item) => item.accNumber == account?.accNumber);
                console.log(`Dear ${chalk.green.italic(name?.firstName)} ${chalk.green.italic(name?.lastName)} 
        Your Account Balance Is ${chalk.bold.blueBright(`$${account.balance}`)}`);
            }
        }
        if (service.select == "Cash Withdraw") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number",
            });
            let account = myBank.account.find((acc) => acc.accNumber, res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter Your Amount",
                    name: "rupee"
                });
                if (ans.rupee > account.balance) {
                    console.log(chalk.red.bold("insuficient Balance...."));
                }
                let newBalance = account.balance - ans.rupee;
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
        if (service.select == "Cash Deposit") {
            let res = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Please Enter Your Account Number",
            });
            let account = myBank.account.find((acc) => acc.accNumber, res.num);
            if (!account) {
                console.log(chalk.red.bold.italic("Invalid Account Number"));
            }
            if (account) {
                let ans = await inquirer.prompt({
                    type: "number",
                    message: "Please Enter Your Amount",
                    name: "rupee"
                });
                let newBalance = account.balance + ans.rupee;
                bank.transaction({ accNumber: account.accNumber, balance: newBalance });
            }
        }
    } while (true);
}
bankService(myBank);
