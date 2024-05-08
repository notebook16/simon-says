 let gameSeq = []; 
 let userSeq = [];

 let btns = ["yellow" , "red", "purple" , "green"];

 let started = false;
 let level = 0;

 let h2 = document.querySelector("h2");

 document.addEventListener("keypress", function(){
    if(started == false)
        {
            
            started = true;

            levelUpdated();
        }
});

function btnFlash(btn)
{
    btn.classList.add("flash");
    //removing flash using timeout
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250); //ONE SECOND
}


function userFlash(btn)
{
    btn.classList.add("user-flash");
    //removing flash using timeout
    setTimeout(function () {
        btn.classList.remove("user-flash");
    }, 250); //ONE SECOND
}

function levelUpdated()
{
    userSeq = []; //empty or resest user seq everytime level updated
    level++;
    h2.innerText = `Level ${level}`;

    //random button to choose by computer
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor); //pushing color in sequence

    btnFlash(randbtn);

}


function checkAns(idx)
{
 
    if(userSeq[idx] == gameSeq[idx]) //checking last value
        {
            if(userSeq.length == gameSeq.length)
                {
                    setTimeout(levelUpdated,1000); //delay 
                    //only update level if it;s a last color of game seq
                }
        }
        else{
            h2.innerHTML = `game over, your score was <b>${level}</b> <br>press any key to restart`;
           document.querySelector("body").style.backgroundColor = "red";
           setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";

           }, 150);
            reset();
        }
}

function btnPress (){
    
  
    let btn  = this; //this identified the clicked button
    userFlash(btn);
    userc = btn.getAttribute("id");
    userSeq.push(userc)
    checkAns(userSeq.length-1);

    
}

let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
     btn.addEventListener("click" , btnPress);
}



//function to reset
function reset()
{
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

