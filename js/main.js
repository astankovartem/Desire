$(function () {
    let header__iconMmenu = $('.header__icon-menu');
    let header__dopMenuIcon = $('.header__dopMenu-icon');
    let header__dopMenu = $('.header__dopMenu');
    let header__burgerIcon = $('.header__burger-icon');
    let header__burgerQuite = $('.header__burger-quite');
    let header__burgerMenu = $('.header__burger-menu');
    
    header__iconMmenu.click(function(){
        header__dopMenu.addClass('active');
    })
    header__dopMenuIcon.click(function(){
        header__dopMenu.removeClass('active');
    })
    header__burgerIcon.click(function(){
        header__burgerMenu.addClass('active');
    })
    header__burgerQuite.click(function(){
        header__burgerMenu.removeClass('active');
    })
    $('.intro__slider').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        
    })
    $('.img__slider').slick({
        arrows: true,
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="back"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="images/back.svg" alt="back"></button>',
    })
    let mixer = mixitup('.gallery');
    mixer.filter('.bedroom');

})
$('.contact-slider__content').slick({
    dots: true,
    arrows: false,
    slidesToShow: 10,
    slidesToScroll: 10,
    responsive: [
        {
            breakpoint: 1700,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 8,
            }
        },
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 6,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
})