$(document).ready(function () {
  

  const gallerySlider = new Swiper('.gallery-carousel', {
    loop: true,
    autoplay: true,
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      575: {
        slidesPerView: 1
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
      }
    }
  });


  //Yandex map
  ymaps.ready(init)
  var myMap;

  var myOptions = {
    
      center: [50.050693, 14.435606],
      zoom: 16,
      searchControlProvider: 'yandex#search'
  };

  function init() {
    myMap = new ymaps.Map("map", myOptions);

    myMap.behaviors.disable('scrollZoom');
    markerSize = [27, 40];

    beerBike = new ymaps.Placemark([50.050693, 14.435606], {
      hintContent: "",
      balloonContent: ""
    }, {
      iconLayout: 'default#image',
      iconImageHref: "./images/marker.png",
      iconImageSize: markerSize
    });


    myMap.geoObjects
      .add(beerBike);
  }
});