const languageJSON=`{
  "espa\xf1ol":{
    "hero-text": "Desarrollador Fullstack Javascript y estudiante de ingenier\xeda de sistemas de 7mo semestre con experiencia en C#, Java y edici\xf3n de videos. Especializado en desarrollo web y programaci\xf3n de videojuegos con Unity y GameMaker Studio 2.",
    "hero-subtitle1": "Desarrollador .NET",
    "txt-idioma1": "Espa\xf1ol",
    "txt-idioma2": "Ingl\xe9s",
    "hero-title": "Desarrollador Full Stack Javascript",
    "h2-educacion": "Educaci\xf3n y Formaci\xf3n",
    "colegio": "Colegio San Agust\xedn",
    "colegio1": "T\xedtulo: Bachillerato en humanidades.",
    "colegio2": "Fecha egreso: 10/2019",
    "universidad": "Universidad UTEPSA",
    "universidad1": "T\xedtulo: Ingenier\xeda de Sistemas",
    "universidad2": "Fecha egreso: 2025 (7mo semestre)",
    "h2-idiomas": "Idiomas",
    "lespa\xf1ol": "Espa\xf1ol",
    "lingles": "Ingl\xe9s",
    "lportugues": "Portugu\xe9s",
    "h2-tecnologia": "Tecnolog\xedas",
    "h3-lenguajes": "Lenguajes",
    "h3-frameworks": "Frameworks y Librer\xedas",
    "h3-herramientas": "Herramientas de desarrollo",
    "h3-basedatos": "Bases de Datos",
    "h2-proyectos": "Proyectos",
    "h2-certificaciones": "Certificaciones"
  },
  "ingl\xe9s":{ 
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
    "lespa\xf1ol": "Spanish",
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
}`,language=JSON.parse(languageJSON);var modoOscuro=!1,proyectosEstado=0,body=document.body;const heroText=document.querySelector(".hero-text");for(var modal=document.getElementById("myModal"),modalImg=document.getElementById("img01"),images=document.getElementsByClassName("image"),currentImageIndex=0,allImages=Array.from(images),span=document.getElementsByClassName("close")[0],prevButton=document.getElementsByClassName("prev")[0],nextButton=document.getElementsByClassName("next")[0],i=0;i<allImages.length;i++)allImages[i].onclick=function(){modal.style.display="block",modalImg.src=this.src,currentImageIndex=allImages.indexOf(this)};function navigateImages(e,t){currentImageIndex=(currentImageIndex+t+e.length)%e.length,modalImg.src=e[currentImageIndex].src}function toggleDarkMode(){body.classList.toggle("darkMode");var e=document.querySelector(".darkModeToggle");e.classList.toggle("dark"),e.classList.contains("dark")?body.classList.add("darkMode"):body.classList.remove("darkMode")}function toggleLanguage(){setLanguage(document.getElementById("Language").value.toLowerCase())}function setLanguage(e){this.idioma=e,heroText.textContent=language[e]["hero-text"],document.querySelector(".hero-title").textContent=language[e]["hero-title"],document.querySelector(".hero-subtitle1").textContent=language[e]["hero-subtitle1"],document.querySelector(".txt-idioma1").textContent=language[e]["txt-idioma1"],document.querySelector(".txt-idioma2").textContent=language[e]["txt-idioma2"],document.querySelector(".h2-educacion").textContent=language[e]["h2-educacion"],document.querySelector(".colegio").textContent=language[e].colegio,document.querySelector(".colegio1").textContent=language[e].colegio1,document.querySelector(".colegio2").textContent=language[e].colegio2,document.querySelector(".universidad").textContent=language[e].universidad,document.querySelector(".universidad1").textContent=language[e].universidad1,document.querySelector(".universidad2").textContent=language[e].universidad2,document.querySelector(".h2-idiomas").textContent=language[e]["h2-idiomas"],document.querySelector(".lespa\xf1ol").textContent=language[e]["lespa\xf1ol"],document.querySelector(".lingles").textContent=language[e].lingles,document.querySelector(".lportugues").textContent=language[e].lportugues,document.querySelector(".h2-tecnologia").textContent=language[e]["h2-tecnologia"],document.querySelector(".h3-lenguajes").textContent=language[e]["h3-lenguajes"],document.querySelector(".h3-frameworks").textContent=language[e]["h3-frameworks"],document.querySelector(".h3-herramientas").textContent=language[e]["h3-herramientas"],document.querySelector(".h3-basedatos").textContent=language[e]["h3-basedatos"],document.querySelector(".h2-proyectos").textContent=language[e]["h2-proyectos"],document.querySelector(".h2-certificaciones").textContent=language[e]["h2-certificaciones"],document.querySelectorAll(".top-image").forEach(function(t){var a=t.getAttribute("src"),n=a;n="ingl\xe9s"===e?a.replace(".jpg","-english.jpg"):a.replace("-english.jpg",".jpg"),t.setAttribute("src",n)})}switch(span.onclick=function(){modal.style.display="none"},prevButton.onclick=function(){currentImageIndex=(currentImageIndex-1+allImages.length)%allImages.length,modalImg.src=allImages[currentImageIndex].src},nextButton.onclick=function(){currentImageIndex=(currentImageIndex+1)%allImages.length,modalImg.src=allImages[currentImageIndex].src},document.addEventListener("keydown",function(e){"block"===modal.style.display&&("ArrowLeft"===e.key?navigateImages(allImages,-1):"ArrowRight"===e.key&&navigateImages(allImages,1))}),document.documentElement.lang){case"es":setLanguage("espa\xf1ol");break;case"en":document.querySelector(".txt-idioma2").textContent="English",document.getElementById("Language").value="ingl\xe9s",setLanguage("ingl\xe9s")}var cards=document.querySelectorAll(".card");cards.forEach(function(e){e.addEventListener("mouseover",function(){e.classList.add("hover")}),e.addEventListener("mouseout",function(){e.classList.remove("hover")})});var laboralDivs=document.querySelectorAll(".div-laboral");laboralDivs.forEach(function(e){e.addEventListener("click",function(){e.classList.toggle("active")})}),document.getElementById("Language").addEventListener("change",toggleLanguage);