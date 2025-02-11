const scrollTopButton = document.getElementById('scrollTopButton');

if (scrollTopButton) {
    scrollTopButton.addEventListener('click', scrollToTop);
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
    
function initMap() {
    // Opciones para el mapa
    var options = {
        zoom: 8, // Nivel de zoom inicial
        center: {lat: -34.397, lng: 150.644} // Coordenadas de inicio
    }

    // Crear un nuevo mapa
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Crear un marcador
    var marker = new google.maps.Marker({
        position: {lat: -34.397, lng: 150.644},
        map: map
    });
}
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const closeModal = document.getElementById("closeModal");
const photos = document.querySelectorAll(".photo img");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0; // Índice de la imagen actual

// Función para abrir el modal con una imagen
function openModal(index) {
  currentIndex = index;
  modal.style.display = "flex";
  modalImage.src = photos[currentIndex].src;
  captionText.textContent = photos[currentIndex].alt;
}

// Añadir evento de clic a cada imagen
photos.forEach((photo, index) => {
  photo.addEventListener("click", () => openModal(index));
});

// Cerrar el modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalImage.classList.remove("zoomed"); // Desactivar zoom al cerrar el modal
});

// Navegar a la imagen anterior
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? photos.length - 1 : currentIndex - 1;
  modalImage.src = photos[currentIndex].src;
  captionText.textContent = photos[currentIndex].alt;
  modalImage.classList.remove("zoomed"); // Reiniciar zoom al cambiar la imagen
});

// Navegar a la imagen siguiente
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === photos.length - 1) ? 0 : currentIndex + 1;
  modalImage.src = photos[currentIndex].src;
  captionText.textContent = photos[currentIndex].alt;
  modalImage.classList.remove("zoomed"); // Reiniciar zoom al cambiar la imagen
});

// Hacer zoom al hacer clic en la imagen dentro del modal
modalImage.addEventListener("click", () => {
  modalImage.classList.toggle("zoomed"); // Activar/desactivar zoom
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalImage.classList.remove("zoomed"); // Desactivar zoom al cerrar el modal
  }
});

