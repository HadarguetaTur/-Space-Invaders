'use strict'

function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell-' + i + '-' + j;
      strHTML += '<td class="' + className + '"> ' + cell + ' </td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}


function renderCell(location, value) {
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function getEmptyCell(mat){

  var emptyCells=[]
  for(var i=0;i<mat.length;i++){
      var rows=gBoard[i]
      for(var j=0;j<mat[0].length;j++){
          var cell=rows[j]
          if(cell!==FOOD){
              continue
          }
          emptyCells.push({i:i, j:j})
      }
  }
  var randomInt=getRandomIntInclusive(0,emptyCells.length)
  return emptyCells[randomInt]
}

function removeElement(emptyCell) {
	gBoard[emptyCell.i][emptyCell.j] = EMPTY
	renderCell(emptyCell, EMPTY);
}


function addElement(location,element){
		gBoard[location.i][location.j]=element
		renderCell(location,element)
} 