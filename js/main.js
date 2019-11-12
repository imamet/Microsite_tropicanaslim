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


});


$(window).scroll(function() {
    if ($(window).scrollTop() >= 780) {
        $('.coba').addClass('fixed-site');
    } else {
        $('.coba').removeClass('fixed-site');
    }
});