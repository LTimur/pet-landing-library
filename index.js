// Burger

const burgerOpenButton = document.querySelector(".burger-icon");
const burgerCloseButton = document.querySelector(".burger-close");
let burgerMenu = document.querySelector(".burger-menu");

burgerMenu.style.display = "none";

function openBurgerMenu() {
  dropMenu.style.display = "none";
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

// Dropmenu
const profileButtons = document.querySelectorAll(".icon-profile");
let dropMenu = document.querySelector(".dropmenuprofile");

function toggleDropmenu() {
  closeBurgerMenu()
  if (dropMenu.style.display === "none" || dropMenu.style.display === "" ) {
    dropMenu.style.display = "block";
  } else {
    dropMenu.style.display = "none";
  }
}

profileButtons.forEach((button) => {
  button.addEventListener('click', toggleDropmenu);
});


// Modal
const overlay = document.getElementById('overlay');
const registerOpenButtons = document.querySelectorAll(".registerbutton");
const loginOpenButtons = document.querySelectorAll(".loginbutton");
const registerCloseButton = document.querySelector(".register__closebutton");
const loginCloseButton = document.querySelector(".login__closebutton");

const registerModal = document.querySelector(".register");
const loginModal = document.querySelector(".login");

function showLoginModal() {
  registerModal.style.display = "none";
  overlay.style.display = 'flex';
  loginModal.style.display = "block";
  dropMenu.style.display = "none";
}
function showRegisterModal() {
  loginModal.style.display = "none";
  overlay.style.display = 'flex';
  registerModal.style.display = "block";
  dropMenu.style.display = "none";
}
function closeLoginModal() {
  loginModal.style.display = "none";
  overlay.style.display = 'none';
}
function closeRegisterModal() {
  registerModal.style.display = "none";
  overlay.style.display = 'none';
}

registerOpenButtons.forEach((button) => {
  button.addEventListener("click", showRegisterModal);
});
loginOpenButtons.forEach((button) => {
  button.addEventListener("click", showLoginModal);
});
overlay.addEventListener('click', (event) => {
  if (event.target === overlay) {
    loginModal.style.display = 'none';
    registerModal.style.display = 'none';
    overlay.style.display = 'none';
  }
});
registerCloseButton.addEventListener("click", closeRegisterModal);
loginCloseButton.addEventListener("click", closeLoginModal);

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

/* Books cards */

const seasonButtons = document.querySelectorAll(".favorites__seasons-input");
const booksSeason = document.querySelectorAll(".books__season");

seasonButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const selectedSeason = button.id;

        booksSeason.forEach((card) => {
            card.classList.remove("visible");
        });

        const selectedSeasonCards = document.querySelectorAll(`.books__season.${selectedSeason}`);
        selectedSeasonCards.forEach((card) => {
            card.classList.add("visible");
        });
    });
});

