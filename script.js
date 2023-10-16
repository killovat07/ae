const utils = {
  
  updateElementAttribute(element, attrName) {
    element.dataset.currentSection = attrName;
    updateScrollPagination(attrName);
    mouseWheelCount = attrName;
    // if (attrName === 10 || attrName === 9) {
    //   document.querySelector('header').classList.add('set-background');
    // } else {
    //   document.querySelector('header').classList.remove('set-background');
    // }
  },
  
  getCookie(name) {
    const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  },
  setCookie(name, data, days) {
    const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(JSON.stringify(data))}`;
    const maxAge = 60 * 60 * 24 * days;
    document.cookie = `${cookie}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`;
  },
  checkCookie(name) {
    return this.getCookie(name) ? true : false;
  },

};

/* Full page-scroll observer */
const bodyElement = document.body;
const wrapperElement = document.querySelector('.wrapper');
const pageSectionElements = document.querySelectorAll('[data-section]');

if (document.querySelector('.language-form .close-btn')) {
  document.querySelector('.language-form .close-btn').addEventListener('click', () => {
    document.querySelector('.wrapper').classList.remove('language-popup-open');
  });
}

function runIntersectionObserver() {
  const config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  let observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      const { isIntersecting, target } = entry;
      if (isIntersecting === true) {
        const index = [...pageSectionElements].indexOf(target);
        utils.updateElementAttribute(wrapperElement, index);
      }
    });
  }, config);

  if (pageSectionElements) {
    pageSectionElements.forEach((section) => {
      return observer.observe(section);
    });
  }
}

/* Cookie */
const COOKIE_NAME = 'cookies-accepted';

const cookiePopup = document.querySelector('.cookies-popup-wrapper');
const cookieAcceptBtn = cookiePopup.querySelector('.cookies-accept-btn');
const cookieCloseBtn = cookiePopup.querySelector('.cookies-close-btn');

function setCookie(name, value, options) {
  let updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
  document.cookie = updatedCookie + '; path=/; max-age=31536000; SameSite=Lax; Secure';
}

function getCookie(name) {
  const matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function checkCookie(name) {
  if (getCookie(name)) {
    return;
  }
  cookiePopup.classList.add('is-active');
}

checkCookie(COOKIE_NAME);

cookieAcceptBtn.addEventListener('click', () => {
  setCookie(COOKIE_NAME, true);
  cookiePopup.classList.remove('is-active');
});
cookieCloseBtn.addEventListener('click', () => cookiePopup.classList.remove('is-active'));



/******* Sticky header ******/
const headerContainer = document.querySelector('header');
const mainContainer = document.querySelector('main');

/*******  Burger menu  ******/
const mobBtn = document.querySelector('.mobile-btn');
const toggleMobileNav = () => {
  document.body.classList.toggle('mobile-nav-visible');
};
mobBtn.addEventListener('click', toggleMobileNav);
/*******  // Burger menu  ******/

/*******  Dropdown menu  ******/
const overlay = document.querySelector('.overlay-block');
const dropdownMenuItem = document.querySelectorAll('.nav-item[data-role="dropdown"]');
dropdownMenuItem.forEach((el) => {
  el.addEventListener('click', function () {
    dropdownMenuItem.forEach((el) => {
      4;
      if (el !== this) {
        el.classList.remove('is-active');
      }
    });
    el.classList.toggle('is-active');
    overlay.classList.add('is-active');
    if (!this.classList.contains('is-active')) {
      overlay.classList.remove('is-active');
    }
  });
});

overlay.addEventListener('click', function () {
  this.classList.remove('is-active');
  dropdownMenuItem.forEach((el) => el.classList.remove('is-active'));
});

const eye = document.querySelectorAll('.form-field .eye');
eye.forEach((icon) => {
  if (icon) {
    icon.addEventListener('click', function () {
      this.classList.toggle('hide');
      if (!this.classList.contains('hide')) {
        icon.closest('.form-field').querySelector('input').type = 'password';
      } else {
        icon.closest('.form-field').querySelector('input').type = 'text';
      }
    });
  }
});

const updateScrollPagination = (index) => {
  document.querySelectorAll('.dot').forEach(dot => {
    if(dot.dataset.pagination == index) {
      document.querySelectorAll('.dot').forEach((el) => el.classList.remove('is-active'));
      dot.classList.add('is-active');
    }
  });
};

runIntersectionObserver();

let mouseWheelCount = 0;

if (document.querySelector('.wrapper').classList.contains('home-page')) {
  //Init controller
  var controller = new ScrollMagic.Controller();



  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: '.animation-indicator',
    triggerHook: 0,
    duration: '200%',
    offset: 0,
  });

  var timeline = new TimelineMax();

  var tween1 = TweenMax.to('.rect1', 1, {
    // opacity: 0,
    css: { className: '+=is-active' },
    // filter: 'sepia(100%) hue-rotate(190deg) saturate(800%) contrast(90%) brightness(140%)'
  });
  var tween2 = TweenMax.to('.overlay-blue', 1, {
    opacity: 1,
  });
  var tween3 = TweenMax.to('#particles-js', 1, {
    opacity: 0,
  });
  var tween5 = TweenMax.to('.offers-block', 1, {
    top: '-50%',
    opacity: '0',
  });

  var tween6 = TweenMax.to('text', 1, {
    opacity: 1,
    animation: 'rotate 25s linear infinite',
  });
  var tween7 = TweenMax.to('.main-svg', 1, {
    width: '120%',
    maxWidth: '960px',
  });
  var tween8 = TweenMax.to('.main-svg', 1, {});
  var tween9 = TweenMax.to('.main-svg', 1, {
    top: '0',
    opacity: '0',
  });
  var tween10 = TweenMax.to('.main-svg', 1, {});
  var tween11 = TweenMax.to('.content-block', 1, {
    opacity: 1,
    top: '0',
  });

  var tween12 = TweenMax.to('.overlay-blue', 1, {
    opacity: 0,
  });
  var tween13 = TweenMax.to('.overlay-blue', 1, {});
  var tween14 = TweenMax.to('.wrapper', 1, {
    css: { className: '+=main-screen-end' },
  });

  timeline
    .add(tween1)
    .add(tween2)
    .add(tween3)
    .add(tween5)
    .add(tween6)
    .add(tween7)
    .add(tween8)
    .add(tween9)
    .add(tween10)
    .add(tween11)
    .add(tween12)
    .add(tween13)
    .add(tween14);
  scene.setTween(timeline);
  scene.addTo(controller);


  // new ScrollMagic.Scene({triggerElement: ".top-section",triggerHook: 0,offset:0})
  // .setTween(TweenMax.to('.scroll-pagination', 0.5, {css: { className: '-=is-about-active' }})).addTo(controller);
  
  new ScrollMagic.Scene({triggerElement: ".animation-indicator",triggerHook: 0,offset:500})
  .setTween(TweenMax.to('.scroll-pagination', 0.5, {css: { className: '+=is-about-active' }})).addTo(controller);
 
  new ScrollMagic.Scene({triggerElement: ".benefit-section",triggerHook: 0.5,offset: 0})
  .setTween(TweenMax.to('.scroll-pagination', 0.5, {css: { className: '-=is-about-active' }})).addTo(controller);
  // new ScrollMagic.Scene({triggerElement: ".map-section",triggerHook: 0.5,offset: 0})
  // .setClassToggle(".scroll-pagination", "is-about-active") 
  // .addTo(controller);


  // var scene2 = new ScrollMagic.Scene({
  //   triggerElement: '.animation-circle-container',
  //   duration: 1000,
  //   offset: 0,
  // });
  // var timeline2 = new TimelineMax();

  // var tween11 = TweenMax.to('.animation-circle', 1, {
  //   top: '0',
  //   opacity: '1',
  // });

  // var tween22 = TweenMax.to('.animation-circle', 1, {
  //   top: '78%',
  //   width: '156px',
  //   height: '156px',
  //   right: '84%',
  // });

  // timeline2.add(tween11).add(tween22);
  // scene2.setTween(timeline2);
  // scene2.addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.benefit-section',
    duration: 600,
    offset: 0,
    triggerHook: 0,
  }).setTween(new TimelineMax().add(TweenMax.to('.animation-circle', 1, {
    top: '5%',
    opacity: '0.5',
  })).add(TweenMax.to('.animation-circle', 1, {
    top: '24%',
  }))).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.map-section',
    duration: 1500,
    offset: 0,
    triggerHook: 0,
  }).setTween(new TimelineMax().add(TweenMax.to('.animation-circle', 1, {
    opacity: '0.8',
    top: '50%',
    
  }))).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.animation-circle-container',
    duration: 1000,
    offset: 0,
    triggerHook: 0.2,
  }).setTween(new TimelineMax().add(TweenMax.to('.animation-circle', 1, {
    right: '57%'
  })).add(TweenMax.to('.animation-circle', 1, {
    opacity: '1',
    top: '71%',
    width: '154px',
    height: '154px',
    right: '78%',
  }))).addTo(controller);



  /* dynamic Circle animation */
  new ScrollMagic.Scene({
    triggerElement: '.benefit-section',
    duration: 1000,
    offset: 0,
    triggerHook: 0,
  }).setTween(new TimelineMax().add(TweenMax.to('.animation-circle-web', 1, {
    top: '0',
    opacity: '1',
  })).add(TweenMax.to('.animation-circle-web', 1, {
    top: '14%',
  }))).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.map-section',
    duration: 1000,
    offset: 0,
    triggerHook: 0,
  }).setTween(new TimelineMax().add(TweenMax.to('.animation-circle-web', 1, {
    top: '45.4%',
    right: '14%'
  }))).addTo(controller);

  new ScrollMagic.Scene({
    triggerElement: '.animation-circle-container',
    duration: 1000,
    offset: 0,
    triggerHook: 0.2,
  }).setTween(new TimelineMax().add(TweenMax.to('.animation-circle-web', 1, {
    right: '57%'
  })).add(TweenMax.to('.animation-circle-web', 1, {
    top: '69.5%',
    width: '364px',
    height: '364px',
    right: '74%',
  }))).addTo(controller);




  // .add(TweenMax.to('.animation-circle-web', 1, {
  //   top: '67%',
  //   width: '364px',
  //   height: '364px',
  //   right: '72%',
  // }))).addTo(controller);

  /* Animation news slider items */
  setTimeout(() => {
    var scene3 = new ScrollMagic.Scene({
      triggerElement: '.news-section',
      duration: 800,
    });

    var timeline3 = new TimelineMax();

    var tween33 = TweenMax.to('.news-slider .is-current .slider-image', 0.5, {
      clipPath: ' polygon(15% 6%, 82% 1%, 100% 85%, 2% 94%)',
    });
    var tween44 = TweenMax.to('.news-slider .is-current .slider-image', 0.5, {
      clipPath: ' polygon(0 0, 89% 7%, 100% 100%, 0% 100%)',
    });
    var tween55 = TweenMax.to('.news-slider .is-current .slider-image', 0.5, {
      clipPath: ' polygon(0 0, 100% 0, 92% 85%, 0% 100%)',
    });

    timeline3.add(tween33).add(tween44).add(tween55);
    scene3.setTween(timeline3);
    scene3.addTo(controller);
  }, 400);

/* Blue animation section */
 new ScrollMagic.Scene({
    triggerElement: '.animation-section',
    duration: 1500,
    triggerHook: 0.4,
  }).setTween(TweenMax.to('.vector-1', 0.35, {transform: 'translateX(-100vw)'})).addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '.animation-section',
    duration:1200,
    triggerHook: 0.4,
  }).setTween(TweenMax.to('.vector-2', 0.55, {transform: 'translateX(100vw)'})).addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '.animation-section',
    duration: 800,
    triggerHook: 0.4,
  }).setTween(TweenMax.to('.vector-3', 0.75, {transform: 'translateX(-100vw)'})).addTo(controller);
  new ScrollMagic.Scene({
    triggerElement: '.featured-section',
    duration: 0,
    triggerHook: 0.3,
    offset: 0
  }).setTween(TweenMax.to('.animation-section', 0.5, {background: 'transparent'})).addTo(controller);

 
  document.querySelector('.about-section-btn').addEventListener('click', (e) => {
    $('html, body').animate({ scrollTop: $('.benefit-section').offset().top / 1.5 },0);
  });
  if(window.location.hash === '#about') {
    $('html, body').animate({ scrollTop: $('.benefit-section').offset().top / 1.5 },0);
  }

  
  /**********  Custom describe field <ContactForm> ********/
  const customDescribeInput = document.querySelector('.contact-form .textarea-describe');
  const describeInput = document.querySelector('.contact-form .input-describe');
  const describeSuccessMessage = document.querySelector('.describe-success-message');
  customDescribeInput.addEventListener('blur', (e) => {
    describeInput.value = e.target.innerText;
    e.target.innerText === '' ? describeSuccessMessage.classList.remove('is-active') : describeSuccessMessage.classList.add('is-active');
  });
  /**********  // Custom describe field <ContactForm> ********/
}

/************* removeClass helper **********/
const removeClassFromItemList = (itemList, className) => {
  itemList.forEach((item) => item.classList.remove(className));
};
/************* // removeClass helper **********/

/***************  TrafficSources logic  **************/
if (document.querySelector('.form-checkbox-traffic-sources')) {
  const inputTrafficHidden = document.querySelector('.traffic-other-hidden');
  const checkboxInputs = document.querySelectorAll('.form-checkbox-traffic-sources .checkbox-item input');

  document.querySelector('.btn-check-traffic-sources').addEventListener('click', () => {
    inputTrafficHidden.value = '';
    let checkboxValue = [];
    checkboxInputs.forEach((checkbox) => {
      if (checkbox.checked) {
        checkboxValue.push(checkbox.value);
      }
    });
    if (checkboxValue.length) inputTrafficHidden.value = checkboxValue;
  });
}

window.onload = function () {
  document.querySelectorAll('.form-step-how-found-out .events-block .radio-wrapper').forEach((event) => {
    const otherInput = event.querySelector('.event-option-other');
    if (otherInput) {
      otherInput
        .closest('.radio-wrapper')
        .querySelectorAll('.radio-item input')
        .forEach((checkbox) => {
          if (checkbox.classList.contains('event-option-other') && checkbox.checked) {
            otherInput.closest('.radio-wrapper').querySelector('.event-input-block ').classList.remove('hidden');
          }
          checkbox.addEventListener('click', () => {
            if (checkbox.classList.contains('event-option-other')) {
              otherInput.closest('.radio-wrapper').querySelector('.event-input-block').classList.remove('hidden');
            } else {
              otherInput.closest('.radio-wrapper').querySelector('.event-input-block').classList.add('hidden');
              otherInput.closest('.radio-wrapper').querySelector('.event-input-block input').value = '';
            }
          });
        });
    }
  });

  // Fix bug for browser back button event, set value to select
  const allSelects = document.querySelectorAll('.form-select');
  allSelects.forEach((select) => {
    if (select.value !== 'default') select.dispatchEvent(new Event('change'));
    const selectContainer = select.closest('.select-field');
    selectContainer.querySelectorAll('.select-option').forEach((option) => {
      if (option.innerHTML === select.value) option.dispatchEvent(new Event('click'));
    });
  });

  const regformAff = document.querySelector('.signup-form');
  const regformAdv = document.querySelector('.signup-adv-form');
  const regformAContact = document.querySelector('.contact-form');

  if (regformAff) {
    /***************  EventsButtons logic  **************/
    // Check session storage
    if (sessionStorage.getItem('how-found-out-active')) {
      document
        .querySelector(`[data-step="events"] [data-btn="${sessionStorage.getItem('how-found-out-active')}"]`)
        .classList.add('is-active');
      document
        .querySelector(`[data-step="events"] .radio-wrapper[data-event="${sessionStorage.getItem('how-found-out-active')}"]`)
        .classList.add('is-active');
      document
        .querySelector(`[data-step="events"] [data-btn="${sessionStorage.getItem('how-found-out-active')}"]`)
        .closest('[data-step="events"]')
        .classList.add('event-selected');
    }
    if (sessionStorage.getItem('payments-active')) {
      document.querySelectorAll('.form-step-payment .btn-event').forEach((btn) => btn.classList.remove('is-active'));
      document.querySelector(`[data-step="events"] [data-btn="${sessionStorage.getItem('payments-active')}"]`).classList.add('is-active');
      document.querySelectorAll('.form-step-payment .radio-wrapper').forEach((btn) => btn.classList.remove('is-active'));
      document
        .querySelector(`[data-step="events"] .radio-wrapper[data-event="${sessionStorage.getItem('payments-active')}"]`)
        .classList.add('is-active');
      document
        .querySelector(`[data-step="events"] [data-btn="${sessionStorage.getItem('how-found-out-active')}"]`)
        .closest('[data-step="events"]')
        .classList.add('event-selected');
    }

    const eventBtns = document.querySelectorAll('form .btn-event');
    eventBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (btn.closest('.form-step-how-found-out')) {
          btn
            .closest('.step-wrapper')
            .querySelectorAll('.btn-event')
            .forEach((item) => item.classList.remove('is-active'));
          // Reset previos value
          document.querySelectorAll('.form-step-how-found-out .radio-item input').forEach((radio) => (radio.checked = false));
          document.querySelectorAll('.form-step-how-found-out .event-input-block input').forEach((input) => (input.value = ''));
          document.querySelectorAll('.form-step-how-found-out .form-error').forEach((errorMessage) => (errorMessage.innerHTML = ''));
          document.querySelectorAll('.form-step-how-found-out .event-input-trigger').forEach((field) => field.classList.add('hidden'));
          document
            .querySelectorAll('.form-step-how-found-out .is-invalid')
            .forEach((errorClass) => errorClass.classList.remove('is-invalid'));

          // set session storage
          sessionStorage.setItem('how-found-out-active', e.target.dataset.btn);
        } else {
          btn
            .closest('.step-wrapper')
            .querySelectorAll('.btn-event')
            .forEach((item) => item.classList.remove('is-active'));
          document
            .querySelectorAll('.form-step-payment .radio-wrapper input:not([name="paymentMethod"]')
            .forEach((input) => (input.value = ''));
          document.querySelectorAll('.form-step-payment .radio-wrapper select').forEach((select) => {
            select.value = 'default';
            const selectContainer = select.closest('.select-field');
            selectContainer.querySelector('.select-value').innerHTML = select.querySelector('option[value="default"]').innerHTML;
          });
          document.querySelectorAll('.form-step-payment .form-error').forEach((errorMessage) => (errorMessage.innerHTML = ''));
          document.querySelectorAll('.form-step-payment .is-invalid').forEach((errorClass) => errorClass.classList.remove('is-invalid'));

          // set session storage
          sessionStorage.setItem('payments-active', e.target.dataset.btn);
        }

        const activeBtn = e.target;
        const activeEventName = activeBtn.dataset.btn;
        const stepEvents = activeBtn.closest('[data-step="events"]');

        activeBtn.classList.add('is-active');
        stepEvents.classList.add('event-selected');

        /**********  Remove 'is-active' class from All <radio-wrapper> by click on <EventButton> *******/
        const allEventsBlock = stepEvents.querySelectorAll('.events-block .radio-wrapper');
        removeClassFromItemList(allEventsBlock, 'is-active');

        /********  Add class 'is-active' to selected ********/
        const currentEventBlock = stepEvents.querySelector(`.events-block [data-event="${activeEventName}"]`);
        currentEventBlock ? currentEventBlock.classList.add('is-active') : null;
      });
    });
    /***************  // EventsButtons logic  **************/

    const affForm = new FormCore(regformAff, {
      // baseURL: '/register',
      baseURL: 'https://run.mocky.io/v3/2f9fcab7-7785-4a27-a8a2-b2c801887d27',
      recaptcha: true,
      recaptchaAction: 'submit',
      siteKey: '6Lf-NOIeAAAAAI1MzsYU2nIQGzq300SFFhw55Q-Z',
      messages: {
        recaptchaError: 'Captcha validation failed',
      },
    });

    /* Radio button company trigger */
    if (document.querySelector('.radio-company-trigger input[value="Company Representative"]').checked === true) {
      regformAff.querySelectorAll('.company-name-item, .company-website-item').forEach((item) => {
        item.classList.remove('hidden');
      });
    }
    document.querySelectorAll('.radio-company-trigger input').forEach((radio) => {
      radio.addEventListener('change', () => {
        if (radio.value === 'Company Representative') {
          regformAff.querySelectorAll('.company-name-item, .company-website-item').forEach((item) => {
            item.classList.remove('hidden');
          });
        } else {
          regformAff.querySelectorAll('.company-name-item, .company-website-item').forEach((item) => {
            item.classList.add('hidden');
            item.querySelector('input').value = '';
          });
        }
      });
    });


    /* Pixel submit Tracking */
    const submitPixelBtns = regformAff.querySelectorAll('.success-step .form-submit-block .btn, .error-step .form-submit-block .btn');
    submitPixelBtns.forEach((btn) => {
      btn.addEventListener('click', () => fbq('track', 'CompleteRegistration'));
    });
  }

  if (regformAdv) {
    const advForm = new FormCore(regformAdv, {
      // baseURL: '/advertiser/register',
      baseURL: 'https://run.mocky.io/v3/0d765386-290e-410c-8d70-bafa65eb0cb0',
      validation: true,
      recaptcha: true,
      recaptchaAction: 'submit',
      siteKey: '6Lf-NOIeAAAAAI1MzsYU2nIQGzq300SFFhw55Q-Z',
      messages: {
        name: 'Please specify your full name (1 to 100 characters maximum, English characters only)',
        email: ['Please specify your email', 'Wrong email format'],
        companyName:
          "Please specify your company name (2 to 127 characters maximum, English characters only, shouldn't contain '/' or '\\' symbols)",
        companyUrl: 'Please specify the correct URL of your company website (100 characters maximum)',
        areYouAdvertiser: 'Please specify who you are',
        topVerticals: 'Please specify your business vertical',
        topVerticalsDescribe:
          'Please specify your business vertical (1 to 127 characters maximum, English characters only, should contain contain letters, numbers and special symbols)',
        additionalInfo: 'Please specify additional info about your product',
        recaptchaError: 'Captcha validation failed',
      },
    });
    regformAdv.querySelector('.vertical-related-required select').addEventListener('change', (e) => {
      const relatedInput = regformAdv.querySelector('.vertical-related-required .related-field input');
      e.target.value === 'Other' ? (relatedInput.dataset.validate = 'vertical_other') : (relatedInput.dataset.validate = '');
    });
  }
  if (regformAContact) {
    const contactForm = new FormCore(regformAContact, {
      // baseURL: '/contact',
      baseURL: 'https://run.mocky.io/v3/0d765386-290e-410c-8d70-bafa65eb0cb0',
      validation: true,
      recaptcha: true,
      recaptchaAction: 'submit',
      siteKey: '6Lf-NOIeAAAAAI1MzsYU2nIQGzq300SFFhw55Q-Z',
      messages: {
        name: 'This field is required.',
        email: ['Please enter a valid email.', 'Please enter a valid email.'],
        subject: 'This field is required.',
        message: 'This field is required.',
        recaptchaError: 'Captcha validation failed',
      },
    });
  }
};


