function addClickValue(nbToAdd) {

    clickValue += nbToAdd;
    localStorage.setItem('clickValue', clickValue);

}

function addSecValue(nbToAdd) {

    secValue += nbToAdd;
    localStorage.setItem('secValue', secValue);

}

function whenClickDo() {

    let clickValue = parseInt(localStorage.getItem('clickValue'));
    let nbPoints = parseInt(localStorage.getItem('nbPoints'));
    let nbPointsTemp = nbPoints + clickValue;

    console.log(nbPointsTemp);

    localStorage.setItem('nbPoints', nbPointsTemp);
    nbPointsDisplay.textContent = nbPointsTemp;

}


let nbPointsTempSec;
const nbPointsDisplay = document.getElementById('nbPoints');
const addPointButton = document.getElementById('addPointButton');

localStorage.setItem('clickValue', '1')
localStorage.setItem('secValue', '0')

nbPointsDisplay.textContent = nbPoints;

// console.log(parseInt(localStorage.getItem('clickValue')));
// console.log(typeof parseInt(localStorage.getItem('clickValue')));
// console.log(isNaN(parseInt(localStorage.getItem('clickValue'))));

if(isNaN(nbPoints) == true) {
    localStorage.setItem('nbPoints', '0');
    nbPointsDisplay.textContent = parseInt(localStorage.getItem('nbPoints'));
}else {
    nbPointsDisplay.textContent = parseInt(localStorage.getItem('nbPoints'));
}


addPointButton.addEventListener('click', () => {

    whenClickDo();
    
});







// function test() {
//     nbPointsTempSec = nbPoints + secValue;
//     localStorage.setItem('nbPoints', nbPointsTemp);
// }

// function displayEachSec() {
//     nbPoints = parseInt(localStorage.getItem('nbPoints'));
//     nbPointsDisplay.textContent = nbPoints;
// }

// setInterval(test,displayEachSec, 1000)