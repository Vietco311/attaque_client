const identifiant = document.querySelector('#username');
const mdp = document.querySelector('#password');
const connexion = document.querySelector('#connexion');
const eyediv = document.querySelector('#eye');
const eyeimage = document.querySelector('#eye-image');
const eyebutton = document.querySelector('#eye-button');
console.log("aa")

const url = 'http://localhost:3000/info';

let entrerIdentifiant = false;
let entrerPassword = false;
let cliqueConnexion = false;

const messageBienveillant = "Attention : Vous venez de participer à un exercice de sensibilisation à la cybersécurité. Heureusement, cette fois, c'était inoffensif et vos données n'ont pas été stockées ni utilisées. Toujours vérifier l'URL avant d'entrer vos informations personnelles sur Internet, et surtout ne pas ouvrir des liens recu par mail !";

function afficherMessageBienveillant() {
    alert(messageBienveillant);
}

connexion.addEventListener('click', () => {
    cliqueConnexion = true;
    envoyerDonnee();
    afficherMessageBienveillant();
});

identifiant.addEventListener('focusout', () => {
    entrerIdentifiant = true;
});

mdp.addEventListener('focusout', () => {
    entrerPassword = true;
});

eyebutton.addEventListener('click', () => {
    if (eyeimage.className.baseVal == 'eye-image') {
        eyeimage.className.baseVal = "eye-image-off";
        eyeimage.setAttribute("d", "M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z")
    } else {
        eyeimage.className.baseVal = "eye-image";
        eyeimage.setAttribute("d", "M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z")
    }
})

// Détecter la tentative de quitter la page
window.addEventListener('beforeunload', (event) => {
    envoyerDonnee();
    event.returnValue = messageBienveillant;
    return messageBienveillant;
});

function envoyerDonnee() {
    const data = {
        entrerIdentifiant: entrerIdentifiant,
        entrerPassword: entrerPassword,
        cliqueConnexion: cliqueConnexion,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
