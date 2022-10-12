$(document).ready(function () {
  $('.brand__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    // initialSlide: 3,
    // focusOnSelect: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 511,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });
  $('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // initialSlide: 3,
    // focusOnSelect: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.news__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    // initialSlide: 3,
    // focusOnSelect: true,
    // centerMode: true,
    responsive: [
      {
        breakpoint: 993,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  
});