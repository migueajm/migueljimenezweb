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
  OBJDATA = new Data();
let skill = "",
  data,
  row = 0,
  column = 0,
  date = new Date(),
  year = date.getFullYear();

document.addEventListener("DOMContentLoaded", () => {
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
    <div class="skill ${value.name} glassmorphism tooltip">
      <img src="${value.image}" alt="${value.name}">
      <span class="tooltiptext">${value.name}</span>
    </div>
  `;
  });
  classSkill.cssText = `
    

  `;
  skills.innerHTML = skill;
  console.log(data);
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
  } else {
    theme.setAttribute("data-theme", "light");
    tooggleSwitch.classList.toggle("darkmode");
  }
});
