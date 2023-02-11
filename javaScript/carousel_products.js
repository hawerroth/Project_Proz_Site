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
      block: "center",
      inline: "center",
      behavior: "smooth"
    });

    images[currentImage].classList.add("current-image")


    // console.log("control", isLeft, currenmage);
  });
});
