function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}
const player1 = createPlayer("Player One", "X");
const player2 = createPlayer("Player Two", "O");

//create board
const board = (function createBoard() {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = i * column + j + 1;
    }
  }
  return board;
})();

let activePlayer = player1;
const switchTurn = () => {
  activePlayer = activePlayer === player1 ? player2 : player1;
  console.log(`${activePlayer.name}'s turn`);
};

let position1 = board[0][0];

function playRound() {
  console.table(board);

  for (let i = 0; i < 3; i++) {
    let playerChoice = prompt(`${activePlayer.name}'s turn`);
    for (let i = 1; i<10; i++){
      if playerChoice
    }
    switchTurn();
    console.table(board);
  }
}
