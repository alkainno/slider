const imgs = document.querySelectorAll(".imgs");
console.log(imgs);
const dots = document.querySelectorAll(".dot");
let counter = 0;

const updateDots = () => {
  dots.forEach((dot, index) => {
    if (index === counter) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
};

updateDots();
imgs.forEach((img, index) => {
  img.style.left = `${index * 100}%`;
});

const updateButtonVisibility = () => {
  const prevButton = document.querySelector(".less-than");
  const nextButton = document.querySelector(".greater-than");
  prevButton.style.display = counter === 0 ? "none" : "block";
  nextButton.style.display = counter === imgs.length - 1 ? "none" : "block";
};
updateButtonVisibility();
const Next = () => {
  counter++;
  if (counter >= imgs.length) {
    counter = 0;
  }
  slideimg();
  updateDots();
  updateButtonVisibility();
};
const Prev = () => {
  counter--;
  if (counter < 0) {
    counter = imgs.length - 1;
  }
  slideimg();
  updateDots();
  updateButtonVisibility();
};
const slideimg = () => {
  imgs.forEach((img) => {
    img.style.transform = `translateX(-${counter * 100}%)`;
  });
};
const currentSlide = (slideIndex) => {
  counter = slideIndex - 1;
  slideimg();
  updateDots();
  updateButtonVisibility();
};
