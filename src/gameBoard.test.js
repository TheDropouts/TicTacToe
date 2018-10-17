const gameBoard = require('./gameBoard');

it("It should test to switch turn between player: x to player: o on the gameboard", () => {
	expect(gameBoard.switchPlayer('x')).toBe('o');
});

it("It should test to switch turn between player: o to player: x on the gameboard", () => {
	expect(gameBoard.switchPlayer('x')).toEqual('o');
});

it("It should announce a gameover if the gamestatus is true ", () => {
	expect(gameBoard.checkGame('x')).toEqual('o');
});


it("It should print out inital gameboard", ()	=> {
	expect(gameBoard.drawBoard()).toBe("['1','2','3','4','5','6','7','8','9']")
});

