// let userscore=0;
// let compscore=0;
// const choices= document.querySelectorAll(".choice");
//  const msg=document.querySelector("#msg")

//  const drawgame= () =>{
//     console.log("game was draw")
//     msg.innerText ="game was graw play again";
//     msg.style.backgroundColor="#081b31";
//    };
   

//  const showwinner =(userwin,userchoice,compchoice)=>{
//     if(userwin){ 
//         console.log("you win!")
//         msg.innerText =`you win !  ${userchoice} beats ${compchoice}`;
//         msg.style.backgroundColor="green";
//     }else{
//         console.log("you lose")
//         msg.innerText =`you lost. ${compchoice} beats ${userchoice}`;
//         msg.style.backgroundColor="red";
//     }
//  }
 


// choices.forEach((choice)=>{
//     // console.log(choice);
//     choice.addEventListener("click",()=>{
//        const userchoice= choice.getAttribute("id")
// // console.log("the choice is ", userchoice);
// playgame(userchoice);
//     });
// });
// playgame= (userchoice) =>{
// console.log("user choice =", userchoice)
// // generate user choice
// const compchoice=gencomputerchoice();
// console.log("comp choice =",compchoice)

//  if (userchoice===compchoice){
//       drawgame();
// } else{
//     let userwin= true;
//     if(userchoice==="rock"){
//     // scissors,paper
// userwin=compchoice==="paper"?false:true;
// } else if(userchoice==="paper"){
//     // scissors,paper
// userwin=compchoice==="scissors"?false:true;
// }else{
//     userwin=compchoice==="rock"? false:true;
// }
// showwinner(userwin,userchoice,compchoice);
//  }

// };
// const gencomputerchoice= () =>{
// const options =["paper" ,"rock", "scissor"];
// // Math.random();//ye functiom  hai  jo ki 0 se 1 ke bich le ramdom number return kr ta hai 
// // Math.floor(math.random()*3);//math.floor esa function hai jo jese ki math.random 0.6382 something value deta hai jo ki 0 se1  ke bech me  to use 3 se guna krne per 0se 2 ke bech ki vlaue aa jaegi to math.floor us vale ko pech ki unwanted value  ko hata dega 
// const randidx=Math.floor(Math.random()*3);
// return options[randidx];
// }
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
