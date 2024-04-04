let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnX = true;


const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];            

// these are the winning patterns, they are constant. 


const resetGame = () => {
  turnX = true;
  enableAllBoxes();
  msgContainer.classList.add("hide");
}


const enableAllBoxes = () => {             // disables all buttons at once
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}


const disableAllBoxes = () => {            //disables all buttons at once
 boxes.forEach((box) => {
  box.disabled = true;
 });
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnX) {                          // Player X turn
      box.style.color = "red";
      box.innerText = "X";
      turnX = false;
    }
    else {                               // Player O turn
      box.style.color = "green"
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;                 // after clicking 1 time disabling the button 
    checkWinner();                      // calling checkWinner fn for every button click event 
  });
});

const showWinner = (winner) => {
  msg.innerText = `Congratulations 🎉🏆🎊, Player ${winner} Won the Game `;
  msgContainer.classList.remove("hide");
  disableAllBoxes();                   // disabling all buttons via disableAllBoxes() fn
}


const checkWinner = () => {
  for (pattern of winningPatterns) {           // iteraing through the winningPatterns Array 
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;     // accessing box text with winningPattern array element
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {      // checking all 3 has value in it & not empty
      if (pos1 === pos2 && pos2 === pos3) {             // means that all 3 has same value either "X" or "O"
        showWinner(pos1);
      }
    }
  }
}


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click", resetGame);