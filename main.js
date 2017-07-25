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

console.log("fuck");
var board2 = new SudokuBoard();
board2.set(3,4, 9);
console.log(board2.get(3,4));

// Construct the HTML table
var div4table = document.getElementById("board_array");
var initialTable = document.createElement("table");
initialTable.className = "board_table";
initialTable.id = "board_table";
div4table.appendChild(initialTable);

for(let i = 0; i < 9; i++) {
  var tempRow = document.createElement("tr");
  tempRow.className = "tableRow";
  tempRow.id = "row-" + (i+1);

  for(let j = 0; j < 9; j++) {
    var tempCell = document.createElement("td");
    tempCell.className = "tableCell";
    tempCell.id = "cell-" + (j+1) + "-" + (i+1);

    var tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.name = "numberInput";
    tempInput.id = "input-" + (j+1) + "-" + (i+1);
    tempInput.value = "";
    // Fix or report upon pressing enter
    tempInput.addEventListener("keydown", function(e) {
      var grabValueRaw = document.getElementById("input-" + (j+1) + "-" + (i+1)).value;
      var grabValue = Number(grabValueRaw);
      if(isNaN(grabValue))
        grabValue = "";
      if(grabValue < 1)
        grabValue = "";
      if(grabValue > 9)
        grabValue = "";
      if (e.keyCode == 13) {
        console.log(grabValue);
        document.getElementById("input-" + (j+1) + "-" + (i+1)).value = grabValue;
      }
    }, false);

    tempCell.appendChild(tempInput);
    if(j == 3 || j == 6)
      tempCell.style.borderWidth = "1px 1px 1px 5px";
    if(i == 3 || i == 6)
      tempCell.style.borderWidth = "5px 1px 1px 1px";
    if( (i == 3 || i == 6) && (j == 3 || j == 6) )
      tempCell.style.borderWidth = "5px 1px 1px 5px";
    tempRow.appendChild(tempCell);
  }
  initialTable.appendChild(tempRow);
}
