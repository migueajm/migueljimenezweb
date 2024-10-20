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
    let projects = [];

    const language = {
      es: {
        nav: [
          {
            name: 'Principal',
            attribute: 'class="active" href="#home"',
            menu: '#home'
          },
          {
            name: 'Portafolio',
            attribute: 'href="#portfolio"',
            menu: '#portfolio'
          },
          {
            name: 'Resumen',
            attribute: ' href="#resume"',
            menu: '#resume'
          },
          {
            name: 'Notes',
            attribute: 'href="https://migueajm.github.io/my-notes/" target="_blank"',
            menu: 'https://migueajm.github.io/my-notes/'
          },
        ],
        welcome: 'Bienvenido, Soy',
        description: 'Ingeniero en Tecnologías de la Información y Comunicaciones',
        dev: 'Desarrollador de software',
        community: 'Comunidad RoqByte',
        communityDescription: 'Comunidad estudiantil que trabaja para estudiantes que quieren ampliar y replicar sus conocimientos para crear una cadena de aprendizaje colaborativo',
        about: 'Sobre mi:',
        aboutme: 'Soy Ingeniero en Tecnologías de la Información y Comunicación, egresado del TecNM Campus Roque. Me especializo en el desarrollo de software, participando activamente en proyectos tecnológicos de alto impacto. Actualmente, me desempeño en <a href="https://www.infoexpo.com.mx/home/" target="_blank">Infoexpo</a> en el área de desarrollo, contribuyendo a la creación de soluciones innovadoras que optimizan tanto la experiencia del usuario como los procesos internos. Cuento con sólida experiencia en trabajo en equipo, colaborando de manera eficiente con distintos departamentos para alcanzar objetivos comunes. Estoy comprometido con la mejora continua y la adopción de buenas prácticas que aseguren calidad y escalabilidad en cada proyecto.',
        cv: 'Descargar CV',
        project: 'Proyectos',
        service: 'Servicios',
        contact: 'Contacto',
        bye: 'Desarrollado con ❤️ BY: '
      },
      en: {
        nav: [
          {
            name: 'Home',
            attribute: 'class="active" href="#home"',
            menu: '#home'
          },
          {
            name: 'Portfolio',
            attribute: 'href="#portfolio"',
            menu: '#portfolio'
          },
          {
            name: 'Resume',
            attribute: ' href="#resume"',
            menu: '#resume'
          },
          {
            name: 'Blog',
            attribute: 'href="https://migueajm.github.io/MigueAJM97/" target="_blank"',
            menu: 'https://migueajm.github.io/MigueAJM97/'
          },
        ],
        welcome: "Welcome, I'm",
        description: 'Information and Communications Technologies Engineer',
        dev: 'Software Developer',
        community: 'RoqByte Community',
        communityDescription: 'Student community works for students who want to expand and replicate their knowledge to create a collaborative learning chain.',
        about: 'About me:',
        aboutme: 'I am a Telecommunications and Information Technology Engineer, graduated from TecNM Campus Roque. I specialize in software development, actively participating in high-impact technology projects. Currently, I work at <a href="https://www.infoexpo.com.mx/home/" target="_blank">Infoexpo</a> in the development area, contributing to the creation of innovative solutions that optimize both user experience and internal processes. I have solid experience working in teams, collaborating efficiently with different departments to achieve common goals. I am committed to continuous improvement and the adoption of best practices to ensure quality and scalability in every project.',
        cv: 'Download CV',
        project: 'Projects',
        service: 'Services',
        contact: 'Contact me',
        bye: 'Developed with ❤️, By:'
      }
    }
    let majm = {
      migue: {
        name: "Miguel Angel Jimenez",
        description: "Information and Communications Technologies Engineer",
        dev: "Software Developer",
        title: "@MigueAJM",
        code,
        projects,
        services,
        menu,
        language,
        version: "v1.0.0"
      },
    };
    return majm;
  }
}
