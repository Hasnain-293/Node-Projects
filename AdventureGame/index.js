import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    constructor(name) {
        this.fuel = 100;
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Pleasa Enter Your Name:"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "Select",
    message: "Select Your Opponent",
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let P1 = new Player(player.name);
let o1 = new Opponent(opponent.Select);
do {
    if (opponent.select == "Skeleton") {
        console.log(`${chalk.bold.green(P1.name)} VS ${chalk.bold.red(o1.name)}`);
    }
    let ask = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attact", "Drink Portion", "Run Your Life.."],
    });
    if (ask.opt == "Attact") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            P1.fuelDecrease();
            console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (P1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win "));
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink Portion") {
        P1.fuelIncrease();
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${P1.fuel}`));
    }
    if (ask.opt == "Run Your Life..") {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit();
    }
    //ZOMBIE
    if (opponent.select == "Assassin") {
        console.log(`${chalk.bold.green(P1.name)} VS ${chalk.bold.red(o1.name)}`);
    }
    let ask1 = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attact", "Drink Portion", "Run Your Life.."],
    });
    if (ask.opt == "Attact") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            P1.fuelDecrease();
            console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (P1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win "));
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink Portion") {
        P1.fuelIncrease();
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${P1.fuel}`));
    }
    if (ask.opt == "Run Your Life..") {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit();
    }
    //ASSASSIN
    if (opponent.select == "Zombie") {
        console.log(`${chalk.bold.green(P1.name)} VS ${chalk.bold.red(o1.name)}`);
    }
    let ask2 = await inquirer.prompt({
        type: "list",
        name: "opt",
        message: "Select Your Opponent",
        choices: ["Attact", "Drink Portion", "Run Your Life.."],
    });
    if (ask.opt == "Attact") {
        let num = Math.floor(Math.random() * 2);
        if (num > 0) {
            P1.fuelDecrease();
            console.log(chalk.bold.red(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
            if (P1.fuel <= 0) {
                console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
                process.exit();
            }
        }
        if (num <= 0) {
            o1.fuelDecrease();
            console.log(chalk.bold.green(`${P1.name} fuel is ${P1.fuel}`));
            console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
            if (o1.fuel <= 0) {
                console.log(chalk.green.bold.italic("You Win "));
                process.exit();
            }
        }
    }
    if (ask.opt == "Drink Portion") {
        P1.fuelIncrease();
        console.log(chalk.bold.italic.green(`You Drink Health Portion Your Fuel Is ${P1.fuel}`));
    }
    if (ask.opt == "Run Your Life..") {
        console.log(chalk.red.bold.italic("You Loose, Better Luck Next Time"));
        process.exit();
    }
} while (true);
