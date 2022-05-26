'use strict'
const SIZE = 14;
const WALL = '#'
const FOOD = '.'
const EMPTY = ' ';


var gAliensInterval;


var gBoard=buildBoard();
var setSherrys;
var gGame = {
    score: 0,
    isOn: false
}

function init() {
    if(gGame.isOn)return
    clearInterval(gAliensInterval)
    createHero()
    printMat(gBoard,'.board-container')
    renderAliens()
    gAliensInterval=setInterval(moveTo,500)
}


function buildBoard() {  
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board.push([]);
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = ' ';
            if ( i === SIZE - 1  ) {
                board[i][j] = WALL;
            }
        }
    } 
    return board;
}

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


function updateScore(diff) {
    gGame.score += diff
    document.querySelector('h2 span').innerText = gGame.score

}

function gameOver() {
     
    openModal('GAME OVER!')
    gGame.isOn = false
    
}


function checkWin(){
    for(var i=0;i<gAliens.length;i++){
        if(gAliens[i].isHite===false)return
    }
    renderCell(gHero.location,' ')
    openModal('YOU WIN!')
}


function openModal(str){
    var modal=document.querySelector('.modal h2')
    modal.innerText=str
    document.querySelector('.modal').style.display = 'block'
}



