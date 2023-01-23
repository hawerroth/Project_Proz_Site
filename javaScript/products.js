// Style to images slider carousel
const controls = document.querySelectorAll(".control");
const images = document.getElementsByClassName("image");
const maxImages = images.length;
let currentImage = 0;

controls.forEach((control) => {
  control.addEventListener("click", () => {
    // To know in which arrow the user clicked
    const isLeft = control.classList.contains("arrow-left");

    if (isLeft) {
      currentImage -= 1;
    }
    else {
      currentImage += 1;
    }
    // To not have negative index(currentImage)  or greater
    if (currentImage >= maxImages) {
      currentImage = 0;
    }
    if (currentImage < 0) {
      currentImage = maxImages - 1;
    }


    Array.prototype.forEach.call(images, image => {
      image.classList.remove("current-image");
    });

    images[currentImage].scrollIntoView({
      behavior: "smooth",
      inline: "center"
    });

    images[currentImage].classList.add("current-image")


    console.log("control", isLeft, currentImage);
  });
});


// Styles to products cards

function addHighlight(helper) {
  helper.classList.add("highlighted");
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
    cardProduct[i].remove("highlighted");
  });
}
