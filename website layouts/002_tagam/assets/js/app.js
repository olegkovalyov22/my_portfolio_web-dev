$(function(){
    
    var header = $("#header"),
        introHeight = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    // Header -> fixed header
    cheakScroll(scrollOffset);

    $(window).on("scroll", function() {
        // console.log(introHeight);
        // console.log(scrollOffset);
        
        scrollOffset = $(this).scrollTop();

        cheakScroll(scrollOffset);
    });

    function cheakScroll(scrollOffset) {
        if(scrollOffset >= introHeight) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    };

    // Header -> smooth scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#navbar a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });


    // Header -> Menu nav toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#navbar").toggleClass("active");
    });



    // Header -> Menu nav toggle -> сворачивание после выбора "пути"
    $("#navbar a").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active", false);
        $("#navbar").toggleClass("active", false);
        $("#nav-toggle").toggleClass("active", false);
    });




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