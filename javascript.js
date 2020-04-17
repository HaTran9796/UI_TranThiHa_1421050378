
// <!-- banner-swipper -->
var bannerSwiper = new Swiper ('.group--banner-swiper', {
  centeredSlides: true,
  autoplay: {
  delay: 7200,
  disableOnInteraction: false,
  },
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
})

// attractive-swiper
var swiper = new Swiper('.attractive-swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  // loop: true,
  // autoplay: {
  //     delay: 2200,
  //     disableOnInteraction: false,
  // },
  navigation: {
    nextEl: '.review-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991:{
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});

// customerReviews-swipper
var swiper = new Swiper('.customerReviews-swipper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 7200,
    disableOnInteraction: false,
  }
});

// attractive-swiper
var swiper = new Swiper('.seasonal-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    991:{
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});


var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// icon feather
feather.replace()
