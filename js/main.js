(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

    // Vendor carousel
//     $('.vendor-carousel').owlCarousel({
//         loop: true,
//         margin: 45,
//         dots: false,
//         loop: true,
//         autoplay: true,
//         smartSpeed: 1000,
//         responsive: {
//             0:{
//                 items:2
//             },
//             576:{
//                 items:4
//             },
//             768:{
//                 items:6
//             },
//             992:{
//                 items:8
//             }
//         }
//     });
    
// })(jQuery);

// Get references to the pop-up elements
const popupContainer = document.getElementById("popup-container");
const closeButton = document.getElementById("close-popup");

// Open the pop-up when needed
function openPopup() {
  popupContainer.style.display = "flex";
}

// Close the pop-up when the close button is clicked
closeButton.addEventListener("click", () => {
  popupContainer.style.display = "none";
});

// Call openPopup() to display the pop-up when a specific event occurs (e.g., button click)

// Get a reference to the "Terms of Service" link element
const termsLink = document.getElementById("terms-link");

// Add a click event listener to the link
termsLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default behavior (e.g., navigating to a new page)

  // Call the openPopup() function to display the pop-up
  openPopup();
});
