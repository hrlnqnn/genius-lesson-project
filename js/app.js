$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:3,
        loop:true,
        margin:20,
        nav:true,
        autoplay:true,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        navText: ['', ''],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })

})

$('.prev').on('click', function () {
    $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.next').on('click', function () {
    $('.owl-carousel').trigger('next.owl.carousel');
});
