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
  updateSquare(board);
  addButton(board);
  showActivePlayer();

  console.log(`${activePlayer.name}'s turn.`);

  function tickTheBoard(board, row, col) {
    const mark = activePlayer.marker;
    board[row][col] = mark;
    console.table(board);
    updateSquare(board1);

    if (checkWin(board1)) {
      console.log(`${activePlayer.name}'s wins!`);
      gameResult = `${activePlayer.name}'s wins!`;
      showResult();
    } else if (checkTie(board1)) {
      console.log("Draw!");
      gameResult = "Draw!";
      showResult();
    } else {
      console.log(`${activePlayer.name}'s turn.`);
    }
    changePlayer();
    showActivePlayer();
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
  return true;
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
let gameResult;

//gameboard DOM
function updateSquare(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const square = document.querySelector(`.square-${3 * i + j + 1}`);
      square.textContent = board[i][j];
    }
  }
}

function addButton(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const square = document.querySelector(`.square-${3 * i + j + 1}`);
      square.addEventListener("click", function () {
        game1.tickTheBoard(board, i, j);
      });
    }
  }
}

function showActivePlayer() {
  const showPlayer = document.querySelector(".active-player");
  showPlayer.textContent = `${activePlayer.name}'s turn.`;
}

function showResult() {
  const result = document.querySelector(".game-result");
  result.textContent = gameResult;
}
