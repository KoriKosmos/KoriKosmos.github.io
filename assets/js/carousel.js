document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.track-carousel-wrapper');
    if (!carouselWrapper) return; // Ensure carousel exists before proceeding

    const trackCarousel = carouselWrapper.querySelector('.track-carousel');
    const tracks = trackCarousel.querySelectorAll('.track');
    const prevButton = carouselWrapper.querySelector('.carousel-btn.left');
    const nextButton = carouselWrapper.querySelector('.carousel-btn.right');
    let currentIndex = 0;

    function showTrack(index) {
        trackCarousel.style.transform = `translateX(-${index * 100}%)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : tracks.length - 1;
        showTrack(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < tracks.length - 1) ? currentIndex + 1 : 0;
        showTrack(currentIndex);
    });
});
