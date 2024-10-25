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
  if(mode == 'dark'){
    document.querySelector('#sun').classList.remove('hide');
    document.querySelector('#moon').classList.add('hide');
  }else{
    document.querySelector('#moon').classList.remove('hide');
    document.querySelector('#sun').classList.add('hide');
  }
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
    blockAnimate = document.querySelector('.block-animate');
    OBJDATA = new Data();
  const closeModalBtn = document.querySelector('#close-dialog');
  let skill = "",
    language = OBJDATA.getData().migue.language,
    lang = navigator.language.split("-"),
    project = "",
    service = "",
    data,
    date = new Date(),
    year = date.getFullYear();
  if (!localStorage.getItem("theme")) {
    (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      ? setTheme(theme, tooggleSwitch, "dark")
      : setTheme(theme, tooggleSwitch, "light");
  } else setTheme(theme, tooggleSwitch, localStorage.getItem("theme"));
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
        <h2>${language.welcome}</h2>
        <h1 class="career">${data.migue.name}</h1>
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
  /* data.migue.services.map((value) => {
    service += `
        <div class="glassmorphism tooltip">
        <span class="iconify" data-icon="${value.icon}"></span>
        <span class="tooltiptext">${value.name}</span>
        </div>
        `;
  }); */
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

  document.querySelector('dialog').addEventListener('click', function(event) {
    const dialogRect = this.getBoundingClientRect();
    if (
      event.clientX < dialogRect.left || 
      event.clientX > dialogRect.right || 
      event.clientY < dialogRect.top || 
      event.clientY > dialogRect.bottom
    ) {
      document.querySelector('dialog').close();
    }
  });

  const modal = {
    show: () => document.querySelector('dialog').showModal(),
    hide: () => {
      document.querySelector('dialog').close();
      document.location.href = "#portfolio";
    }
  };
  closeModalBtn?.addEventListener('click', () => modal.hide());

  const buildModal = object => {
    const img = document.querySelector('#img-dialog');
    const title = document.querySelector('#title-dialog');
    const type = document.querySelector('#type-dialog');
    const date = document.querySelector('#date-dialog');
    const description = document.querySelector('#description-dialog');
    const skill = document.querySelector('.skills-dialog');
    const download = document.querySelector('#download-dialog');
    let sk = "";
    let dl = "";
    img.src = object.imageSrc;
    title.textContent = object.name;
    type.textContent = object.type;
    date.textContent = object.createdAt;
    description.textContent = object.description[lang[0]] + object.description[lang[0]];
    object.skill.forEach(a => {
      sk += `<div class="tooltip">
        <img class="img-skill" src="resources/img/code/${a.src}" alt="${a.name}"/>
        <span class="tooltiptext">${a.name}</span>
      </div>`;
    })
    if(object?.video){
      dl += `<a href="${object.video}" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="35" height="35">
          <path fill="#FF0000" d="M23.499 6.203A2.998 2.998 0 0 0 21.588 4.2C19.727 3.917 12 3.917 12 3.917s-7.727 0-9.588.283A2.998 2.998 0 0 0 .501 6.203C.218 8.071 0 10.06 0 12.002c0 1.94.218 3.93.501 5.8a2.998 2.998 0 0 0 1.911 2.002c1.861.283 9.588.283 9.588.283s7.727 0 9.588-.283a2.998 2.998 0 0 0 1.911-2.002c.283-1.87.501-3.86.501-5.8 0-1.942-.218-3.93-.501-5.8z"/>
          <polygon fill="#FFF" points="9.75 15.505 15.5 12.002 9.75 8.499"/>
        </svg>
      </a>`
    }
    if(object?.store){
      dl += `<a href="${object.store.android}" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32" fill="none">
          <mask id="mask0_87_8320" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="7" y="3" width="24" height="26">
          <path d="M30.0484 14.4004C31.3172 15.0986 31.3172 16.9014 30.0484 17.5996L9.75627 28.7659C8.52052 29.4459 7 28.5634 7 27.1663L7 4.83374C7 3.43657 8.52052 2.55415 9.75627 3.23415L30.0484 14.4004Z" fill="#C4C4C4"/>
          </mask>
          <g mask="url(#mask0_87_8320)">
          <path d="M7.63473 28.5466L20.2923 15.8179L7.84319 3.29883C7.34653 3.61721 7 4.1669 7 4.8339V27.1664C7 27.7355 7.25223 28.2191 7.63473 28.5466Z" fill="url(#paint0_linear_87_8320)"/>
          <path d="M30.048 14.4003C31.3169 15.0985 31.3169 16.9012 30.048 17.5994L24.9287 20.4165L20.292 15.8175L24.6923 11.4531L30.048 14.4003Z" fill="url(#paint1_linear_87_8320)"/>
          <path d="M24.9292 20.4168L20.2924 15.8179L7.63477 28.5466C8.19139 29.0232 9.02389 29.1691 9.75635 28.766L24.9292 20.4168Z" fill="url(#paint2_linear_87_8320)"/>
          <path d="M7.84277 3.29865L20.2919 15.8177L24.6922 11.4533L9.75583 3.23415C9.11003 2.87878 8.38646 2.95013 7.84277 3.29865Z" fill="url(#paint3_linear_87_8320)"/>
          </g>
          <defs>
          <linearGradient id="paint0_linear_87_8320" x1="15.6769" y1="10.874" x2="7.07106" y2="19.5506" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00C3FF"/>
          <stop offset="1" stop-color="#1BE2FA"/>
          </linearGradient>
          <linearGradient id="paint1_linear_87_8320" x1="20.292" y1="15.8176" x2="31.7381" y2="15.8176" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFCE00"/>
          <stop offset="1" stop-color="#FFEA00"/>
          </linearGradient>
          <linearGradient id="paint2_linear_87_8320" x1="7.36932" y1="30.1004" x2="22.595" y2="17.8937" gradientUnits="userSpaceOnUse">
          <stop stop-color="#DE2453"/>
          <stop offset="1" stop-color="#FE3944"/>
          </linearGradient>
          <linearGradient id="paint3_linear_87_8320" x1="8.10725" y1="1.90137" x2="22.5971" y2="13.7365" gradientUnits="userSpaceOnUse">
          <stop stop-color="#11D574"/>
          <stop offset="1" stop-color="#01F176"/>
          </linearGradient>
          </defs>
        </svg>
      </a>
      <a href="${object.store.ios}" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_8317)"/>
          <path d="M18.4468 8.65403C18.7494 8.12586 18.5685 7.45126 18.0428 7.14727C17.5171 6.84328 16.8456 7.02502 16.543 7.55318L16.0153 8.47442L15.4875 7.55318C15.1849 7.02502 14.5134 6.84328 13.9877 7.14727C13.462 7.45126 13.2811 8.12586 13.5837 8.65403L14.748 10.6864L11.0652 17.1149H8.09831C7.49173 17.1149 7 17.6089 7 18.2183C7 18.8277 7.49173 19.3217 8.09831 19.3217H18.4324C18.523 19.0825 18.6184 18.6721 18.5169 18.2949C18.3644 17.7279 17.8 17.1149 16.8542 17.1149H13.5997L18.4468 8.65403Z" fill="white"/>
          <path d="M11.6364 20.5419C11.449 20.3328 11.0292 19.9987 10.661 19.8888C10.0997 19.7211 9.67413 19.8263 9.45942 19.9179L8.64132 21.346C8.33874 21.8741 8.51963 22.5487 9.04535 22.8527C9.57107 23.1567 10.2425 22.975 10.5451 22.4468L11.6364 20.5419Z" fill="white"/>
          <path d="M22.2295 19.3217H23.9017C24.5083 19.3217 25 18.8277 25 18.2183C25 17.6089 24.5083 17.1149 23.9017 17.1149H20.9653L17.6575 11.3411C17.4118 11.5757 16.9407 12.175 16.8695 12.8545C16.778 13.728 16.9152 14.4636 17.3271 15.1839C18.7118 17.6056 20.0987 20.0262 21.4854 22.4468C21.788 22.975 22.4594 23.1567 22.9852 22.8527C23.5109 22.5487 23.6918 21.8741 23.3892 21.346L22.2295 19.3217Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_87_8317" x1="16" y1="2" x2="16" y2="30" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2AC9FA"/>
          <stop offset="1" stop-color="#1F65EB"/>
          </linearGradient>
          </defs>
        </svg>
      </a>`
    }
    download.innerHTML = dl;
    skill.innerHTML = sk;
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
    card.addEventListener('click', () => {
      buildModal(project);
      modal.show();
    });
    card.addEventListener('mouseenter', () => {
      if(blockAnimate.classList.contains('active')) return;
      let s = '';
      let i = 1;
      blockAnimate.textContent = '';
      blockAnimate.classList.add('active');
      project.skill.forEach(a => {
        s += `<div class="block block${i}"><img src="resources/img/code/${a.src}" alt="${a.name}"/></div>`;
        i++;
      })
      blockAnimate.innerHTML = s;
    });
    
    card.addEventListener('mouseleave', () => {
      blockAnimate.classList.remove('active');
    });
    projects.appendChild(card);
  })
  setTimeout(() => {
    loader.hide();
    /* function swapBlockClasses() {
      const blocks = document.querySelectorAll('.block');
      const classes = Array.from(blocks).map(block => block.className);
    
      const newClasses = [classes[1], classes[2], classes[3], classes[4], classes[5], classes[6], classes[7], classes[0]];
    
      blocks.forEach((block, index) => {
        block.className = newClasses[index];
      });
    }
    
    setInterval(swapBlockClasses, 3000); */
  }, 300);
});
