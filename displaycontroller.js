// Display controller module
const DisplayController = (() => {
    const gameboardElement = document.getElementById('gameboard');
    const statusMessageElement = document.getElementById('status-message');
    const player1Input = document.getElementById('player1');
    const player2Input = document.getElementById('player2');
    const startButton = document.getElementById('start-btn');
    const restartButton = document.getElementById('restart-btn');

    const renderBoard = () => {
        gameboardElement.innerHTML = '';
        const board = Gameboard.getBoard();

        board.forEach((cell, index) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell) {
                cellElement.classList.add(cell.toLowerCase());
                cellElement.textContent = cell;
            }
            cellElement.addEventListener('click', () => handleCellClick(index));
            gameboardElement.appendChild(cellElement);
        });
    };

    const handleCellClick = (index) => {
        GameController.playRound(index);
    };

    const updateGameStatus = (message, type = 'info') => {
        statusMessageElement.textContent = message;
        statusMessageElement.className = ''; // Reset classes
        statusMessageElement.classList.add(type);
    };

    const toggleRestartButton = (show) => {
        restartButton.style.display = show ? 'inline-block' : 'none';
    };

    const bindStartButton = () => {
        startButton.addEventListener('click', () => {
            const player1Name = player1Input.value.trim();
            const player2Name = player2Input.value.trim();
            GameController.startGame(player1Name, player2Name);
        });
    };

    const bindRestartButton = () => {
        restartButton.addEventListener('click', () => {
            GameController.restartGame();
        });
    };

    return { 
        renderBoard, 
        updateGameStatus, 
        bindStartButton, 
        bindRestartButton,
        toggleRestartButton
    };
})();