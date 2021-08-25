const btnMenu =  document.querySelector('#btnMenu');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

function showMenu() {
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
  showMenu();
});

const links = document.querySelectorAll('.header__links li a');
links.forEach((link) => {
  link.addEventListener('click', (action) => {
    action.preventDefault();
    /* console.log(action.target); */
    links.forEach((link) => link.classList.remove('active'));
    action.target.classList.add('active');
  });
});