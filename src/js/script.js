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
// start modal burger menu

//end modal burger menu

// start applicant form

const validationSchema = {
    firstname: [
      { pattern: /.+/, message: 'This field is required'},
      { pattern: /^.{4,39}$/, message: 'Firstname should has 4-39 chars'},
    ],
    surname: [
      { pattern: /.+/, message:  'This field is required' },
      { pattern: /^.{4,39}$/, message: 'Firstname should has 4-39 chars'},
    ],
    email: [
      { pattern: /.+/, message:  'This field is required' },
      { pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, message:  'Should be a valid email' }
    ],
    phone: [
      {pattern: /.+/, message:  'This field is required' },
      {pattern: /^(\+380|380|0)\d{9}$/, message:  'Should be a valid phone number' }
    ],
  };

  const validate = (v, name) => {
    const entity = validationSchema[name];

    let isValid = true;
    let errorText = '';

    entity.forEach(rule => {const { pattern, message } = rule;
          
        isValid = !!pattern.test(v);
        errorText = message;
      });

      return { isValid, message: errorText };
    }

    const formControls = document.querySelectorAll('#applicant_form_modal .applicant_form_modal_container .modal-content form .form_control');

    formControls.forEach((control) => {
      const input = control.querySelector('input');
      const errorMessage = control.querySelector('.error_message');

      input.addEventListener('input',  () => {
        const { isValid, message } = validate(input.value, input.name);


        if (!isValid) {
          errorMessage.classList.add('active');
          errorMessage.innerHTML = message;
        } else {
          errorMessage.classList.remove('active');
        }
      });
    });

// end applicant form

