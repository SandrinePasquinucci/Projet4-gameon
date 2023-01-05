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


// DOM Elements sur lequel on veut tester le formulaire
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthdate =document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
//const AllLocations = document.querySelectorAll('input[name="location"]');
//const OneLocation = Array.prototype.slice.call(AllLocations).some(x => x.checked);
//console.log(OneLocation.value);
//console.log(AllLocations);
const locations = document.getElementsByName("location");
const locationsErreur = document.getElementById("location1");
console.log(locations);
const checkbox1 = document.getElementById("checkbox1");
const submitBouton = document.querySelector(".btn-submit");

//submitBouton.addEventListener('click', validfirstname) pas besoin car declare
//dans l'html ligne 67

function validate() {

  //validation du prénom
  if (first.value.length < 2) {
    //validation du prénom
    //récupération du data-error décrit dans le css
    //first.closest("div") recupère la première div parent car la je suis sur l'input
    first.closest("div").setAttribute("data-error-visible", true);
    first.closest("div").setAttribute("data-error",
    "Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
    first.focus();
    return false;
  } else {
    first.closest("div").setAttribute("data-error-visible", false);
  }
  //validation du nom
  if (last.value.length < 2) {
    console.log(last.closest("div"));
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
  //utilisation d'un regex pour vérifier la validité de la saisie utilisateur
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
    birthdate.closest("div").setAttribute("data-error","Veuillez entrer une date valide.");
    birthdate.focus();
    return false;
  }
 //validation du nombre de participation
 //utilisation d'un regex pour vérifier la validité de la saisie utilisateur
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

console.log(locations[0]);
console.log(locations[1]);
console.log(locations[2]);
console.log(locations[3]);
console.log(locations[4]);
console.log(locations[5]);
  if (locations[0].checked=== false && locations[1].checked=== false
    && locations[2].checked=== false && locations[3].checked=== false
    && locations[4].checked=== false && locations[5].checked=== false
    ) 
//if (OneLocation === False)
{
  console.log("décoché"); 
  locationsErreur.closest("div").setAttribute("data-error-visible", true);
  locationsErreur
     .closest("div")
     .setAttribute(
       "data-error",
       "Vous devez choisir une ville."
     );
     locationsErreur.focus();
return false;
  } 
  else {
    locationsErreur.closest("div").setAttribute("data-error-visible", false);
    console.log("coché");
    //return false;
   
   
 }

//validation des conditions d'utilisation
  if (checkbox1.checked === false) {
    console.log(checkbox1.value); 
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
}

