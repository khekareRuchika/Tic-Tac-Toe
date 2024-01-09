let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerY
//2D Array
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
    console.log("Box was clicked");
    if(turnO){
        box.innerText = "O";
        turnO= false;
    }else{
        box.innerText= "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
   });
});

const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const resetGame = ()=>{
    enableBoxes();
    msgContainer.classList.add("hide")
}

const showWinner = (winner)=>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    // boxes.disabled=true;   //wrong
}
const checkWinner = ()=>{
    for(let pattern of winPatterns){
        let posVal1 = boxes[pattern[0]].innerText;
        let posVal2 = boxes[pattern[1]].innerText;
        let posVal3 = boxes[pattern[2]].innerText;
        if(posVal1!="" && posVal2!="" && posVal3!=""){
        if(posVal1 === posVal2 && posVal2 === posVal3 ){
            console.log("winner " + posVal1 );
            showWinner(posVal1);
        }
    }
        // console.log(pattern);
    }
};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);