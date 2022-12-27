function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//ouverture et fermeture du formulaire

// DOM Elements on récupère l'élément sur lequel on veut détecter le clic'
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
// launch modal event on écoute l'évènement click
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form on change le contenu de notre élément
function launchModal() {
  modalbg.style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
}

//validation du formulaire

// DOM Elements
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
var mailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const birthdate = document.getElementById("birthdate");

const quantity = document.getElementById("quantity");
const locations = document.getElementById("location");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const submitBouton = document.querySelector(".btn-submit");


//let messageAlerte= document.createElement('p');
//submitBouton.addEventListener('click', validfirstname) pas besoin car declare
//dans l'html ligne 67

function validate() {
  console.log("test");

  if (first.value < 2 || first.value === "") {
    //messageAlerte.texteContent='Veuillez entrer 2 caractères ou plus pour le champ du prénom.';
    first.setAttribute('data-error-visible', true);
    first.setAttribute('data-error', "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    first.focus();
    return false;
  }
  if (last.value < 2 || last.value === "") {
    //messageAlerte.texteContent='Veuillez entrer 2 caractères ou plus pour le champ du nom.';
    last.focus();
    return false;
  }

  if (email.value.match(mailvalid)) {
    return true;
  } else {
    //messageAlerte.texteContent='Vous devez saisir une adresse mail valide';
    email.focus();
    return false;
  }
  if (birthdate.value === "") {
    //messageAlerte.texteContent='Vous devez entrer votre date de naissance.';
    birthdate.focus();
    return false;
  }
  if (quantity.value <= 0) {
    //messageAlerte.texteContent='Vous devez saisir un nombre de participations';
    email.focus();
    return false;
  }
  if (locations.valeur = "") {
    //messageAlerte.texteContent='Vous devez choisir une option';
    location.focus();
    return false;
   }
  if (checkbox1.checked) {
    //messageAlerte.texteContent='Vous devez vérifier que vous acceptez les termes et conditions.';
    checkbox1.focus();
    return false;
  }
}
