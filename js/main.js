document.getElementById('start').addEventListener('click', playGame);

function playGame() {
    const playerRoll = rollDice('playerCube');
    const computerRoll = rollDice('computerCube');
    const resultBox = document.getElementById('result');
    
    if (playerRoll > computerRoll) {
        resultBox.style.display = 'block'
        resultBox.textContent = `🎉 Ти виграв! (${playerRoll} > ${computerRoll})`;
        resultBox.style.backgroundColor = '#d4edda';
        resultBox.style.color = '#155724';
    } else if (playerRoll < computerRoll) {
        resultBox.style.display = 'block'
        resultBox.textContent = `💻 Комп'ютер виграв! (${computerRoll} > ${playerRoll})`;
        resultBox.style.backgroundColor = '#f8d7da';
        resultBox.style.color = '#721c24';
    } else {
        resultBox.style.display = 'block'
        resultBox.textContent = `🤝 Нічия! (${playerRoll} = ${computerRoll})`;
        resultBox.style.backgroundColor = '#fff3cd';
        resultBox.style.color = '#856404';
    }
}

function rollDice(cubeId) {
    const roll = Math.floor(Math.random() * 6) + 1;
    const cube = document.getElementById(cubeId);
    cube.src = `./img/${getImageName(roll)}`;
    return roll;
}

function getImageName(num) {
    switch (num) {
        case 1: return 'one.png';
        case 2: return 'two.png';
        case 3: return 'three.png';
        case 4: return 'four.png';
        case 5: return 'five.png';
        case 6: return 'six.png';
    }
}