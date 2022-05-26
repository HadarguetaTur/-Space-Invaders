'use strict'
const HERO = '🐱‍👤';
const LAYZER = '🔴'
var gLazerInterval;
var gHero;
var canSoot=true


function createHero() {
    gHero = {
        location: {
            i: SIZE - 2,
            j: Math.abs(SIZE / 2)
        },
    }
    gBoard[gHero.location.i][gHero.location.j] = HERO
}

function moveHero(ev) {
    if(!canSoot)return
    if (ev.code === "Space") {
        shoot()
    } else {
        var nextLocation = getNextLocation(ev.key)
        var nextCell = gBoard[nextLocation.i][nextLocation.j]
        console.log(nextLocation)
        if (nextCell === WALL || nextCell.j < 0 || nextCell.i === SIZE) return
        gBoard[gHero.location.i][gHero.location.j] = EMPTY
        renderCell(gHero.location, EMPTY)
        gHero.location = nextLocation
        gBoard[gHero.location.i][gHero.location.j] = HERO
        renderCell(gHero.location, HERO)

    }


}


function getNextLocation(eventKey) {
    var nextLocation = {
        i: gHero.location.i,
        j: gHero.location.j
    }

    switch (eventKey) {
        case 'ArrowRight':
            nextLocation.j++
            break;

        case 'ArrowLeft':
            nextLocation.j--
            break;

        default:
            return null;
    }

    return nextLocation;
}

function shoot() {
    canSoot=false
    var startLoc = {
        i: gHero.location.i-1,
        j: gHero.location.j
    }
    gBoard[startLoc.i][startLoc.j] = LAYZER
    renderCell(startLoc, LAYZER)
    gLazerInterval = setInterval(function () {
        renderCell(startLoc, EMPTY)
        startLoc.i--
        renderCell(startLoc, LAYZER) 
        console.log(gBoard[startLoc.i][startLoc.j])
        if(gBoard[startLoc.i][startLoc.j]===ALIEN||gBoard[0][startLoc.j]===LAYZER){
            clearInterval(gLazerInterval)   
            canSoot=true
            for(var i=0;i<gAliens.length;i++){
                if(gAliens[i].location.i===startLoc.i&&gAliens[i].location.j===startLoc.j){
                    gAliens[i].isHite=true
                    updateScore(1)

                }
            }
        }
    },100)
}
