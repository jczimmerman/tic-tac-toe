let grid = [
  "", "", "",
  "", "", "",
  "", "", ""];


const players = ['X', 'O'];

let turn;
let counter = 0;
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
    turn == 0 ? turn = 1 : turn = 0;
    counter += 1;
    console.log(counter);
    element.removeEventListener("click", eventUpdate);
    checkWin();
    updateTurn();
  }

  element.addEventListener("click", eventUpdate);
}

//These will be in start/restart function
randomStart();
updateTurn();

let checkWin = () => {
  
  if (grid[0] != "") {

    console.log('check', '1');
    if ((grid[0] == grid[1] && (grid[0] == grid[2]) || grid[0] == grid[3] && grid[0] == grid[6])
    || grid[0] == grid[4] && grid[0] == grid[8]){
      return true;
      
    }
  }
  if (grid[4] != "") {
    console.log('check', '2');
    if((grid[4] == grid[3] && grid[4] == grid[5]) || (grid[4] == grid[7] && grid[4] == grid[1])
    || (grid[4] == grid[6] && grid[4] == grid[2])){
      return true;
      
    }
  }
  if (grid[8] != "") {
    console.log('check', '3');
    if((grid[8] == grid[7] && grid[8] == grid[6]) || (grid[8] == grid[5] && grid[8] == grid[2])){
      return true;
    }
  }
  if (checkWin() == false) {
    console.log("tie");
  }
}

