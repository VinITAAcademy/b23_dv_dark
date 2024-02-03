//imitation of loading. uncomment for test

document.onreadystatechange = function (e) {
    if (document.readyState === 'complete') {
        let animationPreload = document.querySelectorAll('.loader-block')[0];
        animationPreload.style.visibility = 'visible';
        animationPreload.style.opacity = '1';

        let timerId = setTimeout(function () {
            animationPreload.style.opacity = '0';
            animationPreload.style.visibility = 'hidden';
        }, 2000); 
    }
};

// end loader

document.addEventListener('DOMContentLoaded', function () {
    // start specialities
    let carouselBlock = document.querySelector('.specialty-carousel-main-container');
    let carouselCardsContainer = document.querySelector('.specialty-carousel-main-container .specialty-carousel-cards-container');
    let carouselCard = document.querySelectorAll('.specialty-carousel-card-container');
    let screenWidth = window.screen.width;

    function changeStylesForCarousel() {
        if (window.screen.width >= 768) {
            carouselBlock.removeAttribute('id');
            carouselBlock.classList.remove('carousel');
            carouselBlock.classList.remove('slide');
            
            carouselCardsContainer.classList.remove('carousel-inner');
            
            for (let [index, item] of carouselCard.entries()) {
                item.classList.remove('carousel-item');

                if (item.classList.contains('active')) { 
                    item.classList.remove('active');
                }
            }

        } else if (window.screen.width < 768) {
            carouselBlock.setAttribute('id', 'carouselExampleIndicators');
            carouselBlock.classList.add('carousel');
            carouselBlock.classList.add('slide');
            
            carouselCardsContainer.classList.add('carousel-inner');

            carouselCard[1].classList.add('active');

            for (let [index, item] of carouselCard.entries()) {
                if (index != 0) {
                    item.classList.add('carousel-item');
                }
            }
        }
    }

    changeStylesForCarousel();
    window.addEventListener('resize', changeStylesForCarousel);

    // end specialities

        // top button start
        const topButton = document.getElementById("top-button");

        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                topButton.style.opacity = '1';
            }

            else {
                topButton.style.opacity = '0';
            }}

        const iconArrow = document.getElementById("icon-arrow");
        const buttonRect = iconArrow.getBoundingClientRect();
        const whiteBlocks = document.querySelectorAll(".white-background");
        const whiteCardsDesktop = document.querySelectorAll(".white-background-desktop");

        const areIntersecting = (bounds1, bounds2)=> bounds1.top < bounds2.bottom && bounds1.bottom > bounds2.top;

        document.addEventListener('scroll', ()=> {

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
            $("#selection-menu").modal("hide");
            $("#succesModal").modal('show');
            applicantForm.trigger("reset");
        });

        //modal applicant partner start
    const questionnaireFormModal = $("#questionnaire-form_modal .form");

    questionnaireFormModal.on("submit", function (event) {
        event.preventDefault();
        const data = $(this).serializeArray();
        $("#questionnaire-form_modal").modal('hide');
        $("#succesModal").modal('show');
        questionnaireFormModal.trigger("reset");
    });
    //modal applicant partner end

     //modal applicant mentor start//
    const questionnaireMentorsFormModal = $("#questionnaire-mentors-form_modal .form");

    questionnaireMentorsFormModal.on("submit", function (event) {
        event.preventDefault();
        const data = $(this).serializeArray();
        $("#questionnaire-mentors-form_modal").modal ('hide');
        $("#succesModal").modal('show');
        questionnaireMentorsFormModal.trigger("reset");
    });
        //modal applicant mentor end//
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
                $("#we-provide-video")[0].src +="&autoplay=1";

            });
        //end we provide video poster

        //start partners' logos
        $(".owl-carousel").owlCarousel( {
                items: 2,
                nav: true,
                loop: true,
                navText: ["<div class='icon-arrow-left-logos'></div>", "<div class='icon-arrow-right-logos'></div>"]
            });    
    }
);
//end partners' logos
// start modal burger menu

let hamburger = document.querySelector('.hamburger');
let closes = document.querySelector('.cross');
let menu = document.querySelector('#menu');
let screenMenu = window.screen.width;
let topButtonClose = document.querySelector('#top-button');

hamburger.onclick=function () {
    menu.style.display = 'block';
    hamburger.style.display = 'none';
}

closes.onclick=function () {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
}

topButtonClose.onclick=function () {
    if (window.screen.width < 769) {
        menu.style.display = 'none';
        hamburger.style.display = 'block';
    }
    else {
        hamburger.style.display = 'none';
    }
}
// end modal burger menu


// end modal poll menu
