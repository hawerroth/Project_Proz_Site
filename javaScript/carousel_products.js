// Style to images slider carousel
// Get all elements with the class name "control", which are the arrows for navigating the images.
const controls = document.querySelectorAll(".control");
// Get all elements with the class name "image", which are the images to be displayed.
const images = document.getElementsByClassName("image");
const maxImages = images.length;

// Keep track of the currently displayed image.
let currentImage = 0;

// Add click event listeners to each control (arrow).
controls.forEach((control) => {
  control.addEventListener("click", () => {
    // To know in which arrow the user clicked
    const isLeft = control.classList.contains("arrow-left");
    // Decrement or increment the current image based on which arrow was clicked.
    if (isLeft) {
      currentImage -= 1;
    }
    else {
      currentImage += 1;
    }

    // Ensure that the current image index is never negative or greater than the number of images.
    if (currentImage >= maxImages) {
      currentImage = 0;
    }
    if (currentImage < 0) {
      currentImage = maxImages - 1;
    }

    // Remove the "current-image" class from all images.
    Array.prototype.forEach.call(images, image => {
      image.classList.remove("current-image");
    });

    // Scroll the current image into view, with a smooth animation.
    images[currentImage].scrollIntoView({
      block: "center",
      inline: "center",
      behavior: "smooth"
    });
    // Add the "current-image" class to the current image.
    images[currentImage].classList.add("current-image")
  });
});
