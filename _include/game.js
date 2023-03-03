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
    
    let secValue = parseFloat(localStorage.getItem('secValue'));
    console.log(secValue);
    let nbPoints = parseFloat(localStorage.getItem('nbPoints'));

    let nbPointsTemp = nbPoints + secValue;
    
    localStorage.setItem('nbPoints', nbPointsTemp);

    nbPointsDisplay.textContent = Math.round(nbPoints);

}


function whenClickDo() {

    let clickValue = parseInt(localStorage.getItem('clickValue'));
    let nbPoints = parseFloat(localStorage.getItem('nbPoints'));
    let nbPointsTemp = nbPoints + clickValue;

    console.log(nbPointsTemp);

    localStorage.setItem('nbPoints', nbPointsTemp);
    nbPointsDisplay.textContent = Math.round(nbPointsTemp);

}

function whenClickAchatClickValue() {

    const nbPoints = parseFloat(localStorage.getItem('nbPoints'));
    const clickValue = parseInt(localStorage.getItem('clickValue'));
    let prixAchatClickValue = parseFloat(localStorage.getItem('prixAchatClickValue'));
    let gainAchatClickValue = parseInt(localStorage.getItem('gainAchatClickValue'));

    if(nbPoints >= prixAchatClickValue) {

        let temp1 = nbPoints - prixAchatClickValue;
        localStorage.setItem('nbPoints', temp1);
        nbPointsDisplay.textContent = parseInt(localStorage.getItem('nbPoints'));

        let temp2 = clickValue + 1;
        localStorage.setItem('clickValue', temp2);

        let temp3 = prixAchatClickValue * 1.8;
        localStorage.setItem('prixAchatClickValue', temp3);
        displayPrixAchatClick.textContent = parseInt(localStorage.getItem('prixAchatClickValue'));

        let temp4 = gainAchatClickValue + 1;
        localStorage.setItem('gainAchatClickValue', temp4);
        displayGainAchatClick.textContent = parseInt(localStorage.getItem('gainAchatClickValue'));

    }else {

        alert("You don't have enough points to buy the item");

    }
    
}

function whenClickAchatSecValue() {
    
    const nbPoints = parseFloat(localStorage.getItem('nbPoints'));
    const secValue = parseFloat(localStorage.getItem('secValue'));
    let prixAchatSecValue = parseFloat(localStorage.getItem('prixAchatSecValue'));
    let gainAchatSecValue = parseFloat(localStorage.getItem('gainAchatSecValue'));
    console.log(gainAchatSecValue)

    if(nbPoints >= prixAchatSecValue) {

        let temp1 = nbPoints - prixAchatSecValue;
        localStorage.setItem('nbPoints', temp1);
        nbPointsDisplay.textContent = parseInt(localStorage.getItem('nbPoints'));

        let temp2 = secValue + 0.3;
        localStorage.setItem('secValue', temp2);

        let temp3 = prixAchatSecValue * 1.5;
        localStorage.setItem('prixAchatSecValue', temp3);
        displayPrixAchatSec.textContent = parseInt(localStorage.getItem('prixAchatSecValue'));

        let temp4 = gainAchatSecValue + 0.3;
        console.log(temp4);
        console.log(gainAchatSecValue);
        localStorage.setItem('gainAchatSecValue', temp4);
        displayGainAchatSec.textContent = parseFloat(localStorage.getItem('gainAchatSecValue')).toFixed(1);

    }else {

        alert("You don't have enough points to buy the item");

    }
    
}


/*********************************** END FUNCTION ***********************************/




let nbPoints = parseFloat(localStorage.getItem('nbPoints'));
let clickValue = parseInt(localStorage.getItem('clickValue'));
let secValue = parseFloat(localStorage.getItem('secValue'));

let prixAchatClickValue = parseInt(localStorage.getItem('prixAchatClickValue'));
let prixAchatSecValue = parseInt(localStorage.getItem('prixAchatSecValue'));

let gainAchatClickValue = parseInt(localStorage.getItem('gainAchatClickValue'));
let gainAchatSecValue = parseFloat(localStorage.getItem('gainAchatSecValue'));

const nbPointsDisplay = document.getElementById('nbPoints');
const addPointButton = document.getElementById('addPointButton');

const displayPrixAchatClick = document.getElementById('prixAchatClickValue');
const displayGainAchatClick = document.getElementById('gainAchatClickValue');
const achatClickValueButton = document.getElementById('buttonAchatClickValue');

const displayPrixAchatSec = document.getElementById('prixAchatSecValue');
const displayGainAchatSec = document.getElementById('gainAchatSecValue');
const achatSecValueButton = document.getElementById('buttonAchatSecValue');

nbPointsDisplay.textContent = Math.round(nbPoints);

// console.log(parseInt(localStorage.getItem('clickValue')));
// console.log(typeof parseInt(localStorage.getItem('clickValue')));
// console.log(isNaN(parseInt(localStorage.getItem('clickValue'))));



//localStorage.setItem('secValue', '');


if(isNaN(nbPoints) === true || nbPoints === null) {
    localStorage.setItem('nbPoints', '0');
    nbPointsDisplay.textContent = parseInt(localStorage.getItem('nbPoints'));
}
if(isNaN(clickValue) === true || clickValue === null) {
    localStorage.setItem('clickValue', '1');
}
if(isNaN(secValue) === true || secValue === null) {
    localStorage.setItem('secValue', '0');
}


if(isNaN(prixAchatClickValue) === true || prixAchatClickValue === null) {

    localStorage.setItem('prixAchatClickValue', '20');
    displayPrixAchatClick.textContent = parseInt(localStorage.getItem('prixAchatClickValue'));
    
}else {

    displayPrixAchatClick.textContent = parseInt(localStorage.getItem('prixAchatClickValue'));

}

if(isNaN(gainAchatClickValue) === true || gainAchatClickValue === null) {

    localStorage.setItem('gainAchatClickValue', '2');
    displayGainAchatClick.textContent = parseInt(localStorage.getItem('gainAchatClickValue'));
    
}else {

    displayGainAchatClick.textContent = parseFloat(localStorage.getItem('gainAchatClickValue')).toFixed(1);

}


if(isNaN(prixAchatSecValue) === true || prixAchatSecValue === null) {

    localStorage.setItem('prixAchatSecValue', '50');
    displayPrixAchatSec.textContent = parseInt(localStorage.getItem('prixAchatSecValue'));
    
}else {

    displayPrixAchatSec.textContent = parseInt(localStorage.getItem('prixAchatSecValue'));

}

if(isNaN(gainAchatSecValue) === true || gainAchatSecValue === null) {

    localStorage.setItem('gainAchatSecValue', 0.3);
    displayGainAchatSec.textContent = parseFloat(localStorage.getItem('gainAchatSecValue'));
    
}else {

    displayGainAchatSec.textContent = parseFloat(localStorage.getItem('gainAchatSecValue'));

}



/********************************* EVENT LISTENER ********************************/

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