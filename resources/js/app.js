const btnMenu = document.querySelector("#btnMenu"),
  overlay = document.querySelector(".overlay"),
  body = document.querySelector("body"),
  header = document.querySelector(".header"),
  fadeElems = document.querySelectorAll(".has-fade"),
  dateDev = document.querySelector("#date-dev"),
  author = document.querySelector("#author"),
  authorFooter = document.querySelector("#authorFooter"),
  authorDescription = document.querySelector("#authorDescription"),
  dauthorDev = document.querySelector("#authorDev"),
  effect = document.querySelector("#effect1"),
  skills = document.querySelector("#skills"),
  classSkill = document.querySelectorAll(".skill"),
  menuItems = document.querySelectorAll(".header__menu a"),
  links = document.querySelectorAll(".header__links li a"),
  theme = document.querySelector("[data-theme]"),
  tooggleSwitch = document.querySelector("#toggleSwitch"),
  projects = document.querySelector("#projects"),
  services = document.querySelector("#services"),
  OBJDATA = new Data(),
  HOMEIMG = document.querySelector('.home__img'),
  HOMEDATA = document.querySelector('.home__data')
let skill = "",
  project = "",
  service = "",
  data,
  row = 0,
  column = 0,
  date = new Date(),
  year = date.getFullYear(), code

document.addEventListener("DOMContentLoaded", () => {
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? theme.setAttribute("data-theme", "dark") : theme.setAttribute("data-theme", "light")
  !localStorage.getItem('userTheme') ? localStorage.setItem('userTheme', theme.getAttribute('data-theme')) : 0
  /*HOMEIMG.setAttribute('style', 'z-index: 1')
  HOMEDATA.setAttribute('style', 'z-index: 1')
  effect.setAttribute('style', 'z-index: 1')*/
  dateDev.append(`2021-${year}`);
  data = OBJDATA.getData();
  author.append(`${data.migue.name}`);
  authorFooter.append(`${data.migue.name}`);
  authorDescription.append(`${data.migue.description}`);
  authorDev.append(`${data.migue.dev}`);
  effect.innerHTML =
    "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
  data.migue.code.map((value) => {
    skill += `
    <div class="skill ${value.name} glassmorphism tooltip ">
    <img src="${value.image}" alt="${value.name}">
    <span class="tooltiptext">${value.name}</span>
    </div>
    `;
  });
  data.migue.projects.map((value) => {
    project += `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
        <img src="${value.src}" alt="${value.alt}">
        </div>
        <div class="flip-card-back">
          <h3>${value.name}</h3>
          <p>${value.description}</p>
        </div>
      </div>
    </div>
    `;
  });
  data.migue.services.map((value) => {
    service += `
    <div class="glassmorphism tooltip">
      <span class="iconify" data-icon="${value.icon}"></span>
      <span class="tooltiptext">${value.name}</span>
    </div>
    `;
  });
  services.innerHTML = service;
  projects.innerHTML = project;
  skills.innerHTML = skill;
  setInterval(() => {
    data.migue.code.map(value => {
      column = random(1,12)
      row = random(3,11)
      if((row <= 5 || row > 8) && (column <= 5 || column > 11)){
        document.querySelector(`.${value.name}`).setAttribute('style', `
          display: block;
          transition: all 0.1s
        `)
      }else{
        document.querySelector(`.${value.name}`).setAttribute('style', `
          display: none;
          transition: all 0.1s
        `)
      }
    })
  }, 2500)
});

function toggleMenu() {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
}

btnMenu.addEventListener("click", () => {
  console.log("click menu");
  toggleMenu();
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    toggleMenu();
  });
});
links.forEach((link) => {
  link.addEventListener("click", (action) => {
    /* console.log(action.target); */
    links.forEach((link) => link.classList.remove("active"));
    action.target.classList.add("active");
  });
});

tooggleSwitch.addEventListener("click", () => {
  if (theme.getAttribute("data-theme") == "light") {
    theme.setAttribute("data-theme", "dark");
    tooggleSwitch.classList.toggle("darkmode");
    localStorage.setItem('userTheme', theme.getAttribute('data-theme'))
  } else {
    theme.setAttribute("data-theme", "light");
    tooggleSwitch.classList.toggle("darkmode");
    localStorage.setItem('userTheme', theme.getAttribute('data-theme'))
  }
});

const random = (min, max) => Math.floor(Math.random() *((max+1)-min)+1)
