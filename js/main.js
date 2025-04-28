document.getElementById('start').addEventListener('click', playGame);

function playGame() {
    const resultBox = document.getElementById('result');
    resultBox.style.display = 'none';

    const playerRoll = rollDice('playerCube');
    const computerRoll = rollDice('computerCube');

    setTimeout(() => {
        resultBox.style.display = 'block';

        if (playerRoll > computerRoll) {
            resultBox.textContent = `🎉 Ти виграв! (${playerRoll} > ${computerRoll})`;
            resultBox.style.backgroundColor = '#d4edda';
            resultBox.style.color = '#155724';
        } else if (playerRoll < computerRoll) {
            resultBox.textContent = `💻 Комп'ютер виграв! (${playerRoll} < ${computerRoll})`;
            resultBox.style.backgroundColor = '#f8d7da';
            resultBox.style.color = '#721c24';
        } else {
            resultBox.textContent = `🤝 Нічия! (${playerRoll} = ${computerRoll})`;
            resultBox.style.backgroundColor = '#fff3cd';
            resultBox.style.color = '#856404';
        }
    }, 1000);
}

function rollDice(cubeId) {
    const roll = Math.floor(Math.random() * 6) + 1;
  const cube = document.getElementById(cubeId);

  cube.classList.remove('cube-roll');
  void cube.offsetWidth;
  cube.classList.add('cube-roll');

  setTimeout(() => {
    cube.src = `./img/${getImageName(roll)}`;
  }, 600);

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