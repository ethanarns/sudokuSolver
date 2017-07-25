'use strict';
class SudokuBoard {
  constructor() {
    // Create board filled with 0s
    this.filled = 0;
    this.content = new Array(9);
    for(let x = 0; x < 9; x++) {
      this.content[x] = new Array(9);
      for(let y = 0; y < 9; y++) {
        this.content[x][y] = 3;
      }
    }
    this.updateHTML();
  }

  get(x,y) {
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
      console.log("ERROR: get() INVALID INPUT");
      return -1;
    }
    if(x < 1 || x > 9 || y < 1 || y > 9) {
      console.log("ERROR: get() OUT OF BOUNDS");
      return -1;
    }
    return this.content[y-1][x-1];
  }

  set(x,y,val) {
    if(val == "") {
      this.content[y-1][x-1] = "";
      return;
    }
    if(!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(val)) {
      console.log("ERROR: set() INVALID INPUT");
      return -1
    }
    if(x < 1 || x > 9 || y < 1 || y > 9) {
      console.log("ERROR: set() OUT OF BOUNDS");
      return -1;
    }
    this.content[y-1][x-1] = val;
    this.updateHTML();
  }

  // Print locally to console log versus HTML
  printBoard() {
    for(let x = 1; x <= 9; x++) {
      var row = [];
      for(let y = 1; y <= 9; y++) {
        row.push(this.get(y,x))
      }
      console.log(row);
    }
  }

  updateHTML() {
    for(let i = 1; i <= 9; i++) {
      for(let j = 1; j <= 9; j++) {
        document.getElementById("input-" + i + "-" + j).value = this.get(i, j);
      }
    }
  }
  // end of class
}

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
      if(grabValueRaw.trim() == "") {
        board.set(j+1,i+1,"");
        return;
      }
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
        document.getElementById("input-" + (j+1) + "-" + (i+1)).blur();
        if(!isNaN(grabValue)) {
          board.set(j+1,i+1, grabValue); // update board array
          board.printBoard();
        }
      }
    }, false);
    // When deselected, fix
    tempInput.onblur = function(){
      var grabValueRaw = document.getElementById("input-" + (j+1) + "-" + (i+1)).value;
      if(grabValueRaw.trim() == "") {
        board.set(j+1,i+1,"");
        return;
      }
      var grabValue = Number(grabValueRaw);
      if(isNaN(grabValue))
        grabValue = "";
      if(grabValue < 1)
        grabValue = "";
      if(grabValue > 9)
        grabValue = "";
      document.getElementById("input-" + (j+1) + "-" + (i+1)).value = grabValue;
      if(!isNaN(grabValue)) {
        board.set(j+1,i+1, grabValue); // update board array
        board.printBoard();
      }
    }

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
} // HTML table constructed!

// List of places to check
var checkList = [
  //horizontal
  [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]],
  [[1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2], [9,2]],
  [[1,3], [2,3], [3,3], [4,3], [5,3], [6,3], [7,3], [8,3], [9,3]],
  [[1,4], [2,4], [3,4], [4,4], [5,4], [6,4], [7,4], [8,4], [9,4]],
  [[1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5], [8,5], [9,5]],
  [[1,6], [2,6], [3,6], [4,6], [5,6], [6,6], [7,6], [8,6], [9,6]],
  [[1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7]],
  [[1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8], [8,8], [9,8]],
  [[1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9]],
  // vertical
  [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9]],
  [[2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9]],
  [[3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9]],
  [[4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9]],
  [[5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9]],
  [[6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9]],
  [[7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8], [7,9]],
  [[8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8], [8,9]],
  [[9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8], [9,9]],
]

/*
 * Solving functions
 */
// Given a array of pairs, see if there is either 0 or 1 of each number
function areSpotsGood(spaces) {
  console.log("\nBEGINNING CHECK\n")
  //  if(spaces.constructor === Array) {
  //    console.log("ERROR: areSpotsGood() NOT GIVEN ARRAY");
  //    return;
  //  } ^ This stopped working for some dumbass reason
   if(spaces.length != 9 || typeof spaces === 'string'){
     console.log("ERROR: areSpotsGood() INVALID TYPE/COUNT!=9)");
     return;
   }
   for(var num2test = 1; num2test <= 9; num2test++) {
     let numCount = 0;
     //console.log("checking number " + num2test + "...");
     for(let spacePos = 0; spacePos < 9; spacePos++) {
       // Check if each array element is a pair
       if(spaces[spacePos].length != 2) {
         console.log("ERROR: areSpotsGood() GIVEN INVALID ARRAY (sublist!=2)");
         return;
       }
       var spotValue = board.get(spaces[spacePos][0], spaces[spacePos][1]);
       //console.log("value of grabbed spot:" + spotValue);
       if(spotValue == num2test) {
         numCount++;
       }
     }
     //console.log("" + num2test + " shows up " + numCount + " times!");
     if(numCount > 2) {
       console.log("Spots are invalid!");
       return false;
     }
   }
   console.log("Spots are valid!");
   return true;
 }

 function checkAll() {
   console.log("Starting checkAll()...");
   for(let i = 0; i < checkList.length; i++) {
     if(!areSpotsGood(checkList[i])) {
       console.log("Invalid list found in checkAll(), chart invalid.")
       return;
     }
   }
   console.log("Entire chart checks out!");
 }


 document.addEventListener("keydown", function(e) {
   if (e.keyCode == 9) {
     checkAll();
   }
 }, false);


// Tests
var board = new SudokuBoard();
console.log("fuck");
board.set(3,4, 9);
