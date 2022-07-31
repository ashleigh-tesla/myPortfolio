const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbr').addClass('sticky');
        } else {
            $('.navbr').removeClass('sticky');
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    })

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 })
    })

    // toggle menu/navbr script
    $('.menu-btn').click(function() {
        $('.navbr .menu').toggleClass("active");
        $('.menu-btn i').toggleClass('active');
    })

    // typing animation script
    var typed = new Typed(".typing-1", {
        strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    var typed = new Typed(".typing-2", {
        strings: ["YouTuber", "UI Developer", "UX Designer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    })
    $('.carosel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
})





// Smooth Scrolling With Vanilla JavaScript

// const links = document.querySelectorAll(".navbr .max-width ul a");

// Using the scroll() Method

// for (const link of links) {
//     link.addEventListener("click", clickHandler);
// }

// function clickHandler(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");
//     const offsetTop = document.querySelector(href).offsetTop;

//     scroll({
//         top: offsetTop,
//         behavior: "smooth"
//     });
// }

// Using the scrollIntoView() Method

// for (const link of links) {
//     link.addEventListener("click", clickHandler);
// }

// function clickHandler(e) {
//     e.preventDefault();
//     const href = this.getAttribute("href");

//     document.querySelector(href).scrollIntoView({
//         behavior: "smooth"
//     });
// }

// Smooth Scrolling With jQuery

// $(".navbr .max-width ul a").on("click", function(e) {
//     e.preventDefault();
//     const href = $(this).attr("href");
//     $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
// });

// $(document).ready(function() {
//     // Add smooth scrolling to all links
//     $(".navbr .max-width ul a").on('click', function(event) {

//         // Make sure this.hash has a value before overriding default behavior
//         if (this.hash !== "") {
//             // Prevent default anchor click behavior
//             event.preventDefault();

//             // Store hash
//             var hash = this.hash;

//             // Using jQuery's animate() method to add smooth page scroll
//             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//             $('html, body').animate({
//                 scrollTop: $(hash).offset().top
//             }, 800, function() {

//                 // Add hash (#) to URL when done scrolling (default click behavior)
//                 window.location.hash = hash;
//             });
//         } // End if
//     });
// });