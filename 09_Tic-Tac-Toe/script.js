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

  return { getBoard };
}

function startGame() {
  const game = gameBoard();
  const board = game.getBoard();
  let activePlayer = player1;
  console.table(board);

  function tickTheBoard(board, row, col) {
    const mark = activePlayer.marker;
    board[row][col] = mark;
    console.table(board);
    changePlayer();
    console.log(`${activePlayer.name}'s turn.`);
  }

  function changePlayer() {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  }

  return { game, board, activePlayer, tickTheBoard };
}

const game1 = startGame();
const board1 = game1.board;
