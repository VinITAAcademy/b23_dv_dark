document.addEventListener('DOMContentLoaded', function () {
    let carouselBlock = document.querySelectorAll('.specialty-carousel-main-container')[0];
    let carouselCards = document.querySelectorAll('.specialty-carousel-cards-container')[0];
    let carouselCard = document.querySelectorAll('.carousel-item');
    let screenWidth = window.screen.width;
    
    windоw.addEventListener('resize', function (e) {    
        if (screenWidth >= 768) {
            carouselBlock.removeAttribute('id');
            carouselBlock.classList.remove('carousel');
            carouselBlock.classList.remove('slide');
            carouselCards.classList.remove('carousel-inner');
            carouselCard[0].classList.remove('active');
            for (let item of carouselCard) item.classList.remove('carousel-item');
        } else if (screenWidth < 768) {
                carouselBlock.setAttribute('id', 'carouselExampleIndicators');
                carouselBlock.classList.add('carousel');
                carouselBlock.classList.add('slide');
                carouselCards.classList.add('carousel-inner');
                carouselCard[0].classList.add('active');
                for (let item of carouselCard) item.classList.add('carousel-item');
        }
    });
});