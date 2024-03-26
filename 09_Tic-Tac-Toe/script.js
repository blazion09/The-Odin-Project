function createPlayer(name, marker) {
  return {
    name: name,
    marker: marker,
  };
}
const player1 = createPlayer("Player X", "X");
const player2 = createPlayer("Player O", "O");

function gameBoard() {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = "-";
    }
  }

  const getBoard = () => board;

  return { getBoard };
}

let activePlayer = player1;

function startGame() {
  const game = gameBoard();
  const board = game.getBoard();

  console.table(board);
  console.log(`${activePlayer.name}'s turn.`);

  function tickTheBoard(board, row, col) {
    const mark = activePlayer.marker;
    board[row][col] = mark;
    console.table(board);
    if (checkWin(board1)) {
      console.log(`${activePlayer.name}'s wins!`);
    } else if (checkTie(board1)) {
      console.log("Draw!");
    } else {
      console.log(`${activePlayer.name}'s turn.`);
    }
    changePlayer();
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

function checkTie(board) {
  for (let row of board) {
    if (row.includes("-")) {
      return false;
    }
  }
  console.log("Draw");
}

function checkWin(board) {
  const winningCombinations = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ], // Row 1
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ], // Row 2
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ], // Row 3
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ], // Column 1
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ], // Column 2
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ], // Column 3
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ], // Diagonal 1
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ], // Diagonal 2
  ];

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (
      board[a[0]][a[1]] !== "-" &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return true;
    }
  }
  return false;
}

const game1 = startGame();
const board1 = game1.board;
