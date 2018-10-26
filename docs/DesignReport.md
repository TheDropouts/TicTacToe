## TicTacToe Design

## Introduction

Our first attempt was to make the game as simple as possible, we wrote it for a console, later on we decided to deploy it also as an web-app. The game is simple and only allows two players to play it at the same computer at the same time. We wrote our business logic with TDD (Test Driven Development).  We worked on feature branches and tried to maintain source control. We used CircleCI for our project. The web-version is deployed with https://the-dropouts.herokuapp.com/


## Game Rules

- Tic Tac Toe is a two player game. 

- The first player plays with X figure and the second player plays with O figure. 

- Player X always starts the game. 

- The game board is a grid of squares 3x3. 

- Players take turns to mark empty squares with their figures. 

- The goal is to get 3 squares marked in a row. Figures can be marked horizontally, vertically and diagonally 

- Player that first gets 3 squares marked in a row wins the game.

- If all 9 squares are marked without any of the players getting 3 squares marked in a row, the game ends in a tie. 

- In order to start a new game, press the “reset” button.

## Game Stages

The inital game stages are as follows:

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    1    |   2   |   3   |
|    4    |   5   |   6   |
|    7    |   8   |   9   |

*Welcoming message*

Player X starts the game 
Input: 1 

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   2   |   3   |
|    4    |   5   |   6   |
|    7    |   8   |   9   |

Player O it's your turn!
Input: 4

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   2   |   3   |
|    o    |   5   |   6   |
|    7    |   8   |   9   |

Player X it's your turn!
Input: B

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   2   |   3   |
|    o    |   5   |   6   |
|    7    |   8   |   9   |

Illegal Move!
Input: 2

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   x   |   3   |
|    o    |   5   |   6   |
|    7    |   8   |   9   |

Player O it's your turn!
Input: 7

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   x   |   3   |
|    o    |   5   |   6   |
|    o    |   8   |   9   |



Player X it's your turn!
Input: 3

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   x   |   x   |
|    o    |   5   |   6   |
|    o    |   8   |   9   |


Player O it's your turn!
Input: 5

| Tic    | Tac   | Toe   |
| ------- |:-----:| -----:|
|    x    |   x   |   x   |
|    o    |   5   |   6   |
|    o    |   8   |   9   |


Gameover! 
Player X is the winner 


Winning combinations of the game are: 
[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
[2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

