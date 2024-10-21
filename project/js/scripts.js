// open-burger

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open")
  })
})

// sclose-link

const link = document.querySelector(".header__list");

 link.addEventListener("click", function () {
    document.querySelector("header").classList.remove("open")
  })


const enter = document.querySelector(".burger-btn");

 enter.addEventListener("click", function () {
    document.querySelector("header").classList.remove("open")
  })

// stop-scroll

document.getElementById("burger").addEventListener("click", function () {
  document.body.classList.toggle("stop-scroll")
})

link.addEventListener("click", function () {
  document.body.classList.remove("stop-scroll")
})



// search

$(document).ready(function() {
  $(".search-btn").click(function(){

    if ($(".search").hasClass("active")) {
    } else {
      $(".search").addClass("active");
    }
  });
});


$(document).ready(function() {
  $(".search-btn-close").click(function(){

    if ($(".search").hasClass("active")) {
      $(".search").removeClass("active")
    } else {
      $(".search").addClass("active");
    }
  });
});


// hero-tabs


$(document).ready(function(){

  $("body").on("click", ".sub-menu__link",function(){
    var href = $(this).attr("href");
    $(".hero").removeClass("first");
    $(".hero").removeClass("second");
    $(".hero").removeClass("third");
    $(".hero").addClass(href);
    return false;
  });
});


$(document).ready(function(){

  $("body").on("click", ".menu__link",function(){
    $(".menu__link").removeClass("opened");
    $(this).addClass("opened");
    var href = $(this).attr("href");
    $(".sub-menu__list").removeClass("opened").removeClass("in");
    $(href).addClass("opened");
    $(href).addClass("in");
    return false;
  });
});


$(document).ready(function(){
  $("body").on("click", ".menu__link.opened",function(){
    var href = $(this).attr("href");
    if ($(this).hasClass("opened")) {
      $(this).removeClass("opened")
      $(href).removeClass("opened");
      $(href).removeClass("in");
    }
  })
})

// galery





let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach(item => {
      item.addEventListener('click', selectToggle)
  });

  selectItem.forEach(item => {
      item.addEventListener('click', selectChoose)
  });

  function selectToggle() {
      this.parentElement.classList.toggle('is-active');
  }

  function selectChoose() {
      let text = this.innerText,
          select = this.closest('.select'),
          currentText = select.querySelector('.select__current');
      currentText.innerText = text;
      select.classList.remove('is-active');

  }
};
select();


$(document).ready(function() {
  $(".select").click(function(){
    const active = $(this);

    if (active.hasClass("is-active")) {
      $(".centurys__list").css("margin-top", "100px");
    } else {
      $(".centurys__list").css("margin-top", "0");
    }
  });
});



$(document).ready(function(){
  $("body").on("click", ".gallery-swiper .swiper-slide",function(){
    const active = $(this);
    var href = $(this).attr("href");
    $(".swiper-slide").removeClass("active");
    $(this).addClass("active");
    $(".popup").removeClass("active").removeClass("in");
    $(href).addClass("active");
    $("body").addClass("darkened");
    setTimeout(function(){
      $(href).addClass("in");
    }, 200);
    return false;
  });
});

// $(document).ready(function(){
//   if ($(".popup").hasClass(".faded.in")) {

//   }
// })

$(document).ready(function(){
  $("body").on("click", ".popup-close",function(){
    $(".popup").removeClass("active").removeClass("in");
    $(".swiper-slide").removeClass("active");
    $("body").removeClass("darkened");
  })
})


// galery-slider

var swiper = new Swiper(".gallery-swiper", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  pagination: {
    el: '.gallery-pagination',
    type: 'fraction',
  },
  navigation: {
  nextEl: '.gallery-button-next',
  prevEl: '.gallery-button-prev',
  },
  breakpoints: {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  521: {
  slidesPerView: 2,
  spaceBetween: 38,
  slidesPerGroup: 2,
},
  1024: {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 34,
},
  1800: {
  slidesPerView: 3,
  spaceBetween: 50,
},
},
});

// tabs

$(document).ready(function(){

  $("body").on("click", ".tab__link",function(){
    $(".tab__link").removeClass("active");
    $(this).addClass("active");
    var href = $(this).attr("href");
    $(".accordion__tab").removeClass("active").removeClass("in");
    $(href).addClass("active");
    setTimeout(function(){
      $(href).addClass("in");
    }, 200);
    return false;
  });
});

// accordion


$(document).ready(function() {
  $(".accordion").click(function(){
    const active = $(this);

    if (active.hasClass("accordion--active")) {
      active.removeClass("accordion--active");
    } else {
      $(".accordion").removeClass("accordion--active")
      active.addClass("accordion--active");
    }
  });
});

// accordion


document.querySelectorAll(".accordion").forEach((el) => {
  el.addEventListener("click", () => {

    let content = el.nextElementSibling;


    if (content.style.maxHeight) {
      document.querySelectorAll(".accordion-content").forEach((el) => el.style.display = "none")
      document.querySelectorAll(".accordion-content").forEach((el) => el.style.maxHeight = null)
      document.querySelectorAll(".accordion-content").forEach((el) => el.style.padding = null)
    } else {
      document.querySelectorAll(".accordion-content").forEach((el) => el.style.display = "none")
      content.style.display = "block"
      document.querySelectorAll(".accordion-content").forEach((el) => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + "px"
      // content.style.maxHeight = "434px"
      document.querySelectorAll(".accordion-content").forEach((el) => el.style.padding = null)
      content.style.padding = "25px 0"
      document.querySelectorAll(".accordion-btn").forEach((el) => el.style.transform = null)
      content.style.transform = "rotate 180deg"
    }
  })
})


// events

var swiper = new Swiper(".swiper-events", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 2,
  navigation: {
  nextEl: '.events-button-next',
  prevEl: '.events-button-prev',
  },
  pagination: {
    el: '.events-pagination',
  },
  breakpoints: {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  520: {
  slidesPerView: 1,
  },
  600: {
    slidesPerView: 2,
    spaceBetween: 34,
  },
  920: {
  slidesPerView: 3,
  spaceBetween: 27,
},

  1800: {
  slidesPerView: 3,
  spaceBetween: 50,
},
},
});



// slider-projets


var swiper = new Swiper(".swiper-projects", {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 1,
  navigation: {
  nextEl: '.projects-button-next',
  prevEl: '.projects-button-prev',
  },
  breakpoints: {
  320: {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  520: {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 33.97,
},
  920: {
  slidesPerView: 2,
  spaceBetween: 50,
},
  1350: {
  slidesPerView: 3,
  spaceBetween: 50,
},
},
});



// form



let form = document.querySelector('.js-form'),
    formInputs = document.querySelectorAll('.js-input'),
    inputEmail = document.querySelector('.js-input-email'),
    inputPhone = document.querySelector('.js-input-phone'),
    inputCheckbox = document.querySelector('.js-input-checkbox'),
    phoneError = document.querySelector(".phone-error");

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone));
}

form.onsubmit = function () {
    let phoneVal = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');


        } else {
            input.classList.remove('error');
        }
    });

    if (emptyInputs.length !== 0) {

        return false;
    }

  if (!validatePhone(phoneVal)) {
        phoneError.style.display = "block";
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error');
        phoneError.style.display = "none";
    }
  };



// maps



