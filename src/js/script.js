document.addEventListener('DOMContentLoaded', function () {
// start specialities
    let carouselBlock = document.querySelector('.specialty-carousel-main-container');
    let carouselCardsContainer = document.querySelector('.specialty-carousel-main-container .specialty-carousel-cards-container');
    let carouselCard = document.querySelectorAll('.carousel-item');
    let screenWidth = window.screen.width;
    
    window.addEventListener('resize', function (e) {    
        if (screenWidth >= 768) {
            carouselBlock.removeAttribute('id');
            carouselBlock.classList.remove('carousel');
            carouselBlock.classList.remove('slide');
            carouselCardsContainer.classList.remove('carousel-inner');
            carouselCard[0].classList.remove('active');
            for (let item of carouselCard) item.classList.remove('carousel-item');
        } else if (screenWidth < 768) {
                carouselBlock.setAttribute('id', 'carouselExampleIndicators');
                carouselBlock.classList.add('carousel');
                carouselBlock.classList.add('slide');
                carouselCardsContainer.classList.add('carousel-inner');
                carouselCard[0].classList.add('active');
                for (let item of carouselCard) item.classList.add('carousel-item');
        }
    });
 // end specialities

// start applicant form
const applicantForm = $("#applicant_form_modal .form");

applicantForm.on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serializeArray();
    console.log(data);
    $("#applicant_form_modal").modal("hide");
    $("#succesModal").modal('show');
});


// end applicant form

// start modal burger menu
// end modal burger menu

//start we provide video poster
let videos = $(".video");

videos.on("click", function () {
    let elm = $(this),
        conts = elm.contents(),
        le = conts.length,
        ifr = null;

    for (let i = 0; i < le; i++) {
        if (conts[i].nodeType == 8) ifr = conts[i].textContent;
    }

    elm.addClass("player").html(ifr);
    elm.off("click");
});

let videos2 = $(".video_with_autoplay");
videos2.on("click", function () {
    let elm = $(this),
        conts = elm.contents(),
        le = conts.length,
        ifr = null;

    for (let i = 0; i < le; i++) {
        if (conts[i].nodeType == 8) ifr = conts[i].textContent;
    }

    elm.addClass("player").html(ifr);
    elm.off("click");
    $("#we-provide-video")[0].src += "&autoplay=1";
    
});
//end we provide video poster


//start partners' logos
$(".owl-carousel").owlCarousel({
    items: 2,
    nav: true,
    loop: true,
    navText: ["<div class='icon-arrow-left-logos'></div>","<div class='icon-arrow-right-logos'></div>"]
});
//end partners' logos
});

