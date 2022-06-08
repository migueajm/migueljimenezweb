class Data {
  getData() {
    const src = "resources/img/";
    let menu = {
      navbar: ["Home", "Portfolio", "Services", "Resume"],
      service: [
        "Web design",
        "Web application",
        "Mobile application Android",
        "Mobile application IOS",
      ],
    };
    let services = [
      {
        name: "Web design",
        icon: "et:mobile",
      },
      {
        name: "Web application",
        icon: "carbon:application-web",
      },
      {
        name: "Mobile application Android",
        icon: "cib:android-alt",
      },
      {
        name: "Mobile application IOS",
        icon: "cib:app-store-ios",
      },
    ];
    let code = [
      {
        name: "HTML",
        image: src + "code/html.png",
      },
      {
        name: "CSS",
        image: src + "code/css.png",
      },
      {
        name: "SASS",
        image: src + "code/sass.png",
      },
      {
        name: "Materialize",
        image: src + "code/materialize.png",
      },
      {
        name: "Bootstrap",
        image: src + "code/bootstrap.png",
      },
      {
        name: "Tailwind-CSS",
        image: src + "code/tailwind.png",
      },
      {
        name: "JavaScript",
        image: src + "code/js.png",
      },
      {
        name: "React",
        image: src + "code/react.png",
      },
      {
        name: "PHP",
        image: src + "code/php.png",
      },
      {
        name: "Laravel",
        image: src + "code/laravel.png",
      },
      {
        name: "Symfony",
        image: src + "code/symfony.png",
      },
      {
        name: "SQL",
        image: src + "code/sql.png",
      },
      {
        name: "Terminal",
        image: src + "code/terminal.png",
      },
      {
        name: "GIT",
        image: src + "code/git.png",
      },
      {
        name: "MySQL",
        image: src + "code/mysql.png",
      },
      {
        name: "PostgreSQl",
        image: src + "code/postgresql.png",
      },
      {
        name: "Composer",
        image: src + "code/composer.png",
      },
      {
        name: "GitHub",
        image: src + "code/github.png",
      },
      {
        name: "GitLab",
        image: src + "code/gitlab.png",
      },
      {
        name: "NodeJS",
        image: src + "code/nodejs.png",
      },
      {
        name: "Apache",
        image: src + "code/apache.png",
      },
      {
        name: "Windows",
        image: src + "code/windows.png",
      },
      {
        name: "MacOS",
        image: src + "code/macos.png",
      },
      {
        name: "Linux",
        image: src + "code/linux.png",
      },
      {
        name: "GitHub",
        image: src + "code/github.png",
      },
      {
        name: "Figma",
        image: src + "code/figma.png",
      },
      {
        name: "JQuery",
        image: src + "code/jquery.png",
      },
      {
        name: "Chrome",
        image: src + "code/chrome.png",
      },
      {
        name: "Mexico",
        image: src + "code/mexico.png",
      },
      {
        name: "Barcelona",
        image: src + "code/barcelona.png",
      },
      {
        name: "Kotlin",
        image: src + "code/kotlin.png",
      },
      {
        name: "Swift",
        image: src + "code/swift.png",
      },
      {
        name: "America",
        image: src + "code/america.png",
      },
      {
        name: "VSCode",
        image: src + "code/vscode.png",
      },
    ];
    let projects = [
      {
        name: "Solicitudes de servico de equipo de bienes informaticos",
        alt: "WEB APP CRODE",
        src: src + "projects/appcrode.jpg",
        description:
          "Aplicación web para la administracion de equipo y bienes informaticos.",
        date: "March-July 2021",
        url: "#WebApplicationCrode",
        code: 'Laravel, Livewire, TailwindCSS'
      },
      {
        name: "migueljimenezweb",
        alt: "PORTFOLIO",
        src: src + "projects/majm97.png",
        description: "Portfolio web",
        date: "July-Agust 2021",
        url: "https://migueajm.github.io/migueljimenezweb/",
        code: 'HTML, JavaScript, CSS, SCSS'
      },
      {
        name: "Listado de precios",
        alt: "MI PORTAL",
        src: src + "projects/portal.png",
        description:
          "Listado de precios para facilitar a los usuarios la busqueda de articulos.",
        date: "January-March 2022",
        url: "http://miportal.appskurigage.com/login",
        code: 'React, Symfony, JWT, Bootstrap'
      },
      {
        name: "Citas de negocios(ina-paace, esm, logex)",
        alt: "CN",
        src: src + "projects/ina_paace.png",
        description:
          "Aplicación web para agendar Citas de negocios uno a uno.",
        date: "March-June 2022",
        url: "https://ina-paace.infoexpo.com.mx/2022/cn/ae/web/",
        code: 'Symfony, JavaScript, JQuery, CSS, Materialize'
      },
      {
        name: "Modulo CN(SAS)",
        alt: "SAS-CN",
        src: src + "projects/sas_cn_paace.png",
        description:
          "Aplicación web para la administracion y gestion de CN.",
        date: "March-June 2022",
        url: "https://ina-paace.infoexpo.com.mx/sas/web",
        code: 'Symfony, JavaScript, JQuery, CSS, Materialize'
      },
    ];
    let majm = {
      migue: {
        name: "Miguel Angel Jimenez",
        description: "Information and Communications Technologies Engineer",
        dev: "Web Developer",
        title: "Miguel Angel Jimenez | Portfolio",
        code,
        projects,
        services,
        menu,
      },
    };
    return majm;
  }
}
