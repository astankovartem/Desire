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
    let mixer = mixitup('.gallery');
    mixer.filter('.bedroom');

})
