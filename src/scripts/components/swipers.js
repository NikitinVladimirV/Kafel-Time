import Swiper from 'swiper/bundle';

// Slider - Main
const bannerSwiper = new Swiper('.banner-swiper', {
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  speed: 1000,
  pagination: {
    el: '.banner-swiper__pagination',
    clickable: true,
  },
});
const plumbingSwiper = new Swiper('.plumbing-swiper', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.plumbing__button-next',
    prevEl: '.plumbing__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 6,
    },
  },
});
const ceramicsSwiper = new Swiper('.ceramics-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.ceramics__button-next',
    prevEl: '.ceramics__button-prev',
  },
});
const newSwiper = new Swiper('.new-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.new__button-next',
    prevEl: '.new__button-prev',
  },
});
const kitsSwiper = new Swiper('.kits-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.kits__button-next',
    prevEl: '.kits__button-prev',
  },
});
const trendsSwiper = new Swiper('.trends-swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 20,
  navigation: {
    nextEl: '.trends__button-next',
    prevEl: '.trends__button-prev',
  },
  breakpoints: {
    769: {
      slidesPerView: 3,
    },
  },
});
// Slider - About
const aboutSwiper = new Swiper('.about-swiper', {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 20,
  navigation: {
    nextEl: '.about__swiper-button-next',
    prevEl: '.about__swiper-button-prev',
  },
});
// Slider - Products
const productsSwiper = new Swiper('.products__swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.products__button-next',
    prevEl: '.products__button-prev',
  },
});
const productsListSwiper = new Swiper('.products-list-swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.products-list-swiper__pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    prevEl: '.products-list-swiper__button--prev',
    nextEl: '.products-list-swiper__button--next',
  },
});
// Swiper Brands
const brandsSwiper = new Swiper('.brands-page__swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.brands-swiper__swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    prevEl: '.brands-swiper__button--prev',
    nextEl: '.brands-swiper__button--next',
  },
});
// Swiper Compare
const compareSwiper = new Swiper('.compare__card-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: '.compare__button-next',
    prevEl: '.compare__button-prev',
  },
});
const compareSwiperDescr = new Swiper('.compare__descr-swiper', {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
});
compareSwiper.controller.control = compareSwiperDescr;
compareSwiperDescr.controller.control = compareSwiper;