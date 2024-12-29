let header_info = '<nav class="navbar navbar-expand-lg christmasHeader text-uppercase fixed-top" id="mainNav">\
        <div class="container">\
            <a class="navbar-brand js-scroll-trigger text-holly"\
                href="https://ericww32.github.io/Secret_Santa/index.html#page-top">Not So Secret Santa!</a>\
            <button class="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold holly rounded"\
                type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive"\
                aria-expanded="false" aria-label="Toggle navigation">\
                Menu\
                <i class="fas fa-bars"></i>\
            </button>\
            <div class="collapse navbar-collapse" id="navbarResponsive">\
                <ul class="navbar-nav ml-auto">\
                    <li class="nav-item mx-0 mx-lg-1 text-holly"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"\
                            href="https://ericww32.github.io/Secret_Santa/index.html#whoGot">Who Got Who?</a>\
                    </li>\
                    <li class="nav-item mx-0 mx-lg-1 text-holly"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"\
                            href="https://ericww32.github.io/Secret_Santa/gallary.html#slideshow">Slideshow</a>\
                    </li>\
                    <li class="nav-item mx-0 mx-lg-1 text-holly"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger hide-fam-tree"\
                            href="https://ericww32.github.io/Secret_Santa/index.html#famTree">Fam-Tree</a></li>\
                    <li class="nav-item mx-0 mx-lg-1 text-holly hide-fam-tree"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"\
                            href="https://ericww32.github.io/Secret_Santa/index.html#reshuffle">Reshuffle</a>\
                    </li>\
                    <li class="nav-item mx-0 mx-lg-1 text-holly"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"\
                            href="https://ericww32.github.io/Secret_Santa/info.html#about">About</a></li>\
                    <li class="nav-item mx-0 mx-lg-1 text-holly"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"\
                            href="https://ericww32.github.io/Secret_Santa/info.html#notes">Note</a></li>\
                    <li class="nav-item mx-0 mx-lg-1 text-holly"><a\
                            class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"\
                            href="https://ericww32.github.io/Secret_Santa/info.html#rules">Rules</a></li>\
                </ul>\
            </div>\
        </div>\
    </nav>';

window.onload = function header_loader() {
        document.getElementById('santa_header').innerHTML = header_info;

        (function ($) {
                "use strict"; // Start of use strict

                // Smooth scrolling using jQuery easing
                $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
                        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                                var target = $(this.hash);
                                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                                if (target.length) {
                                        $('html, body').animate({
                                                scrollTop: (target.offset().top - 71)
                                        }, 1000, "easeInOutExpo");
                                        return false;
                                }
                        }
                });

                // Scroll to top button appear
                $(document).scroll(function () {
                        var scrollDistance = $(this).scrollTop();
                        if (scrollDistance > 100) {
                                $('.scroll-to-top').fadeIn();
                        } else {
                                $('.scroll-to-top').fadeOut();
                        }
                });

                // Closes responsive menu when a scroll trigger link is clicked
                $('.js-scroll-trigger').click(function () {
                        $('.navbar-collapse').collapse('hide');
                });

                // Activate scrollspy to add active class to navbar items on scroll
                $('body').scrollspy({
                        target: '#mainNav',
                        offset: 80
                });

                // Collapse Navbar
                var navbarCollapse = function () {
                        if ($("#mainNav").offset().top > 100) {
                                $("#mainNav").addClass("navbar-shrink");
                        } else {
                                $("#mainNav").removeClass("navbar-shrink");
                        }
                };
                // Collapse now if page is not at top
                navbarCollapse();
                // Collapse the navbar when page is scrolled
                $(window).scroll(navbarCollapse);

                // Floating label headings for the contact form
                $(function () {
                        $("body").on("input propertychange", ".floating-label-form-group", function (e) {
                                $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
                        }).on("focus", ".floating-label-form-group", function () {
                                $(this).addClass("floating-label-form-group-with-focus");
                        }).on("blur", ".floating-label-form-group", function () {
                                $(this).removeClass("floating-label-form-group-with-focus");
                        });
                });

        })(jQuery); // End of use strict
}