const gameBoard = require('./gameBoard');

it("It should print out inital gameboard", ()	=> {
	expect(gameBoard.drawBoard()).toBe("\n1 | 2 | 3\n4 | 5 | 6\n7 | 8 | 9\n\n");
});

it("It should announce a gameover if the gamestatus is true ", () => {
	expect(gameBoard.checkGame(true)).toBe(true);
});

it("It should return the gameboard if the gamestatus is false ", () => {
	expect(gameBoard.checkGame(false)).toEqual(false);
});

it("It should return the gameboard if the gamestatus is false ", () => {
	expect(gameBoard.checkGame(false)).toEqual(false);
});

it("It Should return false", ()	=> {
	expect(gameBoard.upDateGameBoard('x1')).toBe(false);
});
