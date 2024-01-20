



// cards 
console.clear();

var flkty = new Flickity('.card-wrap', {
  contain: true,
  prevNextButtons: false,
  pageDots: false,
  wrapAround: true,
  adaptiveHeight: true,
  setGallerySize: false,
  selectedAttraction: 0.05,
  freeScrollFriction: .1 
});



var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});