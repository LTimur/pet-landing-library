const burgerOpenButton = document.querySelector('.burger-icon');
const burgerCloseButton = document.querySelector('.burger-close');
let burgerMenu = document.querySelector('.burger-menu');

// Hide the burger menu initially
burgerMenu.style.display = 'none';

// Function to open the burger menu
function openBurgerMenu() {
  burgerMenu.style.display = 'block';
  burgerMenu.classList.remove('roll-up-animation');
  burgerMenu.classList.add('roll-down-animation');
}

// Function to close the burger menu
function closeBurgerMenu() {
  burgerMenu.classList.remove('roll-down-animation');
  burgerMenu.classList.add('roll-up-animation');
  setTimeout(() => {
    burgerMenu.style.display = 'none';
  }, 500); // Change the value if you want to adjust the animation duration
}

// Add a click event listener to the open button
burgerOpenButton.addEventListener('click', openBurgerMenu);

// Add a click event listener to the close button
burgerCloseButton.addEventListener('click', closeBurgerMenu);