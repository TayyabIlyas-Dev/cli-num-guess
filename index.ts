import inquirer from "inquirer"
//                    [project  CLI NUM GUESS]

// my first target is
// 1) make a code to genrate a random  number      -Done
// 2) user input                                   -Done
// 3) compare user input with random num which genrated


// const randomNumber = 13;

// const answer = await inquirer.prompt([
//     {
//         name:"userinput",
//         message:"please guess a number",
//         type:"number",
        
        
//     }
// ]);

// if(randomNumber === answer.userinput){
//     console.log("you Win --- U guess a Same NUmber");
    
// }
// else{
//     console.log("you Lose --- U guess A Different Number");
    
// }




const randomNumber = Math.floor(Math.random()*5 + 1);

const answer = await inquirer.prompt([
    {
        name:"userinput",
        message:"please guess a number Between 1-5",
        type:"number",
        
        
    }
]);

if(randomNumber === answer.userinput){
    console.log("you Win --- U guess a Same NUmber ");
    console.log(`Answer is ${randomNumber}`);
    
    
}
else{
    console.log("you Lose --- U guess A Different Number");
    console.log(`Answer is ${randomNumber}`);

}
