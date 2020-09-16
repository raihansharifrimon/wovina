

$(document).ready(function () {
    //Start: tooltip 
    $('[data-toggle="tooltip"]').tooltip();
});



// Blog Carousel (Home)
$('.blog-carousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout: 7000,
    autoplayHoverPause:true,
    navText:['<span><i class="fas fa-angle-left"></i></span>','<span><i class="fas fa-angle-right"></i></span>'],
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true
        }
    }
});


// Blog Carousel (Home)
$('.blog-page-carousel').owlCarousel({
    loop:true,
    margin:0,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout: 7000,
    autoplayHoverPause:true,
    navText:['<span><i class="fas fa-angle-left"></i></span>','<span><i class="fas fa-angle-right"></i></span>'],
    dots:false,
    responsive:{
        0:{
            items:1,
            nav:true
        }
    }
});


// Brand Carousel
$('#brandCarousel').owlCarousel({
    loop:true,
    margin:20,
    responsiveClass:true,
    nav:false,
    navText:['<span><i class="fas fa-angle-left"></i></span>','<span><i class="fas fa-angle-right"></i></span>'],
    autoplay:true,
    autoplayTimeout: 7000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:4
        },
        1000:{
            items:6
        }
    }
});


//Mixitup
var confing = document.querySelector('.mymixitup');
var mixer = mixitup(confing);
