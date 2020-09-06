$(".comments-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 4000,
    nextArrow: '<div class="arrow"><img class="arrow-next" src="images/Arrow_r.png"></div>' ,
    prevArrow: '<div class="arrow"><img class="arrow-prev" src="images/Arrow_l.png"></div>',
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
});