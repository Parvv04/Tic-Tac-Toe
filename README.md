# Tic Tac Toe Game

A modern, responsive implementation of the classic Tic Tac Toe game with clean UI and modular JavaScript architecture.

---

## Features

- 🎨 **Modern UI** with responsive design
- 👥 **Player name customization**
- 🔄 **Game restart** functionality
- 🏆 **Win detection** for all possible combinations
- 🤝 **Tie detection** when board is full
- 📱 **Mobile-friendly** interface
- 🧩 **Modular code** architecture (MVC pattern)

---

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- JavaScript (ES6 Modules)

---

## File Structure
~~~
tic-tac-toe/
├── index.html # Main HTML file
├── styles.css # All CSS styles
├── gameboard.js # Game board state management
├── gamecontroller.js # Game logic and flow control
├── displaycontroller.js# DOM manipulation and UI updates
├── main.js # Initialization code
└── README.md # This documentation
~~~
---


## Installation

1. Clone the repository or download the ZIP file
2. Open `index.html` in your browser
3. Start playing!

---

## How to Play

1. Enter player names (optional)
2. Click "Start Game"
3. Players take turns clicking on the board to place their marks
4. First player to get 3 in a row wins!
5. Click "Restart Game" to play again

---

### Architecture Overview

The game follows a modular pattern with clear separation of concerns:

- **Gameboard**: Manages the game state (3x3 grid)
- **GameController**: Handles game rules, turns, and win detection
- **DisplayController**: Manages all DOM updates and user interactions

## Future Enhancements

- [ ] Score tracking across multiple games
- [ ] Player timer for turns
- [ ] AI opponent option
- [ ] Animations for winning line
- [ ] Sound effects

---

## 📬 Author

Created by Parvv04   
Feel free to star ⭐ the repo, fork it, or suggest improvements!

---

**Enjoy the game!** 🎮
