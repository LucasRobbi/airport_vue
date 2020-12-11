$(window).on("load", () => {
  home_page.slick();
});

const home_page = {
  slick: () => {
    $(".div-imgs").slick({
      dots: true,
      infinite: false,
      slidesToShow: 4,
    });
  },
};
