// SWIPPER

var swiper = new Swiper('.swiper-container', {
      slidesPerView: 6,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
});