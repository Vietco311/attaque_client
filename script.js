const identifiant = document.querySelector('#username');
const mdp = document.querySelector('#password');
const connexion = document.querySelector('#btn-connexion');
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
