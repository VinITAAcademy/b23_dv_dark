document.addEventListener('DOMContentLoaded', function () {
        // start specialities
        let carouselBlock=document.querySelector('.specialty-carousel-main-container');
        let carouselCardsContainer=document.querySelector('.specialty-carousel-main-container .specialty-carousel-cards-container');
        let carouselCard=document.querySelectorAll('.carousel-item');
        let screenWidth=window.screen.width;

        document.addEventListener('resize', function (e) {
                if (screenWidth >=768) {
                    carouselBlock.removeAttribute('id');
                    carouselBlock.classList.remove('carousel');
                    carouselBlock.classList.remove('slide');
                    carouselCardsContainer.classList.remove('carousel-inner');
                    carouselCard[0].classList.remove('active');
                    for (let item of carouselCard) item.classList.remove('carousel-item');
                }

                else if (screenWidth < 768) {
                    carouselBlock.setAttribute('id', 'carouselExampleIndicators');
                    carouselBlock.classList.add('carousel');
                    carouselBlock.classList.add('slide');
                    carouselCardsContainer.classList.add('carousel-inner');
                    carouselCard[0].classList.add('active');
                    for (let item of carouselCard) item.classList.add('carousel-item');
                }
            }

        );
        // end specialities

        // start applicant form
        const applicantForm=$("#applicant_form_modal .form");

        applicantForm.on("submit", function (event) {
                event.preventDefault();
                const data=$(this).serializeArray();
                $("#applicant_form_modal").modal("hide");
                $("#succesModal").modal('show');
            }

        );
        // end applicant form

        // start modal burger menu
        // end modal burger menu

        //start we provide video poster
        let videos=$(".video");

        videos.on("click", function () {
                let elm=$(this),
                conts=elm.contents(),
                le=conts.length,
                ifr=null;

                for (let i=0; i < le; i++) {
                    if (conts[i].nodeType==8) ifr=conts[i].textContent;
                }

                elm.addClass("player").html(ifr);
                elm.off("click");
            }

        );

        let videos2=$(".video_with_autoplay");

        videos2.on("click", function () {
                let elm=$(this),
                conts=elm.contents(),
                le=conts.length,
                ifr=null;

                for (let i=0; i < le; i++) {
                    if (conts[i].nodeType==8) ifr=conts[i].textContent;
                }

                elm.addClass("player").html(ifr);
                elm.off("click");
                $("#we-provide-video")[0].src +="&autoplay=1";

            }

        );
        //end we provide video poster

        //start partners' logos
        $(".owl-carousel").owlCarousel( {
                items: 2,
                nav: true,
                loop: true,
                navText: ["<div class='icon-arrow-left-logos'></div>", "<div class='icon-arrow-right-logos'></div>"]
            }

        );
        //end partners' logos


    }

);
// start modal burger menu

let hamburger=document.querySelector('.hamburger');
let closes=document.querySelector('.cross');
let menu=document.querySelector('#menu');


hamburger.onclick=function () {
    menu.style.display='block';
    hamburger.style.display='none';
}

closes.onclick=function () {
    menu.style.display='none';
    hamburger.style.display='block';
}

// end modal burger menu

// start modal selection menu
let registration=document.querySelector('.hero_content_button');
let selection=document.querySelector('#selection-menu');
let closeSelection=document.querySelector('.sm-cross');

registration.onclick=function() {
    selection.style.display='block';
    hamburger.style.display='none';
}

closeSelection.onclick=function() {
    selection.style.display='none';
    hamburger.style.display='block';
}

// start modal selection menu

// start modal poll menu
let partner=document.querySelector('.sm-button-partner');
let participant=document.querySelector('.sm-button-participant');
let mentor=document.querySelector('.sm-button-mentor');
let partnerModal=document.querySelector('.partner-sm');
let participantModal=document.querySelector('.participant-sm');
let mentorModal=document.querySelector('.mentors-sm');

partner.onclick=function() {
    selection.style.display='none';
    partnerModal.style.opacity='1';
    partnerModal.style.paddingTop='57px';
    partnerModal.style.display='block';
}

participant.onclick=function() {
    selection.style.display='none';
    participantModal.style.opacity='1';
    participantModal.style.paddingTop='57px';
    participantModal.style.display='block';
}

mentor.onclick=function() {
    selection.style.display='none';
    mentorModal.style.opacity='1';
    mentorModal.style.paddingTop='57px';
    mentorModal.style.display='block';
}

// end modal poll menu