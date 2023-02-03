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

const btnEncomendar = document.getElementById("quero-encomendar");

btnEncomendar.addEventListener("mouseover", (e) => {
  btnEncomendar.style.backgroundColor = "#84D2C5";
  btnEncomendar.style.color = 'black';
});

btnEncomendar.addEventListener("mouseout", (e) => {
  btnEncomendar.style.backgroundColor = 'rgb(255, 95, 93)';
  btnEncomendar.style.color = 'white';
});

function newTab(bottom) {
  window.location.replace("../view_pages/formProducts.html");
}

btnEncomendar.addEventListener("click", (e) => {
  newTab(btnEncomendar);
});
