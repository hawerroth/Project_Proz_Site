// Styles to products cards
function addHighlight(helper) {
  helper.classList.add("highlighted");
}

function removeHighlight(helper) {
  helper.classList.remove("highlighted");
}

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
