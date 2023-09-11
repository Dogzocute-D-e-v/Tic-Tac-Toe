let currentPlayer = "X";
let gameEnded = false;
const cells = document.querySelectorAll("td");
const message = document.querySelector(".message");

function makeMove(cellIndex) {
  if (!gameEnded && !cells[cellIndex].textContent) {
    cells[cellIndex].textContent = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);
    if (checkWin(currentPlayer)) {
      message.innerHTML = `<span class="player">${currentPlayer}</span> wins!`;
      gameEnded = true;
    } else if (checkDraw()) {
      message.textContent = "It's a draw!";
      gameEnded = true;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      message.innerHTML = `<span class="player">${currentPlayer}</span>'s turn`;
    }
  }
}

function checkWin(player) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  return winningCombinations.some(combination => {
    return combination.every(index => cells[index].classList.contains(player));
  });
}

function checkDraw() {
  return Array.from(cells).every(cell => cell.textContent);
}

function resetGame() {
  currentPlayer = "X";
  gameEnded = false;
  cells.forEach(cell => {
    cell.textContent = "";
    cell.className = "";
  });
  message.innerHTML = `<span class="player">${currentPlayer}</span>'s turn`;
}