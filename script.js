let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

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

const cells = document.querySelectorAll('.cell');
const turnDisplay = document.getElementById('turn');

function placeMark(index) {
    if (!gameActive || board[index] !== '') return;

    board[index] = currentPlayer;
    cells[index].innerText = currentPlayer;
    
    if (checkWin()) {
        turnDisplay.innerText = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }
    
    if (checkDraw()) {
        turnDisplay.innerText = 'It\'s a draw!';
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    turnDisplay.innerText = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
    for (let combo of winningCombinations) {
        if (board[combo[0]] !== '' &&
            board[combo[0]] === board[combo[1]] &&
            board[combo[1]] === board[combo[2]]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return board.every(cell => cell !== '');
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    turnDisplay.innerText = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.innerText = '';
    });
}
