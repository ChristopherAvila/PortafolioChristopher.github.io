document.getElementById('language-toggle').addEventListener('click', function() {

    var currentLanguage = this.textContent.trim();
    
    var newLanguage = currentLanguage === 'Español' ? 'English' : 'Español';
    
    this.textContent = newLanguage;

    var elementsToTranslate = document.querySelectorAll('[data-lang-en]');
    
    
    elementsToTranslate.forEach(function(element) {
        if (newLanguage === 'English') {
            element.textContent = element.getAttribute('data-lang-en');
        } else { 
            element.textContent = element.getAttribute('data-lang-es');
        }
    });
});
document.getElementById('current-year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

//function addAlbum() {
   // var newAlbum = document.createElement('div');
    //newAlbum.className = 'album';
    //newAlbum.innerHTML = `
       // <img src="https://via.placeholder.com/150" alt="New Album">
        //<h3 class="album-title" data-lang-en="New Album" data-lang-es="Nuevo Álbum">New Album</h3>
   // `;
   // document.querySelector('.albums').appendChild(newAlbum);
    
    
   // var currentLanguage = document.getElementById('language-toggle').textContent.trim();
   // var elementsToTranslate = document.querySelectorAll('[data-lang-en]');
   // elementsToTranslate.forEach(function(element) {
       // if (currentLanguage === 'Español') {
        //    element.textContent = element.getAttribute('data-lang-es');
       // } else {
       //     element.textContent = element.getAttribute('data-lang-en');
       // }
   // });
//}

//document.getElementById('add-album-button').addEventListener('click', addAlbum);