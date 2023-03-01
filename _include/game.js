function addClickValue(nbToAdd) {
    
    let clickValue = parseInt(localStorage.getItem('clickValue'));

    let clickValueTemp = clickValue + nbToAdd;
    localStorage.setItem('clickValue', clickValueTemp);

}

function addSecValue(nbToAdd) {
    
    let secValue = parseInt(localStorage.getItem('secValue'));
    let secValueTemp = secValue + nbToAdd;

    localStorage.setItem('secValue', secValueTemp);

}


function addEachSec() {
    
    let secValue = parseInt(localStorage.getItem('secValue'));
    let nbPoints = parseInt(localStorage.getItem('nbPoints'));
    let nbPointsTemp = nbPoints + secValue;
    
    localStorage.setItem('nbPoints', nbPointsTemp);

}

function displayEachSec() {

    let nbPoints = parseInt(localStorage.getItem('nbPoints'));
    nbPointsDisplay.textContent = nbPoints;

}


function whenClickDo() {

    let clickValue = parseInt(localStorage.getItem('clickValue'));
    let nbPoints = parseInt(localStorage.getItem('nbPoints'));
    let nbPointsTemp = nbPoints + clickValue;

    console.log(nbPointsTemp);

    localStorage.setItem('nbPoints', nbPointsTemp);
    nbPointsDisplay.textContent = nbPointsTemp;

}

function whenClickAchatClickValue() {

    
    
}

function whenClickAchatSecValue() {
    
}


let nbPoints = parseInt(localStorage.getItem('nbPoints'));

let prixAchatClickValue = parseInt(localStorage.getItem('prixAchatClickValue'));
let prixAchatSecValue = parseInt(localStorage.getItem('prixAchatSecValue'));

let gainAchatClickValue = parseInt(localStorage.getItem('gainAchatClickValue'));
let gainAchatSecValue = parseInt(localStorage.getItem('gainAchatSecValue'));

const nbPointsDisplay = document.getElementById('nbPoints');
const addPointButton = document.getElementById('addPointButton');

const displayPrixAchatClick = document.getElementById('prixAchatClickValue');
const displayGainAchatClick = document.getElementById('gainAchatClickValue');
const achatClickValueButton = document.getElementById('buttonAchatClickValue');

const displayPrixAchatSec = document.getElementById('prixAchatSecValue');
const displayGainAchatSec = document.getElementById('gainAchatSecValue');
const achatSecValueButton = document.getElementById('buttonAchatSecValue');


localStorage.setItem('clickValue', '1')
localStorage.setItem('secValue', '1')

nbPointsDisplay.textContent = nbPoints;

// console.log(parseInt(localStorage.getItem('clickValue')));
// console.log(typeof parseInt(localStorage.getItem('clickValue')));
// console.log(isNaN(parseInt(localStorage.getItem('clickValue'))));


if(isNaN(nbPoints) === true || nbPoints === null) {
    localStorage.setItem('nbPoints', '0');
    nbPointsDisplay.textContent = parseInt(localStorage.getItem('nbPoints'));
}


if(isNaN(prixAchatClickValue) === true || prixAchatClickValue === null) {

    localStorage.setItem('prixAchatClickValue', '10');
    displayPrixAchatClick.textContent = parseInt(localStorage.getItem('prixAchatClickValue'));
    
}
if(isNaN(gainAchatClickValue) === true || gainAchatClickValue === null) {

    localStorage.setItem('gainAchatClickValue', '1');
    displayGainAchatClick.textContent = parseInt(localStorage.getItem('gainAchatClickValue'));
    
}


if(isNaN(prixAchatSecValue) === true || prixAchatSecValue === null) {

    localStorage.setItem('prixAchatSecValue', '20');
    displayPrixAchatSec.textContent = parseInt(localStorage.getItem('prixAchatSecValue'));
    
}
if(isNaN(gainAchatSecValue) === true || gainAchatSecValue === null) {

    localStorage.setItem('gainAchatSecValue', '0,1');
    displayGainAchatSec.textContent = parseInt(localStorage.getItem('gainAchatSecValue'));
    
}


addPointButton.addEventListener('click', () => {

    whenClickDo();
    
});

achatClickValueButton.addEventListener('click', () => {

    whenClickAchatClickValue();
    
});

achatSecValueButton.addEventListener('click', () => {

    whenClickAchatSecValue();
    
});


setInterval(addEachSec, 1000);
setInterval(displayEachSec, 1000);