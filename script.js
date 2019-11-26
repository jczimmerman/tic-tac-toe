let grid = [
  "", "", "",
  "", "", "",
  "", "", ""];


const players = ['X', 'O'];

let turn;

//Function to choose who starts randomly
let randomStart = () =>{
  let randy = Math.random() * 100;
  randy < 50 ? turn = 0 : turn = 1;
}

//Display whose turn it is
let  text = document.getElementById("text");
let updateTurn = () =>{
  text.textContent = "It's " + players[turn] + "'s turn";
}

//Loops through all divs, gives them an event
let allDivs = document.querySelectorAll("div");

for (let element of allDivs){
  element.addEventListener("click", event =>{
    element.textContent = players[turn];
    grid[element.id] = players[turn];
    turn == 0 ? turn = 1 : turn = 0;
    updateTurn();
  });
}

//These will be in start/restart function
randomStart();
updateTurn();

if (grid[0] == "X") {

}
