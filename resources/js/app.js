const btnMenu =  document.querySelector('#btnMenu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

function toggleMenu() {
  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach((element) => {
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });
  }  
}

btnMenu.addEventListener('click', () => {
  console.log('click menu');
  toggleMenu();
});

const menuItems = document.querySelectorAll('.header__menu a');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    toggleMenu();
  });
}); 
const links = document.querySelectorAll('.header__links li a');
links.forEach((link) => {
  link.addEventListener('click', (action) => {
    /* console.log(action.target); */
    links.forEach((link) => link.classList.remove('active'));
    action.target.classList.add('active');
  });
});

const tooggleSwitch = document.querySelector('#toggleSwitch');
let theme = document.querySelector('[data-theme]');
tooggleSwitch.addEventListener('click', () => {
  if(theme.getAttribute('data-theme') == 'light') {
    theme.setAttribute('data-theme', 'dark');
    tooggleSwitch.classList.toggle('darkmode');
  }
  else {
    theme.setAttribute('data-theme', 'light');
    tooggleSwitch.classList.toggle('darkmode');
  }
});