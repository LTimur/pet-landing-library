// Burger

const burgerOpenButton = document.querySelector(".burger-icon");
const burgerCloseButton = document.querySelector(".burger-close");
let burgerMenu = document.querySelector(".burger-menu");

burgerMenu.style.display = "none";

function openBurgerMenu() {
  burgerMenu.style.display = "block";
  burgerMenu.classList.remove("roll-up-animation");
  burgerMenu.classList.add("roll-down-animation");
}

function closeBurgerMenu() {
  burgerMenu.classList.remove("roll-down-animation");
  burgerMenu.classList.add("roll-up-animation");
  setTimeout(() => {
    burgerMenu.style.display = "none";
  }, 500);
}

burgerOpenButton.addEventListener("click", openBurgerMenu);
burgerCloseButton.addEventListener("click", closeBurgerMenu);

// Slider
const sliderLeftButton = document.querySelector(".slider-leftbutton");
const sliderRightButton = document.querySelector(".slider-rightbutton");
const sliderItems = document.querySelector(".slider-line");
const sliderWrapper = document.querySelector(".slider-wrapper");
const dots = document.querySelectorAll(".slider-button");
const width = 450;
let offset = 0;

// Slider dots
dots.forEach((button, index) => {
  button.addEventListener('click', () => {
    dots.forEach((button) => button.classList.remove('slider-button--active'));
    button.classList.add('slider-button--active');
    
    let translateX = 0
    if(window.getComputedStyle(sliderWrapper).width === '1400px'){
      translateX = index * -475;
    }
    else{
      translateX = index * -450;
    }

    sliderItems.style.transform = `translateX(${translateX}px)`;
  });
});

function slideLeftSlider() {
  if (offset > 0) {
    offset -= width;
    const activeDotIndex = offset / width;
    
    dots.forEach((button, index) => {
      if (index === activeDotIndex) {
        button.classList.add('slider-button--active');
      } else {
        button.classList.remove('slider-button--active');
      }
    });
  }
  sliderItems.style.transform = `translateX(-${offset}px)`;
}

function slideRightSlider() {
  const maxOffset = (dots.length - 1) * width;
  if (offset < maxOffset) {
    offset += width;
    const activeDotIndex = offset / width;
    
    dots.forEach((button, index) => {
      if (index === activeDotIndex) {
        button.classList.add('slider-button--active');
      } else {
        button.classList.remove('slider-button--active');
      }
    });
  }
  sliderItems.style.transform = `translateX(-${offset}px)`;
}

sliderLeftButton.addEventListener("click", slideLeftSlider);
sliderRightButton.addEventListener("click", slideRightSlider);