import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";


const res = await inquirer.prompt({
    type: "number",
    name: "userinput",
    message: "Please Enter The Amount Of Second",
    validate : (input)=>{
        if (isNaN(input)){
            return "please enter valid number"
        } else if (input > 60) {
            return "second must be in 60"
        } else {
            return true;
        }
    }
});

let input = res.userinput

function starttime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds() + val);
const intervalTime = new Date(intTime);
    setInterval((()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        if (timeDiff <= 0) {
            console.log("Timer Has Expired");
            process.exit();
        }
        const min = Math.floor((timeDiff%(3600*24))/3600)
        const Sec = Math.floor(timeDiff % 60);
        console.log(`${min.toString().padStart(2, "0")}:${Sec.toString().padStart(2, "0")}`);
    }),1000)
}

starttime(input);


