document.addEventListener('DOMContentLoaded', function () {
// start specialities
    let carouselBlock = document.querySelector('.specialty-carousel-main-container');
    let carouselCardsContainer = document.querySelector('.specialty-carousel-main-container .specialty-carousel-cards-container');
    let carouselCard = document.querySelectorAll('.carousel-item');
    let screenWidth = window.screen.width;
    
    document.addEventListener('resize', function (e) {    
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

// top button start
const topButton = document.getElementById("top-button")
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.opacity = '1'
    } else {
        topButton.style.opacity = '0'
    }
}

const iconArrow = document.getElementById("icon-arrow");
const buttonRect = iconArrow.getBoundingClientRect();
const whiteBlocks = document.querySelectorAll(".white-background");
const whiteCardsDesktop = document.querySelectorAll(".white-background-desktop")

const areIntersecting = (bounds1, bounds2) => 
    bounds1.top < bounds2.bottom && bounds1.bottom > bounds2.top;

document.addEventListener('scroll', () => {

    for (let item of whiteBlocks) {
        const itemRect = item.getBoundingClientRect();
        if (areIntersecting(itemRect, buttonRect)) {
            iconArrow.classList.add("blue-button");
            return; 
        }
        iconArrow.classList.remove("blue-button");
    }

    if (screenWidth >= 1024 && screenWidth < 1087) {
        for (let item of whiteCardsDesktop) {
            const itemRect = item.getBoundingClientRect();
            if (areIntersecting(itemRect, buttonRect)) {
                iconArrow.classList.add("blue-button");
                return; 
            }
            iconArrow.classList.remove("blue-button");
        }
    }
    
});
// top button end

// start applicant form
const applicantForm = $("#applicant_form_modal .form");

applicantForm.on("submit", function (event) {
    event.preventDefault();
    const data = $(this).serializeArray();
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

// start modal burger menu
$( document ).ready(function() {
    $( ".cross" ).hide();
    $( "#menu" ).hide();
        $( ".hamburger" ).click(function() {
            $( "#menu" ).slideToggle( "slow", function() {
                $( ".hamburger" ).hide();
                $( ".cross" ).show();
            });
        });
    
    $( ".cross" ).click(function() {
        $( "#menu" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });
});
// end modal burger menu
});