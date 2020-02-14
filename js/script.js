$(document).ready(function () {
    $('.service-icon').on('click', function () {
        $(this).toggleClass("-selected");
        var e = $(this).siblings('.servicedescription');
        if (!e.hasClass("-selected")) {
            e.addClass("-selected");
            // $('.service-icon.-gym').attr('src', 'img/icon-success.svg');
        }
        else {
            e.removeClass("-selected");
        }
    })

});

$(document).ready(function () {
    $('.promo-slides').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        autoWidth: false,
        margin: 30,
        navContainer: ".promo-buttons",
        navText: ["", ""],
        navClass: ["prev", "next"],
        responsive:{
            0:{
                items:1,
                dots: true,
                responsiveRefreshRate: 50,
            },
            600:{
                items:2,
                dots: true,
                responsiveRefreshRate: 50,
            },
            986:{
                items:3,
                dots: false,
                responsiveRefreshRate: 50,
            },
        }
    });
});

$(document).ready(function () {
    $('.fitnessclub-slides').owlCarousel({
        loop: true,
        items: 3,
        autoWidth: false,
        margin: 20,
        dots: false,
        navContainer: ".fitnessclub-buttons",
        navText: ["<img src=\"img/promo-arrow-prev.svg\">", "<img src=\"img/promo-arrow-next.svg\">"],
        navClass: ["prev", "next"],
        responsive:{
            0:{
                items:2,
                dots: true,
                responsiveRefreshRate: 50,
                margin: 10
            },
            600:{
                items:2,
                dots: true,
                responsiveRefreshRate: 50,
            },
            986:{
                items:3,
                dots: true,
                responsiveRefreshRate: 50,
            },
            1200:{
                items:3,
                dots: false,
                responsiveRefreshRate: 50,
            },
        }
    });
});

$(document).ready(function () {
    $('.price').on('click', function () {
        if (!$(this).hasClass('-selected') && !$(this).hasClass('-dash') && (!$('.price').hasClass('-selected'))) {
            $(this).addClass('-selected');
        }

        else {
            $(this).removeClass('-selected');
        }
    })
});

$(document).ready(function () {
    $('#application_phone').mask("+7 (999) 999 99 99")
});

document.addEventListener("DOMContentLoaded", function () {
    tail.select('.city-list', {
        search: true,
        multiContainer: '.information-section.-dropdown'
    })
});

$(document).ready(function(){
    $('#location_submit').on('click', function(){
        $('.city-list option:selected').text()
        $('.information-section.-dropdown').html($('.city-list option:selected').text() + ' ' + '<img class=\"icon\" src=\"img/icon-arrow-down.svg\">');
    })
})

$(document).ready(function(){
    $('.show_more_gyms').on('click', function(){

        $(this).toggleClass('active');
        $(this).siblings('.searchcatalog-durations').toggleClass('active');
        
    })
})
