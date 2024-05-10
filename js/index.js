// JSON de idiomas
const languageJSON = `{
  "español":{
    "hero-text": "Desarrollador Fullstack Javascript y estudiante de ingeniería de sistemas de 7mo semestre con experiencia en C#, Java y edición de videos. Especializado en desarrollo web y programación de videojuegos con Unity y GameMaker Studio 2.",
    "hero-subtitle1": "Desarrollador .NET",
    "txt-idioma1": "Español",
    "txt-idioma2": "Inglés",
    "hero-title": "Desarrollador Full Stack Javascript",
    "h2-educacion": "Educación y Formación",
    "colegio": "Colegio San Agustín",
    "colegio1": "Título: Bachillerato en humanidades.",
    "colegio2": "Fecha egreso: 10/2019",
    "universidad": "Universidad UTEPSA",
    "universidad1": "Título: Ingeniería de Sistemas",
    "universidad2": "Fecha egreso: 2025 (7mo semestre)",
    "h2-idiomas": "Idiomas",
    "lespañol": "Español",
    "lingles": "Inglés",
    "lportugues": "Portugués",
    "h2-tecnologia": "Tecnologías",
    "h3-lenguajes": "Lenguajes",
    "h3-frameworks": "Frameworks y Librerías",
    "h3-herramientas": "Herramientas de desarrollo",
    "h3-basedatos": "Bases de Datos",
    "h2-proyectos": "Proyectos",
    "h2-certificaciones": "Certificaciones"
  },
  "inglés":{ 
    "hero-text": "Fullstack Javascript developer and 7th semester systems engineering student with experience in C#, Java, and video editing. Specialized in web development and videogame programming with Unity and GameMaker Studio 2.",
    "hero-subtitle1": ".NET Developer",
    "txt-idioma1": "Spanish",
    "txt-idioma2": "English",
    "hero-title": "Fullstack Web Development Javascript",
    "h2-educacion": "Education and Training",
    "colegio": "San Agustin School",
    "colegio1": "Title: Bachelor's Degree in Humanities.",
    "colegio2": "Graduation Date: 10/2019",
    "universidad": "UTEPSA University",
    "universidad1": "Title: Systems Engineering",
    "universidad2": "Graduation Date: 2025 (7th semester)",
    "h2-idiomas": "Languages",
    "lespañol": "Spanish",
    "lingles": "English",
    "lportugues": "Portuguese",
    "h2-tecnologia": "Technologies",
    "h3-lenguajes": "Languages",
    "h3-frameworks": "Frameworks and Libraries",
    "h3-herramientas": "Development Tools",
    "h3-basedatos": "Databases",
    "h2-proyectos": "Projects",
    "h2-certificaciones": "Certifications"
  }
}`;

// Convertir JSON a objeto
const language = JSON.parse(languageJSON);

// Variables globales
var modoOscuro = false;
var proyectosEstado = 0;
var body = document.body;
const heroText = document.querySelector(".hero-text");

// Elementos del modal de imágenes
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var images = document.getElementsByClassName('image');
var currentImageIndex = 0;
var allImages = Array.from(images);

// Botones y botones de navegación de imágenes
var span = document.getElementsByClassName("close")[0];
var prevButton = document.getElementsByClassName("prev")[0];
var nextButton = document.getElementsByClassName("next")[0];

// Función para abrir el modal al hacer clic en una imagen
for (var i = 0; i < allImages.length; i++) {
  allImages[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    currentImageIndex = allImages.indexOf(this);
  }
}

// Botón para cerrar el modal
span.onclick = function() { 
  modal.style.display = "none";
}

// Botones para navegar entre las imágenes
prevButton.onclick = function() {
  currentImageIndex = (currentImageIndex - 1 + allImages.length) % allImages.length;
  modalImg.src = allImages[currentImageIndex].src;
}

nextButton.onclick = function() {
  currentImageIndex = (currentImageIndex + 1) % allImages.length;
  modalImg.src = allImages[currentImageIndex].src;
}

// Función para navegar entre imágenes con las teclas de flecha
function navigateImages(images, increment) {
  currentImageIndex = (currentImageIndex + increment + images.length) % images.length;
  modalImg.src = images[currentImageIndex].src;
}

document.addEventListener('keydown', function(event) {
  if (modal.style.display === "block") {
    if (event.key === "ArrowLeft") {
      navigateImages(allImages, -1);
    } else if (event.key === "ArrowRight") {
      navigateImages(allImages, 1);
    }
  }
});

// Función para cambiar al modo oscuro
function toggleDarkMode() {
    body.classList.toggle("darkMode");
    var darkModeToggle = document.querySelector('.darkModeToggle');
    darkModeToggle.classList.toggle('dark');
    
    if (darkModeToggle.classList.contains('dark')) {
        body.classList.add('darkMode');
      } else {
        body.classList.remove('darkMode');
      }
}

// Función para cambiar el idioma
function toggleLanguage() {
    var idioma = document.getElementById("Language").value.toLowerCase();
    setLanguage(idioma);
}

// Función para establecer el idioma
function setLanguage(idioma) {
  this.idioma = idioma;
  heroText.textContent = language[idioma]["hero-text"];
  document.querySelector(".hero-title").textContent = language[idioma]["hero-title"];
  document.querySelector(".hero-subtitle1").textContent = language[idioma]["hero-subtitle1"];
  document.querySelector(".txt-idioma1").textContent = language[idioma]["txt-idioma1"];
  document.querySelector(".txt-idioma2").textContent = language[idioma]["txt-idioma2"];
  document.querySelector(".h2-educacion").textContent = language[idioma]["h2-educacion"];
  document.querySelector(".colegio").textContent = language[idioma]["colegio"];
  document.querySelector(".colegio1").textContent = language[idioma]["colegio1"];
  document.querySelector(".colegio2").textContent = language[idioma]["colegio2"];
  document.querySelector(".universidad").textContent = language[idioma]["universidad"];
  document.querySelector(".universidad1").textContent = language[idioma]["universidad1"];
  document.querySelector(".universidad2").textContent = language[idioma]["universidad2"];
  document.querySelector(".h2-idiomas").textContent = language[idioma]["h2-idiomas"];
  document.querySelector(".lespañol").textContent = language[idioma]["lespañol"];
  document.querySelector(".lingles").textContent = language[idioma]["lingles"];
  document.querySelector(".lportugues").textContent = language[idioma]["lportugues"];
  document.querySelector(".h2-tecnologia").textContent = language[idioma]["h2-tecnologia"];
  document.querySelector(".h3-lenguajes").textContent = language[idioma]["h3-lenguajes"];
  document.querySelector(".h3-frameworks").textContent = language[idioma]["h3-frameworks"];
  document.querySelector(".h3-herramientas").textContent = language[idioma]["h3-herramientas"];
  document.querySelector(".h3-basedatos").textContent = language[idioma]["h3-basedatos"];
  document.querySelector(".h2-proyectos").textContent = language[idioma]["h2-proyectos"];
  document.querySelector(".h2-certificaciones").textContent = language[idioma]["h2-certificaciones"];

  var topImages = document.querySelectorAll('.top-image');
  topImages.forEach(function(image) {
      var originalSrc = image.getAttribute('src');
      var newSrc = originalSrc;
      if (idioma === 'inglés') {
          newSrc = originalSrc.replace('.jpg', '-english.jpg');
      } else {
          newSrc = originalSrc.replace('-english.jpg', '.jpg');
      }
      image.setAttribute('src', newSrc);
  });
}

// Establecer idioma según el atributo "lang" del HTML
switch (document.documentElement.lang) {
  case "es":
    setLanguage("español"); // Cambiar a "español"
    break;

  case "en":
    document.querySelector(".txt-idioma2").textContent = "English";
    document.getElementById("Language").value = "inglés";
    setLanguage("inglés"); // Cambiar a "inglés"
    break;
}


// Evento para cambiar el color de las tarjetas al pasar el ratón sobre ellas
var cards = document.querySelectorAll('.card');
cards.forEach(function(card) {
  card.addEventListener('mouseover', function() {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', function() {
    card.classList.remove('hover');
  });
});

// Evento para mostrar u ocultar información al hacer clic en un div laboral
var laboralDivs = document.querySelectorAll('.div-laboral');
laboralDivs.forEach(function(div) {
  div.addEventListener('click', function() {
    div.classList.toggle('active');
  });
});

// Evento para cambiar el idioma al seleccionar uno
document.getElementById("Language").addEventListener("change", toggleLanguage);
