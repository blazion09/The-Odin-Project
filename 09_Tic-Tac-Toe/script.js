function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}
const player1 = createPlayer("Player One", "X");
const player2 = createPlayer("Player Two", "O");

function gameBoard() {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = i * column + j + 1;
    }
  }

  const getBoard = () => board;

  //mark the board

  // const markBoard = () => {
  //   const availableCells = board.
  // };

  return { getBoard };
}

const game = gameBoard();
const board = game.getBoard();
