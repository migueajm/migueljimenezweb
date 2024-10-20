const loader = {
  show: () => {
    document.querySelector('main').classList.add('hide');
    document.querySelector('.loader-container').classList.remove('hide');
  },
  hide: () => {
    document.querySelector('main').classList.remove('hide');
    document.querySelector('.loader-container').classList.add('hide');
  }
}

const random = (min, max) => Math.floor(Math.random() * (max + 1 - min) + 1);

const setTheme = (theme, tooggleSwitch, mode) => {
  theme.setAttribute("data-theme", mode);
  tooggleSwitch.classList.toggle("darkmode");
  localStorage.setItem("theme", theme.getAttribute("data-theme"));
};
document.addEventListener("DOMContentLoaded", async () => {
  const btnMenu = document.querySelector("#btnMenu"),
    body = document.querySelector("body"),
    header = document.querySelector(".header"),
    fadeElems = document.querySelectorAll(".has-fade"),
    dateDev = document.querySelector("#date-dev"),
    authorFooter = document.querySelector("#authorFooter"),
    effect = document.querySelector("#effect1"),
    skills = document.querySelector("#skills"),
    theme = document.querySelector("[data-theme]"),
    tooggleSwitch = document.querySelector("#toggleSwitch"),
    projects = document.querySelector("#projects"),
    services = document.querySelector("#services"),
    Nbmenu = document.querySelector(".header__links"),
    HBmenu = document.querySelector(".header__menu"),
    homeData = document.querySelector(".home__data"),
    resume = document.querySelector("#resume").childNodes[1],
    roqbyte = document.querySelector("#roqbyte"),
    description_roqbyte = document.querySelector("#description_roqbyte"),
    resume__info = document.querySelector(".resume__info").childNodes,
    portfolio = document.querySelector("#portfolio").childNodes,
    projects_services = portfolio[3].childNodes,
    contact = document.querySelector(".contact"),
    bye = document.querySelector(".bye"),
    OBJDATA = new Data();
  let skill = "",
    language = OBJDATA.getData().migue.language,
    lang = navigator.language.split("-"),
    project = "",
    service = "",
    data,
    row = 0,
    column = 0,
    date = new Date(),
    year = date.getFullYear(),
    code,
    nav = "",
    menu = "";
  if (!localStorage.getItem("theme")) {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      theme.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  } else {
    theme.setAttribute("data-theme", localStorage.getItem("theme"));
  }
  language = language[lang[0]];
  data = OBJDATA.getData();
  language.nav.map((value) => {
    Nbmenu.innerHTML += `<li><a ${value.attribute}>${value.name}</a></li>`;
    HBmenu.innerHTML += `<a href="${value.menu}">${value.name}</a>`;
  });
  const links = document.querySelectorAll(".header__links li a");
  links.forEach((link) => {
    link.addEventListener("click", (action) => {
      links.forEach((link) => link.classList.remove("active"));
      action.target.classList.add("active");
    });
  });

  const menuItems = document.querySelectorAll(".header__menu a");
  homeData.innerHTML = `
        <h1>${language.welcome}<br><span>${data.migue.name}</span></h1>
        <h2>${language.description}</h2>
        <h2 class="career">${language.dev}</h2>
    `;
  resume.innerHTML = language.nav[2].name;
  roqbyte.innerHTML = language.community;
  description_roqbyte.innerHTML = language.communityDescription;
  resume__info[1].innerHTML = language.about;
  resume__info[3].innerHTML = language.aboutme;
  resume__info[5].innerHTML = language.cv;
  portfolio[1].innerHTML = language.nav[1].name;
  projects_services[1].innerHTML = language.project;
  projects_services[5].innerHTML = language.service;
  contact.innerHTML = language.contact;
  bye.innerHTML = language.bye;
  dateDev.append(`2021-${year}`);
  authorFooter.append(`${data.migue.name}`);
  let divs = "";
  for (let index = 0; index < 15; index++) {
    divs += "<div></div>";
  }
  effect.innerHTML = divs;
  data.migue.code.map((value) => {
    skill += `
        <div class="skill ${value.name} glassmorphism tooltip ">
        <img src="${value.image}" alt="${value.name}">
        <span class="tooltiptext">${value.name}</span>
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
  //skills.innerHTML = skill;
  btnMenu.addEventListener("click", () => {
    toggleMenu();
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      toggleMenu();
    });
  });

  tooggleSwitch.addEventListener("click", () =>
    theme.getAttribute("data-theme") == "light"
      ? setTheme(theme, tooggleSwitch, "dark")
      : setTheme(theme, tooggleSwitch, "light")
  );

  function toggleMenu() {
    if (header.classList.contains("open")) {
      body.classList.remove("noscroll");
      header.classList.remove("open");
      fadeElems.forEach((element) => {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
      return;
    }
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }

  const createCard = (imageUrl, title, description, date) => {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;

    const cardDescription = document.createElement('div');
    cardDescription.className = 'card-description';
    cardDescription.textContent = description;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer';
    cardFooter.textContent = `${lang[0] == 'es' ? 'Fecha' : 'Date'}: ${date}`;

    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    card.appendChild(cardFooter);
    return card;
  };
  const res = await fetch("resources/projects.json", { mode: 'no-cors' });
  if (!res.ok) return console.error("Not found");
  const projectsData = await res.json();
  projectsData.data.forEach(project => {
    const card = createCard(
      project.src,
      project.name,
      project.description[lang[0]].length >= 70
        ? project.description[lang[0]].substring(0, 69) + '...'
        : project.description[lang[0]],
      project.createdAt
    );
    projects.appendChild(card);
  })
  setTimeout(() => {
    loader.hide();
  }, 1200);
});
