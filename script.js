let number_1 = "";
let number_2 = "";
let operation = "";
let resultat = "";

let calcul = document.querySelector(".bouton button");
calcul.addEventListener("click", function () {
  operation = document.getElementById("operation").value;
  number_1 = Number(document.getElementById("number1").value);
  number_2 = Number(document.getElementById("number2").value);
  if (operation === "addition") {
    resultat = number_1 + number_2;
  } else if (operation === "soustraction") {
    resultat = number_1 - number_2;
  } else if (operation === "multiplication") {
    resultat = number_1 * number_2;
  } else if (operation === "division") {
    if (number_2 === 0) {
      resultat = "La division est impossible";
    } else {
      resultat = number_1 / number_2;
    }
  }
  document.getElementById("resultat").value = resultat;
});
