const Screen = require("./screen");

class Cursor {
  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = "black";
    this.cursorColor = "yellow";
  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    console.log(this.row);
    if (this.row !== 0) {
      Screen.setGrid((this.row -= 1), this.col, this.char);
    } else {
      Screen.setGrid((this.row = 0), this.col, this.char);
    }
  }

  down() {
    if (this.row !== 2) {
      Screen.setGrid((this.row += 1), this.col, this.char);
    } else {
      Screen.setGrid((this.row = 2), this.col, this.char);
    }
  }

  left() {
    if (this.col !== 0) {
      Screen.setGrid((this.row), (this.col -= 1), this.char);
    } else {
      Screen.setGrid((this.row), (this.col = 0), this.char);
    }
  }

  right() {
    if (this.col !== 2) {
      Screen.setGrid((this.row), (this.col += 1), this.char);
    } else {
      Screen.setGrid((this.row), (this.col = 2), this.char);
    }
  }
}

module.exports = Cursor;
