const identifiant = document.querySelector('#identifiant');
const mdp = document.querySelector('#mdp');
const connexion = document.querySelector('#connexion');

const nb_out_id = 0;
const nb_out_mdp = 0;
const reg_id = identifiant.innerHTML;
const reg_mdp = mdp.innerHTML;

connexion.addEventListener('click', () => {
   window.location.href("index.html") 
    reg_id = identifiant.innerHTML;
    reg_mdp = mdp.innerHTML;
})

identifiant.addEventListener('focusout', () => {
    nb_out_id++;
})

mdp.addEventListener('focusout', () => {
    nb_out_mdp++;
})
