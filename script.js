let grid = [
1, 2, 3,
4, 5, 6,
7, 8, 9];

const players = ['X', 'O'];
let turn;

//Function to choose who starts randomly
let randomStart = () =>{
  let randy = Math.random() * 100;

  if (randy < 50)  {
    turn = 0;
  }
  else {
    turn = 1;
  }
}


randomStart();
//using the function to display whos turn it is
let  text = document.getElementById("text");
text.textContent = "It's " + players[turn] + "'s turn";

//Loops through all divs, gives them an event
let allDivs = document.querySelectorAll("div");
for (let element of Array.from(allDivs)){
  element.addEventListener("click", event =>{
    element.textContent = players[turn];
    if (turn = 0) {
      turn = 1;
    }
    else{
      turn = 0;
    };
  })
}