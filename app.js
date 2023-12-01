
let homeScore = 0;
let awayScore = 0;

function updateScoreboard() {
    console.log('Scoreboard Updated')
    document.getElementById('homeScore').textContent = homeScore;
    document.getElementById('awayScore').textContent = awayScore;
}

document.getElementById('homeAdd1').addEventListener('click', function () {
    homeScore += 1;
    updateScoreboard();
});

document.getElementById('awayAdd1').addEventListener('click', function () {
    awayScore += 1;
    updateScoreboard();
});

document.getElementById('homeAdd3').addEventListener('click', function () {
    homeScore += 1;
    updateScoreboard();
});

document.getElementById('awayAdd3').addEventListener('click', function () {
    awayScore += 1;
    updateScoreboard();
});

document.getElementById('reset').addEventListener('click', function () {
    homeScore = 0;
    awayScore = 0;
    updateScoreboard();
});

