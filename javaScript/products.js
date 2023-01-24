// Event mouse card produto
let cardPhoto = document.getElementsByClassName("card-photo");

console.log(cardPhoto);

Array.from(cardPhoto).forEach(card => {
  card.addEventListener("mouseenter", (e) => {
      console.log("Evento mouse");
      card.classList.add("border-zoom");
  });
  card.addEventListener("mouseleave", (e) => {
      card.classList.remove("border-zoom");
  });
});
// for (let i = 0 ; i < cardPhoto.length; i++) {
//   cardPhoto[i].addEventListener("mouseenter", (e) => {
//     console.log("Evento mouse");
//     cardPhoto[i].classList.add("highlighted");
//   });
//   cardPhoto[i].addEventListener("mouseleave", (e) => {
//     cardPhoto[i].classList.remove("highlighted");
//   });
// }
