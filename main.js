console.log("fuck");
var board2 = new SudokuBoard();
board2.set(3,4, 9);
console.log(board2.get(3,4));

// Construct the table

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
    tempRow.appendChild(tempCell);
  }
  initialTable.appendChild(tempRow);
}
