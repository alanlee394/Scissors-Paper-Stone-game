let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0
};

document.getElementById("Scissors").onclick = function () {
    const batMove = batmanMove();
    let result = '';
    if (batMove === 'stone') {
        result = 'You Lost!';
        score.Losses += 1;
    } else if (batMove === 'scissors') {
        result = 'You Tied!';
        score.Ties += 1;
    } else if (batMove === 'paper') {
        result = 'You Win!';
        score.Wins += 1;
    }
    alert(`You picked scissors. Batman picked ${batMove}. ${result}
Win Count = ${score.Wins} Loss Count = ${score.Losses} Ties = ${score.Ties}`);

    checkForWin();
};

document.getElementById("Paper").onclick = function () {
    const batMove = batmanMove();
    let result = '';
    if (batMove === 'stone') {
        result = 'You Win!';
        score.Wins += 1;
    } else if (batMove === 'scissors') {
        result = 'You Lose!';
        score.Losses += 1;
    } else if (batMove === 'paper') {
        result = 'You Tied!';
        score.Ties += 1;
    }
    alert(`You picked paper. Batman picked ${batMove}. ${result}
Win Count = ${score.Wins} Loss Count = ${score.Losses} Ties = ${score.Ties}`);

    checkForWin();
};

document.getElementById("Stone").onclick = function () {
    const batMove = batmanMove();
    let result = '';
    if (batMove === 'stone') {
        result = 'You Tied!';
        score.Ties += 1;
    } else if (batMove === 'scissors') {
        result = 'You Win!';
        score.Wins += 1;
    } else if (batMove === 'paper') {
        result = 'You Lose!';
        score.Losses += 1;
    }
    alert(`You picked stone. Batman picked ${batMove}. ${result}
Win Count = ${score.Wins} Loss Count = ${score.Losses} Ties = ${score.Ties}`);

    checkForWin();
};


function checkForWin() {
    if (score.Wins === 3) {
        showPopup(); 
        score = { 
            Wins: 0,
            Losses: 0,
            Ties: 0
        };
    }
}


function showPopup() {
    document.getElementById('popupImage').style.display = 'flex';
}


document.getElementById('closePopup').onclick = function () {
    document.getElementById('popupImage').style.display = 'none'; 
};


function batmanMove() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'stone';
    } else if (randomNumber < 2 / 3) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
