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
    tempInput.value = "0";
    tempInput.addEventListener("keydown", function(e) {
      var grabValueRaw = document.getElementById("input-" + (j+1) + "-" + (i+1)).value;
      var grabValue = Number(grabValueRaw);
      if(isNaN(grabValue)){
        grabValue = 0;
      }
      if(grabValue < 0) {
        grabValue = 0;
      }
      if(grabValue > 9) {
        grabValue = 0;
      }
      if (e.keyCode == 13) {
        console.log(grabValue);
        document.getElementById("input-" + (j+1) + "-" + (i+1)).value = grabValue;
      }
    }, false);
    tempCell.appendChild(tempInput);
    if(j == 3 || j == 6) {
      tempCell.style.borderWidth = "1px 1px 1px 5px";
    }
    if(i == 3 || i == 6) {
      tempCell.style.borderWidth = "5px 1px 1px 1px";
    }
    if( (i == 3 || i == 6) && (j == 3 || j == 6) ) {
      tempCell.style.borderWidth = "5px 1px 1px 5px";
    }
    tempRow.appendChild(tempCell);
  }
  initialTable.appendChild(tempRow);
}
