$(document).ready(function(){
    
    // Reviews -> slider
    
    $('[slider-for]').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, // false
        fade: false, // true
        asNavFor: '[slider-nav]'
    });
    $('[slider-nav]').slick({
        slidesToShow: 5, // 5
        slidesToScroll: 1,
        asNavFor: '[slider-for]',
        dots: true,
        centerMode: true,
        focusOnSelect: true
    });
  });