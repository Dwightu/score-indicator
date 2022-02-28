
const resetButton = document.querySelector('#reset');

const winningScoreSelect = document.querySelector('#playto');

let winScore = 3;
let gameOver = false;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

function updateScore(winner, loser) {
    if (!gameOver) {
        winner.score++;
        if (winner.score === winScore) {
            gameOver = true;
            loser.display.classList.add('loser');
            winner.display.classList.add('winner');
            winner.button.disabled = true;
            loser.button.disabled = true;
        }
        winner.display.textContent = winner.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScore(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScore(p2, p1)

})

resetButton.addEventListener('click', function () {
    gameOver = false;
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = '0';
    p2.display.textContent = '0';
    p1.display.classList.remove('winner', 'loser');
    p2.display.classList.remove('winner', 'loser');
    p1.button.disabled = false;
    p2.button.disabled = false;

})

winningScoreSelect.addEventListener('change', function () {
    winScore = parseInt(this.value);

})