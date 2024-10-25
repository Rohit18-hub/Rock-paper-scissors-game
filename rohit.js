let userScore=0;
let comScore=0;

const choices=document.querySelectorAll(".cohice");
const msg =document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#computer-score");

const genComputerChoice=()=>{
    const option=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return option[randIdx];

}

const drawGame=()=>{
    console.log("game was draw")
    msg.innerText="Game was Draw. play again"
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win")
        msg.innerText="You win";
        msg.style.backgroundColor="Green";
    }else{
        comScore++;
        compScorePara.innerText=comScore;
        console.log("you lose");
        msg.innerText="You lose";
        msg.style.backgroundColor="red"
    }

}

const playGame=(choiceId)=>{
    console.log("user choice=",choiceId)
    const compChoice= genComputerChoice();
    console.log("computer choice=",compChoice)
    if(choiceId === compChoice){
        drawGame();
    }else{
        let userWin= true;
        if(choiceId==="rock"){
            userWin=compChoice==="paper"? false : true;
        }else if(choiceId==="paper"){
            userWin=compChoice=== "scissor" ? false : true;
        }else{
            userWin=compChoice==="rock"? false : true;
        }
        showWinner(userWin);
    }

}


choices.forEach((cohice)=>{
    // console.log(cohice)
    cohice.addEventListener("click",()=>{
        const choiceId=cohice.getAttribute("id")
        // console.log("choice was clicked",choiceId)
        playGame(choiceId);

    })
})
