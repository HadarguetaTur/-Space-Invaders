'use strict'
const ALIEN = '👾';


var gAliensSize = {
    rows: 3,
    cols: 8
}

var gAliens = createAliens()
var gIsmoveRight = true
var fromI = 0
var toI = gAliensSize.rows
var isDown = false






function createAliens() {
    var arryAliens = []
    for (var i = 0; i < gAliensSize.rows; i++) {
        for (var j = 0; j < gAliensSize.cols; j++) {
            arryAliens.push({
                location: { i: i, j: j },
                isHite: false
            })
        }
    }
    return arryAliens
}


function renderAliens() {
    for (var i = 0; i < gAliens.length; i++) {
        var location = gAliens[i].location
        checkWin()
        if (!gAliens[i].isHite) {
            gBoard[location.i][location.j] = ALIEN
            renderCell(location, ALIEN)
        }      
    }
}

function removeAliens() {
    for (var i = 0; i < gAliens.length; i++) {
        var location = gAliens[i].location
        gBoard[location.i][location.j] = EMPTY
        renderCell(location, EMPTY)
    }
}


function moveTo() {
    if (toI === SIZE - 1) {
        gameOver()
    }
    var gIsRightSize = gBoard[fromI][gBoard.length - 1] === ALIEN
    var gIsLeftSize = gBoard[fromI][0] === ALIEN
    removeAliens()
    if (!gIsRightSize && gIsmoveRight) {
        for (var i = 0; i < gAliens.length; i++) {
            gAliens[i].location.j += 1
        }
        renderAliens()
        isDown = true
    } else if ((gIsRightSize || gIsLeftSize) && isDown) {
        for (var i = 0; i < gAliens.length; i++) {
            gAliens[i].location.i += 1

        }
        fromI++
        toI++
        if (gIsmoveRight) {
            gIsmoveRight = false
        } else if (!gIsmoveRight) {
            gIsmoveRight = true
        }
        renderAliens()
        isDown = false
    } else if (!gIsLeftSize && !gIsmoveRight) {
        for (var i = 0; i < gAliens.length; i++) {
            gAliens[i].location.j += -1
        }
        renderAliens()
        isDown = true
    }
}
