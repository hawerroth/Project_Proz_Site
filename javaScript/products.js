function addHighlight(helper) {
  helper.classList.add("highlighted");
}

function removeHighlight(helper) {
  helper.classList.remove("highlighted");
}

//  Evento mouse button quero Encomendar

// let btnEncomendar = document.getElementById("quero-encomendar");
// console.log(btnEncomendar);

// for (let i = 0 ; i < btnEncomendar.length; i++) {
//   if (btnEncomendar[i].outerText == "QUERO ENCOMENDAR"){
//     btnEncomendar[i].addEventListener("mouseover", (e) => {
//       btnEncomendar[i].classList.add("btn-after");
//     });
//   };
// }

// Event mouse card produto
let cardProduct = document.getElementsByClassName("card-photo");

// I use the for to run the cardProduct array, to know what card-photo the mouse is over.
for (let i = 0 ; i < cardProduct.length; i++) {
  cardProduct[i].addEventListener("mouseover", (e) => {
    addHighlight(cardProduct[i]);
  });
}
for (let i = 0 ; i < cardProduct.length; i++) {
  cardProduct[i].addEventListener("mouseout", (e) => {
    removeHighlight(cardProduct[i]);
  });
}
