'use strict';
class SudokuBoard {
  constructor() {
    // Create board filled with 0s
    this.filled = 0;
    this.content = new Array(9);
    for(let x = 0; x < 9; x++) {
      this.content[x] = new Array(9);
      for(let y = 0; y < 9; y++) {
        this.content[x][y] = 0;
      }
    }
  }

  get(x,y) {
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
      console.log("ERROR: get() INVALID INPUT");
      return -1
    }
    if(x < 1 || x > 9 || y < 1 || y > 9) {
      console.log("ERROR: get() OUT OF BOUNDS");
      return -1;
    }
    return this.content[y-1][x-1];
  }

  set(x,y,val) {
    if(!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(val)) {
      console.log("ERROR: set() INVALID INPUT");
      return -1
    }
    if(x < 1 || x > 9 || y < 1 || y > 9) {
      console.log("ERROR: set() OUT OF BOUNDS");
      return -1;
    }
    this.content[y-1][x-1] = val;
  }

  printBoard() {
    for(let x = 1; x <= 9; x++) {
      var row = [];
      for(let y = 1; y <= 9; y++) {
        row.push(this.get(y,x))
      }
      console.log(row);
    }
  }
  // end of class
}

// var board = new SudokuBoard();
// board.set(3,4, 9);
// board.set(4,3, 8);
// console.log(board.get(3,4));
// board.printBoard();
