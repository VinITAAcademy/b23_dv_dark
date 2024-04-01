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
            
            for (let [_index, item] of carouselCard.entries()) {
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
    try {
      $(".owl-carousel").owlCarousel( {
        items: 2,
        nav: true,
        loop: true,
        navText: ["<div class='icon-arrow-left-logos'></div>", "<div class='icon-arrow-right-logos'></div>"]
      });
    } catch (error) {
      console.error(error)
    }
    //end partners' logos
  }    
);
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

$(document).ready(function(){
  $('.grecaptcha-badge').parent().css('display', 'none');
});

const applicantForm = document.getElementById("applicant_form");

const submitApplicantFormHandler = (_form, event) => {
  try {
    event.preventDefault();
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP", {
            action: "submit",
          })
          .then((token) => {
            const formData = new FormData(applicantForm);
            formData.append("organization_id", 1);
            formData.append("g-recaptcha-response", token);
            fetch("https://intita.com/api/v1/entrant", {
              method: "POST",
              body: formData,
            })
              .then((res) => {
                if (res.ok) {
                  $("#succesModal").modal("show");
                  $("#applicant_form").trigger("reset");
                }
              })
              .catch((error) => {
                console.error(
                  "There has been a problem with your fetch operation.",
                  error
                );
              });
          });
      });
  } catch (error) {
    console.error(error);
  }
};

/**
 * Add mask to applicant form phone field.
 */
const phone = document.querySelector('#applicant_form #phone');

IMask(phone, {
  mask: '+38 000 000 00 00',
  lazy: false,
});

/**
 * Add method to JQuery validation that ensure that field includes only letters.
 */
jQuery.validator.addMethod("lettersonly", function (value, element) {
  return this.optional(element) || /^[a-zA-Zа-яА-ЯєЄїЇіІґҐ\-ʼ']+$/i.test(value);
}, "Only letters, hyphens, backticks, and cyrillic letters");

/**
 * Add method to JQuery validation that ensure that field is valid Ukraine phone number.
 */
jQuery.validator.addMethod("phoneUA", function (value, element) {
  return this.optional(element) || /\+\d{2} \d{3} \d{3} \d{2} \d{2}/.test(value);
}, "Invalid phone number");

/**
 * Adjust validation and submit applicant form.
 */
$("#applicant_form").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 2,
      maxlength: 20,
      lettersonly: true,
    },
    last_name: {
      required: true,
      minlength: 2,
      maxlength: 30,
      lettersonly: true,
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      phoneUA: true,
    },
  },
  messages: {
    first_name: {
      required: "Обов'язкове поле",
      minlength: "Поле має містити мінімум 2 символи",
      maxlength: "Максимум 20 символів",
      lettersonly: "Дозволено тільки літери",
    },
    last_name: {
      required: "Обов'язкове поле",
      minlength: "Поле має містити мінімум два символи",
      maxlength: "Максимум 30 символів",
      lettersonly: "Дозволено тільки літери",
    },
    email: {
      required: "Обов'язкове поле",
      email: "Email введено некоректно",
    },
    phone: {
      required: "Обов'язкове поле",
      phoneUA: "Номер телефону введено некоректно"
    },
  },
  submitHandler: submitApplicantFormHandler,
  errorElement: "span",
  highlight: function (element) {
    $(element.form)
      .find("#" + element.id + "-error")
      .addClass("error");
    $(element.form).find(`[name='${element.id}']`).addClass("input_error");
  },
  unhighlight: function (element) {
    $(element.form)
      .find("#" + element.id + "-error")
      .removeClass("error");
    $(element.form).find(`[name='${element.id}']`).removeClass("input_error");
  },
});

/**
 * Adjust validation and submit questionnaire form.
 * 
 */
$("#questionnaire-form").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 2,
      maxlength: 20,
      lettersonly: true,
    },
    last_name: {
      required: true,
      minlength: 2,
      maxlength: 30,
      lettersonly: true,
    },
    email: {
      required: true,
      email: true
    },
    phone: {
      required: true,
      phoneUA: true,
    },
  },
  messages: {
    first_name: {
      required: "Обов'язкове поле",
      minlength: "Поле має містити мінімум 2 символи",
      maxlength: "Максимум 20 символів",
      lettersonly: "Дозволено тільки літери",
    },
    last_name: {
      required: "Обов'язкове поле",
      minlength: "Поле має містити мінімум два символи",
      maxlength: "Максимум 30 символів",
      lettersonly: "Дозволено тільки літери",
    },
    email: {
      required: "Обов'язкове поле",
      email: "Email введено некоректно",
    },
    phone: {
      required: "Обов'язкове поле",
      phoneUA: "Номер телефону введено некоректно"
    },
  },
  submitHandler: submitApplicantFormHandler,
  errorElement: "span",
  highlight: function (element) {
    $(element.form)
      .find("#" + element.id + "-error")
      .addClass("error");
    $(element.form).find(`[name='${element.id}']`).addClass("input_error");
  },
  unhighlight: function (element) {
    $(element.form)
      .find("#" + element.id + "-error")
      .removeClass("error");
    $(element.form).find(`[name='${element.id}']`).removeClass("input_error");
  },
});

/**
 * Add mask to questionnaire form phone field.
 */
const questionnairePhoneInput = document.querySelector('#questionnaire-form #phone');

IMask(questionnairePhoneInput, {
  mask: '+38 000 000 00 00',
  lazy: false,
});

/**
 * Add reCAPTCHA to questionnaire-form.
 */
$(document).ready(function(){
  $('.grecaptcha-badge').parent().css('display', 'none');
});

const questionnaireForm = document.getElementById("questionnaire-form");

const submitQuestionnaireForm = (_form, event) => {
  try {
    event.preventDefault();
      grecaptcha.ready(() => {
        grecaptcha
          .execute("6LcwRRUaAAAAADavxcmw5ShOEUt1xMBmRAcPf6QP", {
            action: "submit",
          })
          .then((token) => {
            const formData = new FormData(questionnaireForm);
            formData.append("organization_id", 1);
            formData.append("g-recaptcha-response", token);
            fetch("https://intita.com/api/v1/entrant", {
              method: "POST",
              body: formData,
            })
              .then((res) => {
                if (res.ok) {
                  $("#succesModal").modal("show");
                  $("#questionnaire-form").trigger("reset");
                }
              })
              .catch((error) => {
                console.error(
                  "There has been a problem with your fetch operation.",
                  error
                );
              });
          });
      });
  } catch (error) {
    console.error(error);
  }
};

