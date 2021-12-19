'use strict';
// If your solution needs to add any
// listeners do so here
function init() {
    const nick = document.getElementById('nick');
    nick.addEventListener('input', nickChanged);

    const scalerange = document.getElementById('scalerange');
    scalerange.addEventListener('input', updateStep);

    canvas.addEventListener('click', changeColor);
}

function updateLeaderBoard(names, me) {
    const leaderboard = document.getElementById('top10');
    leaderboard.textContent = '';
    
    if (names.length > 10) {
        let value = 10 - names.length;
        if (value < 0) {
            names.splice(value);
        }
    }

    if (names.length > 0) {
        for (const name of names) {
            const li = document.createElement('li');
            if (me === name) {
                li.className = 'myself';
                leaderboard.append(li);
            } else {
                li.textContent = name;
                leaderboard.append(li);
            }
        }
    }
}

function leaders(results) {
    const top10 = document.querySelectorAll('#top10 > li');

    let leaderBoardArr = [];

    for (const name of top10) {
        leaderBoardArr.push(name.textContent);
    }

    leaderBoardArr.splice(results);
    return leaderBoardArr;
}

function nickChanged() {
    const nick = document.getElementById('nick');
    const playername = document.getElementById('playername');
    playername.textContent = nick.value;
}

function updateStep() {
    const scalerange = document.getElementById('scalerange');
    step = scalerange.valueAsNumber;
}



// Here you should add any other
// code, functions, etc.

/** i.e. replace this line with your many lines of code */

// Don't edit below this line
window.addEventListener('load', init);
