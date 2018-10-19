const gameBoard = require('./gameBoard');

it("It should test to switch turn between player: x to player: o on the gameboard", () => {
	expect(gameBoard.switchPlayer('x')).toBe('o');
});

it("It should test to switch turn between player: o to player: x on the gameboard", () => {
	expect(gameBoard.switchPlayer('x')).toEqual('o');
});
/*
it("It should announce a gameover if the gamestatus is true ", () => {
	expect(gameBoard.checkGame(true)).toBe("Game over!");
});*/

it("It should print out inital gameboard", ()	=> {
	expect(gameBoard.drawBoard()).toBe(console.log("\n1 | 2 | 3 \n4 | 5 | 6\n7 | 8 | 9 \n"));
});



/*
it("It should return the gameboard if the gamestatus is false ", () => {
	expect(gameBoard.checkGame(false)).toReturn();
});*/




