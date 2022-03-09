console.log('Hello World');

// function calcul() {
//   const firstValue = parseInt(window.prompt("Votre premier chiffre"));
//   const operator = window.prompt("Votre operateur");
//   const secondValue = parseInt(window.prompt("Votre second chiffre"));

//   switch (operator) {
//     case "+":
//       return firstValue + secondValue;
//     case "-":
//       return firstValue - secondValue;
//     case "*":
//       return firstValue * secondValue;
//     case "/":
//       return firstValue / secondValue;

//     default:
//       return 'Invalid Operator';
//   }
// }

// console.log(calcul());

const nom = prompt("Quel est votre prénom ?");
const number = Math.floor(Math.random() * 100 + 1);
let userValue = parseInt(prompt('Choisis un nombre'));

while (userValue !== number) {
  let msg;
  console.log(userValue)
  if (userValue > 100) {
    msg = 'Le chiffre est compris entre 1 et 100'
  } else if (userValue > number) {
    msg = 'C est moins'
  } else if (userValue > 0) {
    msg = 'C est plus'
  } else if (userValue !== NaN) {
    msg = 'Cela doit être un chiffre'
  } else {
    msg = 'Le chiffre doit être supérieur à 0'

  }
  userValue = parseInt(prompt(msg)); //Force l'arrêt de la boucle
}

console.log(`${nom} wins`);
