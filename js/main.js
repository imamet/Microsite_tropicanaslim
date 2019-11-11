$(document).ready(function() {

    //Back To Top
    $(window).scroll(function() {

        if ($(this).scrollTop() >= 150) {
            $('.back-top').fadeIn('fast');
            $('header').addClass('is-sticky');
        } else {
            $('.back-top').fadeOut('fast');
            $('header').removeClass('is-sticky');
        }
    });


    //Hamburger Icon
    $('#nav-icon1').click(function() {
        $(this).toggleClass('open');
        $(".navigation").toggleClass("show-menu");
    });

    // Tab list

    // fix header
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 110) {
            $("header").addClass("fixed-position");
        } else {
            $('header').removeClass('fixed-position');
        }
    });

    // aos animate
    AOS.init({
        useClassNames: true,
        initClassName: true,
        animatedClassName: 'animated',

    });

    // modal form

    $(".right__click").click(function() {
        $(".frameModal").fadeIn(300);
    });

    $(".close-iframe").click(function() {
        $(".frameModal").fadeOut(300);
    });

    // modal view
    $(".right__click1").click(function() {
        $(".frameModal1").fadeIn(300);
    });

    $(".modal1__close").click(function() {
        $(".frameModal1").fadeOut(300);
    });

});


$(window).scroll(function() {
    if ($(window).scrollTop() >= 780) {
        $('.coba').addClass('fixed-site');
    } else {
        $('.coba').removeClass('fixed-site');
    }
});