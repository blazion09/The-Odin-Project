const squareListeners = {};

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
      board[i][j] = "";
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
    if (checkCellStatus(board, row, col)) {
      board[row][col] = mark;
      console.table(board);
      updateSquare(board1);
      gameResult = "";
      showResult();

      //game win
      if (checkWin(board1)) {
        console.log(`${activePlayer.name}'s wins!`);
        gameResult = `${activePlayer.name}'s wins!`;
        showResult();
        activePlayer = player1;
        //game draw
      } else if (checkTie(board1)) {
        console.log("Draw!");
        gameResult = "Draw!";
        showResult();
        activePlayer = player1;
      } else {
        console.log(`${activePlayer.name}'s turn.`);
        changePlayer();
        showActivePlayer();
      }
    } else {
      gameResult = "Space already occupied ヾ( ･`⌓´･)ﾉﾞ";
      showResult();
    }
  }

  function changePlayer() {
    if (activePlayer == player1) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
  }

  function checkCellStatus(board, row, col) {
    if (board[row][col] == "X" || board[row][col] == "O") {
      return false;
    } else {
      return true;
    }
  }

  return { game, board, activePlayer, tickTheBoard };
}

function checkTie(board) {
  for (let row of board) {
    if (row.includes("")) {
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
      board[a[0]][a[1]] !== "" &&
      board[a[0]][a[1]] === board[b[0]][b[1]] &&
      board[a[0]][a[1]] === board[c[0]][c[1]]
    ) {
      return true;
    }
  }
  return false;
}

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
      const addBtnFunction = function () {
        game1.tickTheBoard(board, i, j);
      };
      squareListeners[`square-${3 * i + j + 1}`] = addBtnFunction;
      square.addEventListener("click", addBtnFunction);
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

function resetGame(board) {
  const showPlayer = document.querySelector(".active-player");
  showPlayer.textContent = "";

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const square = document.querySelector(`.square-${3 * i + j + 1}`);
      square.textContent = "";
      board[i][j] = "";
    }
  }

  gameResult = "";
  showResult();
  activePlayer = player1;
  removeButtonListener();
}

function removeButtonListener() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const square = document.querySelector(`.square-${3 * i + j + 1}`);
      const listener = squareListeners[`square-${3 * i + j + 1}`];
      if (listener) {
        square.removeEventListener("click", listener);
      }
    }
  }
}

let game1;
let board1;

const startButton = document.querySelector(".start");
startButton.addEventListener("click", function () {
  game1 = startGame();
  board1 = game1.board;
  gameResult = "";
  showResult();
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function () {
  resetGame(board1);
});
