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
const first = document.getElementById('first');
const last = document.getElementById('last');
const email = document.getElementById('email');
var mailvalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//const birthdate = document.querySelectorAll('birthdate');
//const quantity = document.querySelectorAll('quantity');
//const location = document.querySelectorAll('location');
//const checkbox1 = document.querySelectorAll('checkbox1');
//const checkbox2 = document.querySelectorAll('checkbox2');
const submitBouton = document.querySelector('.btn-submit')

//submitBouton.addEventListener('click', validfirstname) pas besoin car declare 
//dans l'html ligne 67

function validate() {
  console.log("test")

  if (first.value < 2 || first.value === "") {
    alert("Le prénom doit comporter 2 caractères minimum");
    first.parentElement.setAttribute('data-error-visible', 'true');
    first.focus();
    return false;
  }
  if (last.value < 2 || last.value === "") {
    alert("Le nom doit comporter 2 caractères minimum");
    last.focus();
    return false;
  }

  
  if(email.value.match(mailvalid))
  {
    return true; 
  }
  else
  {
  alert("You have entered an invalid email address!");
  email.focus();
  return false;
  }
}