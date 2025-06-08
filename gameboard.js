// Gameboard module
const Gameboard = (() => {
    let board = Array(9).fill(null);

    const getBoard = () => board;

    const markCell = (index, marker) => {
        if (index >= 0 && index < 9 && !board[index]) {
            board[index] = marker;
            return true;
        }
        return false;
    };

    const resetBoard = () => {
        board = Array(9).fill(null);
    };

    return { getBoard, markCell, resetBoard };
})();