let grid = [
  "", "", "",
  "", "", "",
  "", "", ""];


const players = ['X', 'O'];

let turn;
let counter;
//This function starts/resets the game
let play = () => {
  grid = [
    "", "", "",
    "", "", "",
    "", "", ""];
  counter = 0;
  randomStart();
  updateTurn();
  document.getElementById('whoWon').textContent = "Who's it gonna be";


  for (let element of allDivs){
    element.textContent = "";
  }
}

//Loads game up when the page first loads
window.addEventListener("load", event =>{
  play();
});

//Restarts game from button
let button = document.querySelector('button');
button.addEventListener("click", event =>{
  play();
})

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
    let eventUpdate = () => {
      element.textContent = players[turn];
      grid[element.id] = players[turn];
      counter++;
      turn == 0 ? turn = 1 : turn = 0;
      element.removeEventListener("click", eventUpdate);
      updateTurn();
      checkWin();
    }

    element.addEventListener("click", eventUpdate);
  }

//Checking win conditions/tie conditions
let checkWin = () =>{
  if (grid[0] != "") {
    if ((grid[0] == grid[1] && (grid[0] == grid[2]) || grid[0] == grid[3] && grid[0] == grid[6])
    || grid[0] == grid[4] && grid[0] == grid[8]){
      turn == 0 ? turn = 1 : turn = 0;
      document.getElementById('text').style.display = "none";
      document.getElementById('whoWon').textContent = players[turn] + " wins!";
      return;
    }
  }
  if (grid[4] != ""){
    if((grid[4] == grid[3] && grid[4] == grid[5]) || (grid[4] == grid[7] && grid[4] == grid[1])
    || (grid[4] == grid[6] && grid[4] == grid[2])){
      turn == 0 ? turn = 1 : turn = 0;
      document.getElementById('text').style.display = "none";
      document.getElementById('whoWon').textContent = players[turn] + " wins!";
      return;
    }
  }
  if (grid[8] != ""){
    if((grid[8] == grid[7] && grid[8] == grid[6]) || (grid[8] == grid[5] && grid[8] == grid[2])){
      turn == 0 ? turn = 1 : turn = 0;
      document.getElementById('text').style.display = "none";
      document.getElementById('whoWon').textContent = players[turn] + " wins!";
      return;
    }
  }
  if (counter == 9) {
    turn == 0 ? turn = 1 : turn = 0;
    document.getElementsById('whoWon').textContent = players[turn] + " wins!";
  }
  

  
}

