'use strict'; // Ensure good practices

class SudokuBoard {

  constructor() {
    this.filled = 0;
    // Create 2D array "content" to hold values, not the HTML
    this.content = new Array(9);
    for(let x = 0; x < 9; x++) {
      this.content[x] = new Array(9);
      for(let y = 0; y < 9; y++) {
        this.content[x][y] = "";
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
    this.set_noHTML(x,y,val);
    this.updateHTML();
  }

  set_noHTML(x,y,val) {
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
  }

  // Print board to *console log*, not HTML
  printBoard() {
    for(let x = 1; x <= 9; x++) {
      var row = [];
      for(let y = 1; y <= 9; y++) {
        row.push(this.get(y,x))
      }
      console.log(row);
    }
  }

  resetBoard() {
    for(let i = 1; i <= 9; i++) {
      for(let j = 1; j <=9; j++) {
        this.set(i,j, "");
      }
    }
    this.updateHTML;
  }

  // When transferred to prettier client, change this first!
  updateHTML() {
    for(let i = 1; i <= 9; i++) {
      for(let j = 1; j <= 9; j++) {
        document.getElementById("input-" + i + "-" + j).value = this.get(i, j);
      }
    }
  }
  // end of class
}

// List of places to check
var checkList = [
  //horizontal
  [[1,1], [2,1], [3,1], [4,1], [5,1], [6,1], [7,1], [8,1], [9,1]], // index 0
  [[1,2], [2,2], [3,2], [4,2], [5,2], [6,2], [7,2], [8,2], [9,2]],
  [[1,3], [2,3], [3,3], [4,3], [5,3], [6,3], [7,3], [8,3], [9,3]],
  [[1,4], [2,4], [3,4], [4,4], [5,4], [6,4], [7,4], [8,4], [9,4]],
  [[1,5], [2,5], [3,5], [4,5], [5,5], [6,5], [7,5], [8,5], [9,5]],
  [[1,6], [2,6], [3,6], [4,6], [5,6], [6,6], [7,6], [8,6], [9,6]],
  [[1,7], [2,7], [3,7], [4,7], [5,7], [6,7], [7,7], [8,7], [9,7]],
  [[1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8], [8,8], [9,8]],
  [[1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9], [8,9], [9,9]],
  // vertical
  [[1,1], [1,2], [1,3], [1,4], [1,5], [1,6], [1,7], [1,8], [1,9]], // index 9
  [[2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7], [2,8], [2,9]],
  [[3,1], [3,2], [3,3], [3,4], [3,5], [3,6], [3,7], [3,8], [3,9]],
  [[4,1], [4,2], [4,3], [4,4], [4,5], [4,6], [4,7], [4,8], [4,9]],
  [[5,1], [5,2], [5,3], [5,4], [5,5], [5,6], [5,7], [5,8], [5,9]],
  [[6,1], [6,2], [6,3], [6,4], [6,5], [6,6], [6,7], [6,8], [6,9]],
  [[7,1], [7,2], [7,3], [7,4], [7,5], [7,6], [7,7], [7,8], [7,9]],
  [[8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8], [8,9]],
  [[9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8], [9,9]],
  // boxes
  [[1,1], [2,1], [3,1], [1,2], [2,2], [3,2], [1,3], [2,3], [3,3]], // index 18
  [[4,1], [5,1], [6,1], [4,2], [5,2], [6,2], [4,3], [5,3], [6,3]],
  [[7,1], [8,1], [9,1], [7,2], [8,2], [9,2], [7,3], [8,3], [9,3]],
  [[1,4], [2,4], [3,4], [1,5], [2,5], [3,5], [1,6], [2,6], [3,6]],
  [[4,4], [5,4], [6,4], [4,5], [5,5], [6,5], [4,6], [5,6], [6,6]],
  [[7,4], [8,4], [9,4], [7,5], [8,5], [9,5], [7,6], [8,6], [9,6]],
  [[1,7], [2,7], [3,7], [1,8], [2,8], [3,8], [1,9], [2,9], [3,9]],
  [[4,7], [5,7], [6,7], [4,8], [5,8], [6,8], [4,9], [5,9], [6,9]],
  [[7,7], [8,7], [9,7], [7,8], [8,8], [9,8], [7,9], [8,9], [9,9]]
]

// Wipes board
function reset() {
  board.resetBoard();
  //board.printBoard();
  board.updateHTML();
}

// Gets sequential number on board
function getValAtNum(count) {
  if(count >= 80) {
    console.log("ERROR: getValAtNum() OUT OF BOUNDS (" + count + ")");
  }
  var xPos = count%9;
  var yPos = Math.floor(count/9);
  return board.get(xPos + 1,yPos + 1);
}

function setValAtNum(count, value) {
  var xPos = count%9;
  var yPos = Math.floor(count/9);
  board.set_noHTML(xPos + 1,yPos + 1, value);
}

/*
 * Solving functions
 */

// Given a array of pairs, see if there is either 0 or 1 of each number
function areSpotsGood(spaces) {
  if(spaces.length != 9 || typeof spaces === 'string'){
    console.log("ERROR: areSpotsGood() INVALID TYPE/COUNT!=9)");
    return;
  }
  for(var num2test = 1; num2test <= 9; num2test++) {
    let numCount = 0;
    for(let spacePos = 0; spacePos < 9; spacePos++) {
      // Check if each array element is a pair
      if(spaces[spacePos].length != 2) {
        console.log("ERROR: areSpotsGood() GIVEN INVALID ARRAY (sublist!=2)");
        return;
      }
      let spotValue = board.get(spaces[spacePos][0], spaces[spacePos][1]);
      if(spotValue == num2test) {
        numCount++;
      }
    }
    if(numCount > 1) {
      // console.log("  Count of "
      //   + num2test + " greater than 1 (" + numCount + ")");
      return false;
    }
  }
  return true;
}

// Checks all 1-9 rule areas
function checkAll() {
 //console.log("checkAll(): Starting...");
 for(let i = 0; i < checkList.length; i++) {
   if(!areSpotsGood(checkList[i])) {
     //console.log("  Invalid array [" + i +"], board incorrect.");
     return false;
   }
 }
 //console.log("  Entire board correct!");
 return true;
}

// Returns true if the placement of the value works, false if not
function testAt(xPos, yPos, value) {
  //console.log("Testing [" + xPos + ", " + yPos + "]");
  if(board.get(xPos, yPos) != ""){
    //console.log("ERROR: testAt() FED FILLED TILE (" + board.get(xPos, yPos) + ")");
    return false;
  }
  board.set_noHTML(xPos, yPos, value);
  var result = checkAll();
  board.set_noHTML(xPos, yPos, ""); // set back to before, empty
  return result;
}

// testAt() encapsulation for single number positioning
function testAtNum(numPos, value) {
  var xPos = numPos%9;
  var yPos = Math.floor(numPos/9);
  return testAt(xPos+1, yPos+1, value);
}

// Master function for solving
function solveSudoku() {
  var isFilled = true;
  for(let i = 0; i < 81; i++) {
    if(getValAtNum(i) == "") {
      isFilled = false;
      break;
    }
  }
  if(isFilled) {
    alert("Graph is already full");
    return;
  }

  // Set elements to grey
  fadeElements(true);

  var solver = window.setTimeout(function() {
    solve_recurse(0);
  },100);

  // Return elements to black
  var resetter = window.setTimeout(function() {
    fadeElements(false);
    board.updateHTML();
  }, 150);

  board.updateHTML();
}

// A function encapulating
function fadeElements(shouldFade) {
  var numbersId = "sudoku_solver";
  var lineClass = "input-box";
  var fadeColor = "lightgrey";
  var normalColor = "black";

  var list = document.getElementsByClassName(lineClass);

  if(shouldFade) {
    document.getElementById(numbersId).style.color = fadeColor;
    for(let i = 0; i < list.length; i++) {
      list[i].style.color = fadeColor;
    }
  }
  else {
    document.getElementById(numbersId).style.color = normalColor;
    for(let i = 0; i < list.length; i++) {
      list[i].style.color = normalColor;
    }
  }
}

// Returns true if reached end, if reaches point which nothing works, false
function solve_recurse(numPos) {
  //console.log("Testing at " + numPos + "...");
  // Ensure this isn't on a filled square
  if(numPos>80) {
    console.log("COMPLETE!");
    // Do last place if taken
    return true;
  }
  while(getValAtNum(numPos) != "") {
    // Catch to see if it got to the end
    if(numPos >= 80) {
      return true;
    }
    numPos++;
  }
  // ensure next one isn't on a filled square

  for(let i = 1; i <= 9; i++) {
    let works = testAtNum(numPos, i);
    if(!works) {
      //console.log("" + i + " doesn't work, doing next...");
      continue;
    }
    //console.log("" + i + "works!");
    setValAtNum(numPos, i);
    let solved = solve_recurse(numPos + 1);
    if(solved) {
      return true;
    }
    else {
      setValAtNum(numPos, "");
    }
  }
  //console.log("Returned false, nothing worked");
  return false;
}


/*
 * Initialize; entirely separate from solver
 */

// Construct the HTML table
// Note: not encapsulated with a function, use "let" instead of "var" in loops
var div4table = document.getElementById("board_array");
var initialTable = document.createElement("table");
initialTable.className = "board_table";
initialTable.id = "board_table";
div4table.innerHTML = ""; // clear the explanation text
div4table.appendChild(initialTable);

for(let i = 0; i < 9; i++) {
  let tempRow = document.createElement("tr");
  tempRow.className = "tableRow";
  tempRow.id = "row-" + (i+1);

  for(let j = 0; j < 9; j++) {
    let tempCell = document.createElement("td");
    tempCell.className = "tableCell";
    tempCell.id = "cell-" + (j+1) + "-" + (i+1);

    let tempInput = document.createElement("input");
    tempInput.type = "text";
    tempInput.name = "numberInput";
    tempInput.id = "input-" + (j+1) + "-" + (i+1);
    tempInput.className = "input-box";
    tempInput.value = "";

    // Fix or report upon pressing enter
    tempInput.addEventListener("keydown", function(e) {
      var grabValueRaw = document.getElementById("input-"
        + (j+1) + "-" + (i+1)).value;
      if(grabValueRaw.trim() == "") {
        board.set(j+1,i+1,"");
        //board.printBoard();
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
        document.getElementById("input-"
          + (j+1) + "-" + (i+1)).value = grabValue;
        document.getElementById("input-" + (j+1) + "-" + (i+1)).blur();
        if(!isNaN(grabValue)) {
          board.set(j+1,i+1, grabValue); // update board array
          //board.printBoard();
        }
      }
    }, false);
    // When deselected, fix
    tempInput.onblur = function(){
      var grabValueRaw = document.getElementById("input-"
        + (j+1) + "-" + (i+1)).value;
      if(grabValueRaw.trim() == "") {
        board.set(j+1,i+1,"");
        //board.printBoard();
        return;
      }
      var grabValue = Number(grabValueRaw);
      if(isNaN(grabValue))
        grabValue = "";
      if(grabValue < 1)
        grabValue = "";
      if(grabValue > 9)
        grabValue = "";
      document.getElementById("input-"
        + (j+1) + "-" + (i+1)).value = grabValue;
      if(!isNaN(grabValue)) {
        board.set(j+1,i+1, grabValue); // update board array
        //board.printBoard();
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

// Create master board class
var board = new SudokuBoard();

// Create partly solved one as example
board.set(1,1, 3);board.set(3,1, 5);board.set(4,1, 6);board.set(5,1, 4);
board.set(6,1, 8);board.set(8,1, 1);board.set(1,2, 2);board.set(2,2, 1);
board.set(8,2, 4);board.set(5,3, 2);board.set(2,4, 3);board.set(4,4, 8);
board.set(9,4, 6);board.set(1,5, 1);board.set(2,5, 9);board.set(4,5, 5);
board.set(6,5, 6);board.set(8,5, 7);board.set(3,6, 4);board.set(7,6, 8);
board.set(8,6, 9);board.set(4,7, 7);board.set(7,7, 4);board.set(2,8, 4);
board.set(5,8, 1);board.set(6,8, 9);board.set(2,9, 5);board.set(3,9, 3);
board.set(6,9, 2);board.set(7,9, 7);
