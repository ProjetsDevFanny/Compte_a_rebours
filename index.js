// Créer la logique de compte à rebours

// choice.value = 5 minutes

// choice.value * 60 = totalSeconds

// let minutes = Math.floor(totalSeconds / 60);
// let seconds = totalSeconds % 60
// = méthode modulo

// Créer un événement à la validation du form pour lancer le compte à rebours

// SetInterval() qui se joue toutes les 1 secondes

// ------------------------------------------------------------------------------------------------

let choice = document.getElementById("choice");
const form = document.getElementById("form");
let countdownDisplay = document.getElementById("countdownDisplay");
let totalSeconds = choice.value * 60;
let minutes = Math.floor(totalSeconds / 60);
let secondes = totalSeconds % 60;
let intervalId; // Stocke l'ID du setInterval pour le stopper plus tard

// Fonction sonnerie quand compte à rebours terminé:
const ring = () => {
  const audio = new Audio();
  audio.src = "./sonnerie.mp3";
  audio.play();
};

// Evènement à la validation du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Réinitialise les valeurs
  totalSeconds = choice.value * 60;
  minutes = Math.floor(totalSeconds / 60);
  secondes = totalSeconds % 60;
  let secondesAffichees = secondes < 10 ? "0" + secondes : secondes;
  let minutesAffichees = minutes < 10 ? "0" + minutes : minutes;
  countdownDisplay.textContent = `${minutesAffichees} : ${secondesAffichees}`;

  // Stoppe le précédent intervalle s'il existe
  clearInterval(intervalId);

  // Démarre un nouveau compte à rebours
  intervalId = setInterval(countdown, 1000);
});

// Fonction compte à rebours
function countdown() {
  // Condition d'arrêt du compte à rebours
  if (secondes === 0 && minutes === 0) {
    clearInterval(intervalId); // Arrêter le compte à rebours à zéro
    ring((countdownDisplay.textContent = "00 : 00"));
    return; // Terminer la fonction ici
  }

  // Si les secondes arrivent à zéro
  if (secondes === 0) {
    if (minutes > 0) {
      minutes--; // Décrémente les minutes
      secondes = 59; // Remet les secondes à 59
    }
  } else {
    secondes--; // Sinon, juste décrémenter les secondes
  }

  // Ajouter un zéro devant si secondes < 10 pour l'affichage
  secondesAffichees = secondes < 10 ? "0" + secondes : secondes;
  minutesAffichees = minutes < 10 ? "0" + minutes : minutes;

  countdownDisplay.textContent = `${minutesAffichees} : ${secondesAffichees}`; // Mise à jour de l'affichage
}
