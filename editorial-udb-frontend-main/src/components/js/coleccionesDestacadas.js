document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('#carouselExample');
    const carouselInstance = new bootstrap.Carousel(carousel, {
      interval: 4000, // Tiempo de espera 
      ride: 'carousel', // Inicia automáticamente
    });
  });

