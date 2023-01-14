//fonction permettant d'afficher le menu en fonction du support (desktop ou mobile)
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements on récupère l'élément sur lequel on veut détecter ouverture et fermeture du formulaire'
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// DOM Elements sur lequel on veut tester le formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationsErreur = document.getElementById("location1");
const checkbox1 = document.getElementById("checkbox1");

// DOM Elements sur lequel on veut valider le formulaire
const submitBouton = document.querySelector(".btn-submit");

// launch modal event on écoute l'évènement click pour y affecter une fonction
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal);

// launch modal form on change le contenu de notre élément (détail des fonctions)
function launchModal() {
  modalbg.style.display = "block";
  let texteRemerciement = document.querySelector(".text-label");

  formData[0].style.display = "block";
  formData[1].style.display = "block";
  formData[2].style.display = "block";
  formData[3].style.display = "block";
  formData[4].style.display = "block";
  formData[5].style.display = "block";
  formData[6].style.display = "block";
}
function closeModal() {
  modalbg.style.display = "none";
  let texteRemerciement = document.querySelector(".text-label");
  texteRemerciement.textContent =
    "A quel tournoi souhaitez-vous participer cette année ?";
  texteRemerciement.style.padding = "0";
  texteRemerciement.style.fontSize = "17px";
  texteRemerciement.style.textAlign = "justify";
  submitBouton.value = "C'est parti";
}

//submitBouton.addEventListener('click', validate) pas besoin car declare
//dans l'html ligne 67

function validate() {
  //validation du prénom
  if (first.value.length < 2) {
    //validation du prénom
    //récupération du data-error décrit dans le css
    //first.closest("div") recupère la première div parent car la je suis sur l'input
    first.closest("div").setAttribute("data-error-visible", true);
    first
      .closest("div")
      .setAttribute(
        "data-error",
        "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
      );
    first.focus();
    return false;
  } else {
    first.closest("div").setAttribute("data-error-visible", false);
  }
  //validation du nom
  if (last.value.length < 2) {
    last.closest("div").setAttribute("data-error-visible", true);
    last
      .closest("div")
      .setAttribute(
        "data-error",
        "Veuillez entrer 2 caractères ou plus pour le champ du nom."
      );
    last.focus();
    return false;
  } else {
    last.closest("div").setAttribute("data-error-visible", false);
  }
  //validation de l'email
  //utilisation d'un regex trouvé sur internet pour vérifier la validité de la saisie utilisateur
  let mailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (mailvalid.test(email.value)) {
    email.closest("div").setAttribute("data-error-visible", false);
  } else {
    email.closest("div").setAttribute("data-error-visible", true);
    email
      .closest("div")
      .setAttribute("data-error", "Veuillez entrer un email valide.");
    email.focus();
    return false;
  }
  //validation de la date de naissance
  //plusieurs étapes :
  //1 je recupère la zone saisie (const)
  //2 j'indique qu'il s'agit d'une date
  //3 je recupere l'annee de ma date
  let Anniv = new Date(birthdate.value);
  let YearAnniv = Anniv.getFullYear();
  if (YearAnniv > 1900 && YearAnniv < 2023) {
    birthdate.closest("div").setAttribute("data-error-visible", false);
  } else {
    birthdate.closest("div").setAttribute("data-error-visible", true);
    birthdate
      .closest("div")
      .setAttribute("data-error", "Veuillez entrer une date valide.");
    birthdate.focus();
    return false;
  }
  //validation du nombre de participation
  //utilisation d'un regex pour vérifier la validité de la saisie utilisateur
  //[0-9] uniquement des chiffres de 0 à 9 pour exclure les lettres
  //{1,2} nombre de repetition autorisé 1 valeur mini 2 valeur max
  let quantityvalid = /^[0-9]{1,2}$/;
  if (quantityvalid.test(quantity.value)) {
    quantity.closest("div").setAttribute("data-error-visible", false);
  } else {
    quantity.closest("div").setAttribute("data-error-visible", true);
    quantity
      .closest("div")
      .setAttribute("data-error", "Veuillez entrer un chiffre valide.");
    quantity.focus();
    return false;
  }
  //validation de la selection de la ville

  //  if (locations[0].checked=== false && locations[1].checked=== false
  //    && locations[2].checked=== false && locations[3].checked=== false
  //   && locations[4].checked=== false && locations[5].checked=== false
  //   )

  //autre méthode trouvé sur internet plus propre ds le cas ou il y aurait plus de checkbox
  let AllLocations = document.querySelectorAll('input[name="location"]');
  let OneLocation = Array.prototype.slice
    .call(AllLocations)
    .some((x) => x.checked);
  if (OneLocation === false) {
    locationsErreur.closest("div").setAttribute("data-error-visible", true);
    locationsErreur
      .closest("div")
      .setAttribute("data-error", "Vous devez choisir une ville.");
    locationsErreur.focus();
    return false;
  } else {
    locationsErreur.closest("div").setAttribute("data-error-visible", false);
  }

  //validation des conditions d'utilisation
  if (checkbox1.checked === false) {
    checkbox1.closest("div").setAttribute("data-error-visible", true);
    checkbox1
      .closest("div")
      .setAttribute(
        "data-error",
        "Vous devez vérifier que vous acceptez les termes et conditions."
      );
    checkbox1.focus();
    return false;
  } else {
    checkbox1.closest("div").setAttribute("data-error-visible", false);
  }

  //Affichage de la page de remerciement à la place des éléments de la modale

  // premièrement je cache les élments de la modale
  formData[0].style.display = "none";
  formData[1].style.display = "none";
  formData[2].style.display = "none";
  formData[3].style.display = "none";
  formData[4].style.display = "none";
  formData[5].style.display = "none";
  formData[6].style.display = "none";

  //enfin je modifie le texte des éléments restants (p + bouton)
  let texteRemerciement = document.querySelector(".text-label");

  texteRemerciement.textContent = "Merci pour votre inscription !";
  texteRemerciement.style.padding = "400px 25px";
  texteRemerciement.style.fontSize = "30px";
  texteRemerciement.style.textAlign = "center";
  submitBouton.value = "Fermer";
  return false;
}
//pour finir si je clique sur Fermer je valide mon formulaire donc réinitialise les champs de siasie
submitBouton.addEventListener("click", () => {
  if (submitBouton.value === "Fermer") {
    closeModal();
    first.value = "";
    last.value = "";
    email.value = "";
    birthdate.value = "";
    quantity.value = "";
    let texteRemerciement = document.querySelector(".text-label");
    texteRemerciement.textContent =
      "A quel tournoi souhaitez-vous participer cette année ?";
    texteRemerciement.style.padding = "0";
    texteRemerciement.style.fontSize = "17px";
    texteRemerciement.style.textAlign = "justify";
    submitBouton.value = "C'est parti";
  }
});
