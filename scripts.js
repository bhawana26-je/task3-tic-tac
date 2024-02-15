let currentPlayer = 'X';
let gameActive = true;
let player = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const message = document.getElementById('message');

function checkWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (player[a] && player[a] === player[b] && player[a] === player[c]) {
            gameActive = false;
            message.innerText = `${player[a]} wins!`;
            alert(`${player[a]} wins!`);
            return;
        }
    }

    if (!player.includes('')) {
        gameActive = false;
        message.innerText = "It's a draw!";
        alert("It's a draw!");
    }
}

function handleClick(index) {
    if (!gameActive || player[index] !== '') return;

    player[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;

    checkWin();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    player = ['', '', '', '', '', '', '', '', ''];
    message.innerText = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
    }
}
