var projects = [
  {
    'name': 'Solicitudes de servico de equipo de bienes informaticos',
    'src': 'resources/img/projects/appcrode.jpg',
    'description': 'lorem insup lorem indup lorem insup',
    'date': 'March-July 2021',
    'alt': 'Web Application Crode'
  },
  {
    'name': 'migueljimenezweb',
    'src': 'resources/img/projects/majm97.jpg',
    'description': 'Portfolio web',
    'date': 'July-Agust 2021',
    'alt': 'migueljimenezweb'
  }
]

var item = projects.map((project) => {
  return "<div class='card'>" + 
          "<img src='" + project.src + "' alt='" + project.alt + "'>" +
          "<div class='card__container'>" +
            "<h4>" + project.name + "</h4>" +
            "<a class='button' href='#'>See</a>" +
         "</div></div>";
});
document.querySelector('.portfolio__projects').innerHTML = item;
console.log(projects);