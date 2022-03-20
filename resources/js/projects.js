let src = "resources/img/code/";
let author = document.querySelector("#author");
let authorFooter = document.querySelector("#authorFooter");
let authorDescription = document.querySelector("#authorDescription");
let dauthorDev = document.querySelector("#authorDev");
let effect = document.querySelector("#effect1");
let skills = document.querySelector("#skills");

let menu = {
  navbar: ["Home", "Portfolio", "Services", "Resume"],
  service: [
    "Web design",
    "Web application",
    "Mobile application Android",
    "Mobile application IOS",
  ],
};

let projects = {
  migue: {
    name: "Miguel Angel Jimenez",
    description: "Information and Communications Technologies Engineer",
    dev: "Web Developer",
    title: "Miguel Angel Jimenez | Portfolio",
    skill: {
      code: {
        html: {
          name: "HTML",
          image: src + "html.png",
        },
        css: {
          name: "CSS",
          image: src + "css.png",
          framework: {
            sass: {
              name: "SASS",
              image: src + "sass.png",
            },
            materialize: {
              name: "Materialize",
              image: src + "materialize.png",
            },
            bootstrap: {
              name: "Bootstrap",
              image: src + "bootstrap.png",
            },
            tailwind: {
              name: "Tailwind-CSS",
              image: src + "tailwind.png",
            },
          },
        },
        JavaScript: {
          name: "JavaScript",
          image: src + "js.png",
          framework: {
            react: {
              name: "React",
              image: src + "react.png",
            },
          },
        },
        php: {
          name: "PHP",
          image: src + "php.png",
          framework: {
            laravel: {
              name: "Laravel",
              image: src + "laravel.png",
            },
            symfony: {
              name: "Symfony",
              image: src + "symfony.png",
            },
          },
        },
        sql: {
          name: "SQL",
          image: src + "sql.png",
        },
      },
      tool: {
        terminal: {
          name: "Terminal",
          image: src + "terminal.png",
        },
        git: {
          name: "GIT",
          image: src + "git.png",
        },
        mysql: {
          name: "GIT",
          image: src + "mysql.png",
        },
        potsgresql: {
          name: "GIT",
          image: src + "postgresql.png",
        },
        composer: {
          name: "GIT",
          image: src + "composer.png",
        },
      },
    },
  },
  crode: {
    name: "Solicitudes de servico de equipo de bienes informaticos",
    src: "resources/img/projects/appcrode.jpg",
    description:
      "<p>Computer asset equipment service requests<br>Web application for the administration & control of the entire IT department team</p>",
    date: "March-July 2021",
    url: "Web Application Crode",
  },
  majm: {
    name: "migueljimenezweb",
    src: "resources/img/projects/majm97.jpg",
    description: "Portfolio web",
    date: "July-Agust 2021",
    url: "https://migueajm.github.io/migueljimenezweb/",
  },
  kurigage: {
    name: "Listado de precios",
    src: "resources/img/projects/kurigage.jog",
    description:
      "Listado de precios para facilitar a los usuarios la busqueda de articulos.",
    date: "January-March 2022",
    urlt: "http://miportal.appskurigage.com/login:",
  },
};
author.append(`${projects.migue.name}`);
authorFooter.append(`${projects.migue.name}`);
authorDescription.append(`${projects.migue.description}`);
authorDev.append(`${projects.migue.dev}`);
effect.innerHTML =
  "<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";
