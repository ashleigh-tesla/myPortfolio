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