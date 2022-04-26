const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("resetBtn");
const strategy = document.getElementById("strategy");
const msg = document.getElementById("msg");
const AQuiLeTour = document.getElementById("AQuiLeTour");

// let jeuActif = true
let turn = "X";
let player=turn

const spaces = ["", "", "", "", "", "", "", "", "",];

//switch le x en o
function switchTurn(currentTurn) {
  if (currentTurn === "X") {
    turn = "O";
  } else {
    turn = "X";
  }
  AQuiLeTour.innerHTML = `Tour du joueur : ${turn}`
  // verifGagne()
}

const startGame = () => {
  boxes.forEach((box, i) => {
    box.addEventListener("click", coupDAttaque);


    
  });
};

const coupDAttaque = (evenement) => {
  const id = evenement.target.id;
  // Veux voir où on a cliqué
  console.log(evenement.target.id);

  // if (!spaces[id]) {
  //   // affiche le x ou o a l'interieur de box
  //   spaces[id] = turn;
  //   evenement.target.textContent = turn;

  // }

  //A chaque clic on change de x en o
  // switchTurn(turn);

  // if (spaces[0] && spaces[1] && spaces[2]) {
  // console.log("gagneeeee");
  // }
};


const resetTryAgain = () => {
  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.textContent = "";
    });
    strategy.textContent = "Play";
    strategy.innerstrategy = "";
  });
};

resetBtn.addEventListener("click", resetTryAgain);
resetTryAgain();
startGame();

 // On vérifie si le joueur a gagné
//  verifGagne()

// =========================================


