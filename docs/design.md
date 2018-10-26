Tic Tac Toe is a two player game. 

The first player plays with X figure and the second player plays with O figure. 

Player X always starts the game. 

The game board is a grid of squares 3x3. 

Players take turns to mark empty squares with their figures. 

The goal is to get 3 squares marked in a row. Figures can be marked horizontally, vertically and diagonally 

Player that first gets 3 squares marked in a row wins the game.

If all 9 squares are marked without any of the players getting 3 squares marked in a row, the game ends in a tie. 

In order to start a new game, press the “reset” button.


The inital game stages are as follows:



*Welcoming message*

Player X starts the game 
Input: 1 
|   |   |   |   |   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
1 | 2 | 3 
4 | 5 | 6
7 | 8 | 9

Player O it's your turn!
Input: 4
----------
X | 2 | 3 
4 | 5 | 6
7 | 8 | 9

Player X it's your turn!
Input: B
----------
X | 2 | 3 
O | 5 | 6
7 | 8 | 9

Illegal Move!
Input: 2
----------
X | 2 | 3 
O | 5 | 6
7 | 8 | 9

Player O it's your turn!
Input: 7
----------
X | X | 3 
O | 5 | 6
7 | 8 | 9


Player X it's your turn!
Input: 3
----------
X | X | 3 
O | 5 | 6
O | 8 | 9

Player X it's your turn!
Input: 3
----------
X | X | X 
O | 5 | 6
O | 8 | 9

Player O it's your turn!
Input: 5
----------
X | X | X 
O | 5 | 6
O | 8 | 9

Gameover! 
Player X is the winner 
Input: 5
----------
X | X | X 
O | 5 | 6
O | 8 | 9

Winning combinations of the game are: 
[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];
