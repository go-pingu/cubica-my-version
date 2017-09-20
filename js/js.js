(function (document, window, $){
  $(document).ready(function(){
    $(".partners_slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: true,
      slidesToScroll: 1,
      speed: 700,
      slidesToShow: 6,
      pauseOnFocus: true,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    });
  });
})(document, window, jQuery);
