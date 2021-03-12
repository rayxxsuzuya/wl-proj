$(".reviews__slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1031,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 728,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
});

$(".diplomas__block").magnificPopup({
  delegate: "a", // child items selector, by clicking on it popup will open
  type: "image",
  // other options
});

$(".header-main__link").magnificPopup({
  type: "inline",
  preloader: false,
  focus: "#name",

  // When elemened is focused, some mobile browsers in some cases zoom in
  // It looks not nice, so we disable it:
  callbacks: {
    beforeOpen: function () {
      if ($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = "#name";
      }
    },
  },
});

$(".about__link").magnificPopup({
  type: "inline",
  preloader: false,
  focus: "#name",

  // When elemened is focused, some mobile browsers in some cases zoom in
  // It looks not nice, so we disable it:
  callbacks: {
    beforeOpen: function () {
      if ($(window).width() < 700) {
        this.st.focus = false;
      } else {
        this.st.focus = "#name";
      }
    },
  },
});