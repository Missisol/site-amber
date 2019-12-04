$(document).ready(function () {
    $('#slick').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        variableWidth: true,
        prevArrow: "<img src='./assets/images/main-page/about/prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./assets/images/main-page/about/next.svg' class='next' alt='2'>",
    });

    $('#slick1').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        variableWidth: true,
        prevArrow: "<img src='./assets/images/main-page/about/prev.svg' class='prev' alt='1'>",
        nextArrow: "<img src='./assets/images/main-page/about/next.svg' class='next' alt='2'>",
    });

    $('#slider').slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        // slidesToScroll: 1,
        // centerMode: true,
        // variableWidth: true,
        prevArrow: "<img src='./assets/images/main-page/about/prev.svg' class='prev prev-comments' alt='1'>",
        nextArrow: "<img src='./assets/images/main-page/about/next.svg' class='next next-comments' alt='2'>",
    });

    $('#slider-company').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        prevArrow: "<img src='./assets/images/portfolio-page/prev-bcg.jpg' class='company__prev' alt='1'>",
        nextArrow: "<img src='./assets/images/portfolio-page/next-bcg.jpg' class='company__next' alt='2'>",
    });

    $('#slider-company-tab').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        prevArrow: "<img src='./assets/images/portfolio-page/prev-bcg.jpg' class='company__prev' alt='1'>",
        nextArrow: "<img src='./assets/images/portfolio-page/next-bcg.jpg' class='company__next' alt='2'>",
    });

    $('#redesign').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: "<img src='./assets/images/portfolio-page/prev-bcg.jpg' class='redesign__prev' alt='1'>",
        nextArrow: "<img src='./assets/images/portfolio-page/next-bcg.jpg' class='redesign__next' alt='2'>",
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    dots: false
                }
            },
        ]
    });

    $('#redesign-mob').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: "<img src='./assets/images/portfolio-page/prev-bcg.jpg' class='redesign__prev' alt='1'>",
        nextArrow: "<img src='./assets/images/portfolio-page/next-bcg.jpg' class='redesign__next' alt='2'>",
    });

    $('#top').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: "<img src='./assets/images/portfolio-page/target/prev-yellow.svg' class='target__prev' alt='1'>",
        nextArrow: "<img src='./assets/images/portfolio-page/target/next-yellow.svg' class='target__next' alt='2'>",
    });

    $('#bottom').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        prevArrow: "<img src='./assets/images/portfolio-page/target/prev.svg' class='target__prev' alt='1'>",
        nextArrow: "<img src='./assets/images/portfolio-page/target/next.svg' class='target__next' alt='2'>",
    });
});

