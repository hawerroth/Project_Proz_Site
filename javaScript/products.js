// Event mouse card produto
let cardPhoto = document.getElementsByClassName("card-photo");

console.log(cardPhoto);
for (let i = 0 ; i < cardPhoto.length; i++) {
  cardPhoto[i].addEventListener("mouseover", (e) => {
    cardPhoto[i].classList.add("highlighted");
  });
}
for (let i = 0 ; i < cardPhoto.length; i++) {
  cardPhoto[i].addEventListener("mouseout", (e) => {
    cardPhoto[i].classList.remove("highlighted");
  });
}
