const identifiant = document.querySelector('#username');
const mdp = document.querySelector('#password');
const connexion = document.querySelector('#connexion');

const nb_out_id = 0;
const nb_out_mdp = 0;
console.log('hihi')

connexion.addEventListener('click', () => {
    window.location.href("index.html") 
    envoyerDonnee(reg_id, nb_out_id, nb_out_mdp);
})

identifiant.addEventListener('focusout', () => {
    nb_out_id++;
})

mdp.addEventListener('focusout', () => {
    nb_out_mdp++;
})

function envoyerDonnee(identifiant, nb_out_id, nb_out_mdp) {

    // Créer un objet avec les données à envoyer
    var data = {
        identifiant: identifiant,
        champ_id: nb_out_id,
        champ_mdp: nb_out_mdp
    };

    // Utiliser AJAX pour envoyer les données à un fichier PHP
    $.ajax({
        type: "POST",
        url: "../connexion.php",
        data: data,
        success: function(response) {
            // Traiter la réponse du serveur (facultatif)
            console.log(response);
        },
        error: function(error) {
            console.log("Erreur AJAX : " + error);
        }
    });
}

window.addEventListener('beforeunload', function (e) {
    // Annuler l'événement comme standard pour les navigateurs.
    e.preventDefault();
    // Chrome nécessite que returnValue soit défini.
    e.returnValue = '';
  });