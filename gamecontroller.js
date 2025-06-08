// Player factory
const Player = (name, marker) => {
    return { name, marker };
};

// Game controller module
const GameController = (() => {
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const startGame = (player1Name, player2Name) => {
        players = [
            Player(player1Name || 'Player 1', 'X'),
            Player(player2Name || 'Player 2', 'O')
        ];
        currentPlayerIndex = 0;
        gameOver = false;
        Gameboard.resetBoard();
        DisplayController.updateGameStatus(`${getCurrentPlayer().name}'s turn (${getCurrentPlayer().marker})`);
        DisplayController.renderBoard();
        DisplayController.toggleRestartButton(true);
    };

    const getCurrentPlayer = () => players[currentPlayerIndex];

    const switchPlayer = () => {
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
        DisplayController.updateGameStatus(`${getCurrentPlayer().name}'s turn (${getCurrentPlayer().marker})`);
    };

    const checkWinner = () => {
        const board = Gameboard.getBoard();
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
            [0, 4, 8], [2, 4, 6]             // diagonals
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }

        if (!board.includes(null)) {
            return 'tie';
        }

        return null;
    };

    const playRound = (cellIndex) => {
        if (gameOver) return;

        const currentPlayer = getCurrentPlayer();
        if (Gameboard.markCell(cellIndex, currentPlayer.marker)) {
            DisplayController.renderBoard();

            const winner = checkWinner();
            if (winner) {
                gameOver = true;
                if (winner === 'tie') {
                    DisplayController.updateGameStatus("It's a tie!");
                } else {
                    const winningPlayer = players.find(player => player.marker === winner);
                    DisplayController.updateGameStatus(`${winningPlayer.name} wins!`, 'success');
                }
            } else {
                switchPlayer();
            }
        }
    };

    const restartGame = () => {
        const player1Name = document.getElementById('player1').value.trim();
        const player2Name = document.getElementById('player2').value.trim();
        startGame(player1Name, player2Name);
    };

    return { startGame, playRound, getCurrentPlayer, restartGame };
})();