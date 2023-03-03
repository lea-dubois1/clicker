function displayErrorsSignup(dataJSON) {

    const errorLoginDiv = document.getElementById('errorLogin');
    errorLoginDiv.innerHTML = "";

    const errorPassDiv = document.getElementById('errorPass');
    errorPassDiv.innerHTML = "";

    if(dataJSON['errorLogin']) {
        const paraErrorLogin = document.createElement("p");
        paraErrorLogin.textContent = dataJSON['errorLogin'];
        errorLoginDiv.appendChild(paraErrorLogin);
    }
    if(dataJSON['errorLoginExist']) {
        const paraErrorLoginExist = document.createElement("p");
        paraErrorLoginExist.textContent = dataJSON['errorLoginExist'];
        errorLoginDiv.appendChild(paraErrorLoginExist);
    }
    if(dataJSON['errorPassMatch']) {
        const paraErrorPassMatch = document.createElement("p");
        paraErrorPassMatch.textContent = dataJSON['errorPassMatch'];
        errorPassDiv.appendChild(paraErrorPassMatch);
    }
    if(dataJSON['errorPassLong']) {
        const paraErrorPassLong = document.createElement("p");
        paraErrorPassLong.textContent = dataJSON['errorPassLong'];
        errorPassDiv.appendChild(paraErrorPassLong);
    }
    if(dataJSON['okReg']) {

        alert(dataJSON['okReg']);
        
    }

}

function displayErrorsSignin(dataJSON) {
    
    if(dataJSON['errorLogin']) {
        const errorLoginDiv = document.getElementById('errorLogin');
        const paraErrorLogin = document.createElement("p");
        paraErrorLogin.textContent = dataJSON['errorLogin'];
        errorLoginDiv.appendChild(paraErrorLogin);
    }

    if(dataJSON['errorPass']) {
        const errorPassDiv = document.getElementById('errorPass');
        const paraErrorPass = document.createElement("p");
        paraErrorPass.textContent = dataJSON['errorPass'];
        errorPassDiv.appendChild(paraErrorPass);
    }

    if(dataJSON['okConn']) {
        document.location.replace('game.php');
        alert(dataJSON['okConn']);
    }
}



const inscriptionButton = document.getElementById('switchInscription');
const connexionButton = document.getElementById('switchConnexion');
const switchButton = document.getElementById('switch');

inscriptionButton.addEventListener('click', () => {

    //call the php inscription file
    fetch('_include/inscription.php')
    .then((promise)=>{
        return promise.text();
    })
    .then((content)=>{
        const form = document.getElementById('form');
        form.innerHTML = content;
        const signupForm = document.getElementById('signupForm');

        signupForm.addEventListener('submit', (e) => {

            e.preventDefault();

            const formData = new FormData(signupForm);

            console.log(formData)

            formData.forEach((value, key) => {
                console.log(key + ':' + value);
            });

            fetch("_include/back.php?register=1", {
                method: "POST",
                body: formData,
            })
            .then(response => {
                return response.json();
            })
            .then(message => {
                const dataJSON = message;
                console.log(dataJSON);

                displayErrorsSignup(dataJSON);

            })
            .catch(error => alert("Erreur : " + error));
        
        });
    })
    .catch(error => alert("Error : " + error));
})

connexionButton.addEventListener('click', ()=>{


    fetch('_include/connexion.php')
    .then((promise)=>{
        return promise.text();
    })
    .then((content)=>{
        const form = document.getElementById('form');
        form.innerHTML = content;
        const signinForm = document.getElementById('signinForm');

        signinForm.addEventListener('submit', (e) => {

            e.preventDefault();
            const formData = new FormData(signinForm);

            fetch("_include/back.php?signin=1", {
                method: "POST",
                body: formData,
            })
            .then(response => {
                return response.json();
            })
            .then(message => {
                const dataJSON = message;
                console.log(dataJSON);

                displayErrorsSignin(dataJSON);

            })
            .catch(error => alert("Error : " + error));
        });
    })
    .catch(error => alert("Error : " + error));
})