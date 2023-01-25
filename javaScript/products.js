// Event mouse card produto
let cardPhoto = document.getElementsByClassName("card-photo");

Array.from(cardPhoto).forEach(card => {
  card.addEventListener("mouseenter", (e) => {
    card.classList.add("border-zoom");
  });
  card.addEventListener("mouseleave", (e) => {
    card.classList.remove("border-zoom");
  });
});

const btnEncomendar = document.querySelector("bottom");

function newTab(bottom) {
  window.location.replace("../view_pages/formProducts.html");
}

btnEncomendar.addEventListener("click", (e) => {
  newTab(btnEncomendar);
});
