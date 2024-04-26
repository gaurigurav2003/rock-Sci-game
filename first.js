let userscore=0;
 let compscore=0;

 let choices=document.querySelectorAll(".choice");
 let msg=document.querySelector("#box1");
 let userscorepara=document.querySelector("#user-score");
 let compscorepara=document.querySelector("#comp-score");



 const getcompchoice = () => {
        const options=["rock","scissors","paper"];
    const idx=Math.floor(Math.random() * 3);
    return options[idx];
    };
   const drawgame = () => {
       console.log("game was draw");
       msg.innerText="Game Was Drawn.plz Try Again";
       msg.style.backgroundColor="#ffc107";
       msg.style.color="color: #000";
   }

   const showwinner = (userwin,compchoice,userchoice) => {
       if(userwin){
        userscore++;
        userscorepara.innerText=userscore;
           
           msg.innerText=`You Win! Your ${userchoice} beats ${compchoice}`;
           msg.style.backgroundColor="green";
           msg.style.color="color: #000";

       }else{
        compscore++;
        compscorepara.innerText=compscore;
           console.log("you lose");
           msg.innerText=`You lost!  ${compchoice} beats your ${userchoice}`;
           msg.style.backgroundColor="red";
           msg.style.color="color: #000";
       }
   }







const playgame = (userchoice) => {
    console.log("user choice",userchoice);
    //generate comp choice
    let compchoice=getcompchoice();
    console.log("comp choice",compchoice);

    if(userchoice===compchoice){
        //draw game
        drawgame();
    }else{
        let userwin= true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper" ? false: true;
        }else if(userchoice === "paper"){
            userwin=compchoice === "scissors" ? false: true;
        }else{
              userwin=compchoice === "rock" ? false: true;
        }
        showwinner(userwin,compchoice,userchoice);
    }
};





 choices.forEach((choice) => {
     choice.addEventListener("click",() =>{
         const userchoice =choice.getAttribute("id");
         console.log("choice was clicked",userchoice);
         playgame(userchoice);
     });
});























