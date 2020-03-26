const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.4;
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener("click", imgClick));

function imgClick(e) {
  //reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  //change current image to src of clicked image
  current.src = e.target.src;

  //add fade in class
  current.classList.add("fade-in");

  //remove face in class after 0.5 seconds
  setTimeout(() => {
    current.classList.remove("fade-in");
  }, 500);
  e.target.style.opacity = opacity;
}
