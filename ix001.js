// lottie animations
//animation=bodymovin.loadAnimation({container:document.getElementById("gleam-team-anim"),renderer:"svg",loop:!0,autoplay:!0,path:$("#gleam-team-anim").attr("img-url")}),animation=bodymovin.loadAnimation({container:document.getElementById("mobile-img"),renderer:"svg",loop:!0,autoplay:!0,path:$("#mobile-img").attr("img-url")}),animation=bodymovin.loadAnimation({container:document.getElementById("mirror-img"),renderer:"svg",loop:!0,autoplay:!0,path:$("#mirror-img").attr("img-url")}),animation=bodymovin.loadAnimation({container:document.getElementById("coffee-mug"),renderer:"svg",loop:!0,autoplay:!0,path:$(".img-sec  #coffee-mug").attr("img-url")}),home_services_objects=[],$(".services-sec .service-box .motion-img").each(function(o,e){$(e).attr("class").split(" ")[0];bodymovin.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:$(e).attr("image-url")}),home_services_objects.push(e)}),how_it_works_objects=[],$(".how-it-works-sec .img-box .motion-img").each(function(o,e){$(e).attr("class").split(" ")[0];bodymovin.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:$(e).attr("image-url")}),how_it_works_objects.push(e)}),choose_service_objects=[],$(".choose-service-sec .service-box .motion-img").each(function(o,e){$(e).attr("class").split(" ")[0];bodymovin.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:$(e).attr("image-url")}),choose_service_objects.push(e)}),stickers_objects=[],$(".about-page-wrap .inner-banner-sec .stickers-box .motion-img").each(function(o,e){$(e).attr("class").split(" ")[0];bodymovin.loadAnimation({container:e,renderer:"svg",loop:!0,autoplay:!0,path:$(e).attr("image-url")}),stickers_objects.push(e)}),animation=bodymovin.loadAnimation({container:document.getElementById("coffe-mug-motion"),renderer:"svg",loop:!0,autoplay:!0,path:$(".img-box  #coffe-mug-motion").attr("img-url")}),animation=bodymovin.loadAnimation({container:document.getElementById("cleaning-blue"),renderer:"svg",loop:!0,autoplay:!0,path:$(".two-colm-box-sec .box-content #cleaning-blue").attr("img-url")});
(animation = bodymovin.loadAnimation({
    container: document.getElementById("gleam-team-anim"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: $("#gleam-team-anim").attr("img-url"),
})),
(animation = bodymovin.loadAnimation({
    container: document.getElementById("mobile-img"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: $("#mobile-img").attr("img-url"),
})),
(animation = bodymovin.loadAnimation({
    container: document.getElementById("mirror-img"),
    renderer: "svg",
    loop: !0,
    autoplay: !0,
    path: $("#mirror-img").attr("img-url"),
})),
setTimeout(function() {
        animation = bodymovin.loadAnimation({
            container: document.getElementById("coffee-mug"),
            renderer: "svg",
            loop: !0,
            autoplay: !0,
            path: $(".img-sec  #coffee-mug").attr("img-url"),
        });
    }, 3e3),
    (home_services_objects = []),
    setTimeout(function() {
        $(".services-sec .service-box .motion-img").each(function(o, e) {
            $(e).attr("class").split(" ")[0],
                bodymovin.loadAnimation({
                    container: e,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: $(e).attr("image-url"),
                }),
                home_services_objects.push(e);
        });
    }, 3e3),
    (how_it_works_objects = []),
    $(".how-it-works-sec .img-box .motion-img").each(function(o, e) {
        $(e).attr("class").split(" ")[0],
            bodymovin.loadAnimation({
                container: e,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: $(e).attr("image-url"),
            }),
            how_it_works_objects.push(e);
    }),
    (choose_service_objects = []),
    $(".choose-service-sec .service-box .motion-img").each(function(o, e) {
        $(e).attr("class").split(" ")[0],
            bodymovin.loadAnimation({
                container: e,
                renderer: "svg",
                loop: !0,
                autoplay: !0,
                path: $(e).attr("image-url"),
            }),
            choose_service_objects.push(e);
    }),
    (stickers_objects = []),
    $(".about-page-wrap .inner-banner-sec .stickers-box .motion-img").each(
        function(o, e) {
            $(e).attr("class").split(" ")[0],
                bodymovin.loadAnimation({
                    container: e,
                    renderer: "svg",
                    loop: !0,
                    autoplay: !0,
                    path: $(e).attr("image-url"),
                }),
                stickers_objects.push(e);
        }
    ),
    (animation = bodymovin.loadAnimation({
        container: document.getElementById("coffe-mug-motion"),
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        path: $(".img-box  #coffe-mug-motion").attr("img-url"),
    })),
    (animation = bodymovin.loadAnimation({
        container: document.getElementById("cleaning-blue"),
        renderer: "svg",
        loop: !0,
        autoplay: !0,
        path: $(".two-colm-box-sec .box-content #cleaning-blue").attr("img-url"),
    }));
// main js
$(document).ready(function() {
        // Pass along utm parameters to all links, except book now buttons
        const urlParams = new URLSearchParams(window.location.search);
        const toSend = {
            utm_medium: urlParams.get("utm_medium"),
            utm_source: urlParams.get("utm_source"),
            utm_campaign: urlParams.get("utm_campaign"),
            utm_content: urlParams.get("utm_content"),
            utm_term: urlParams.get("utm_term"),
            gclid: urlParams.get("gclid"),
            gad: urlParams.get("gad"),
            msclkid: urlParams.get("msclkid"),
            fbclid: urlParams.get("fbclid"),
            _gl: urlParams.get("_gl"),
        };
        let queryString = "";
        Object.keys(toSend).forEach((item) => {
            if (toSend[item] !== null) {
                const connector = queryString === "" ? "?" : "&";
                queryString += connector + item + "=" + toSend[item];
            }
        });
        if (queryString !== "") {
            $('a[href]:not(a[href^="#"]').each(function() {
                var href = $(this).attr("href");

                // Check if the href already contains a query string
                if (href.indexOf("?") !== -1) {
                    // Append with & if a query string exists
                    $(this).attr("href", href + "&" + queryString.substring(1)); // Remove leading '?' from queryString
                } else {
                    // Append with ? if no query string exists
                    $(this).attr("href", href + queryString);
                }
            });
        }

        let announcementHeight = $(".announcement-bar-active").outerHeight() || 0;

        if ($(".announcement-bar-2-active").length) {
            announcementHeight = $(".announcement-bar-2-active").outerHeight() || 0;
        }

        var t = [];
        $(".lottie-text").each(function(e, s) {
                var i = $(s).attr("class").split(" ")[0];
                console.log(i),
                    (i = bodymovin.loadAnimation({
                        container: s,
                        renderer: "svg",
                        loop: !1,
                        autoplay: !0,
                        path: $(s).attr("image-url"),
                    })),
                    t.push(i);
            }),
            $(window).on("scroll load", function() {
                t.forEach(function(t, e) {
                    $(".lottie-text").length &&
                        ($(".lottie-text").hasClass("inView") ? t.play() : t.stop());
                });

                // Header
                let announcementHeight = $(".announcement-bar").outerHeight() || 0;

                if ($(".announcement-bar-2-active").length) {
                    announcementHeight = $(".announcement-bar-2-active .announcement-bar ").outerHeight() || 0;
                }

                $(window).scrollTop() > 50 ?
                    $(".faqs-tab-nav-wrap").addClass("sticky") :
                    $(".faqs-tab-nav-wrap").removeClass("sticky");

                var e = $(window).scrollTop() / 4;
                $(".services-steps-sec .steps-row .img-box .circle-text-wrap").css({
                    transform: "translateY(-50%) rotate(" + e + "deg)",
                });
            }),
            $(".site-navigation .mega-menu .menu-wrap ul li a").append(
                '<span class="star"></span><span class="star"></span><span class="star"></span>'
            ),
            $(".glimmer-star-effect").append(
                '<span class="star"></span><span class="star"></span><span class="star"></span>'
            ),
            $("#menu-toggle-btn").click(function() {
                $(".site-header .mega-menu .toggle-content").toggleClass("active"),
                    $(".site-header").toggleClass("mega-menu-active"),
                    $(this).toggleClass("toggled"),
                    $("body").toggleClass("popupActive");
            });
        var e = $(
            ".dental-renaissance-sec .content-box .text-sec .desc"
        ).innerHeight();

        function s() {
            var t = $(".stars-box").find(".star"),
                e = t.length,
                s = Math.floor(Math.random() * e);
            t.removeClass("animate"), t.eq(s).addClass("animate");
        }

        function i() {
            var t = $(".stars-box").find(".star"),
                e = t.length,
                s = Math.floor(Math.random() * e);
            t.removeClass("animate2"), t.eq(s).addClass("animate2");
        }
        window.innerWidth > 750 &&
            $(".dental-renaissance-sec .content-box .text-sec .desc").css(
                "height",
                e + "px"
            ),
            jQuery(window).on("load resize", function() {
                var t = jQuery(".container").width(),
                    e = (jQuery("body").width() - t) / 2;
                jQuery(".container-special.right-flow").css("margin-left", e + "px"),
                    jQuery(".container-special.left-flow").css("margin-right", e + "px");
            }),
            $(".our-team-box.slider").slick({
                infinite: !0,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: !1,
                responsive: [{
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                    },
                }, ],
            });
        if (
            $(".insta-feeds-sec .insta-feeds-box .feed-item").length > 4 ||
            $(window).width() < 1025
        ) {
            jQuery(".insta-feeds-sec .insta-feeds-box")
                .not(".slick-initialized")
                .slick({
                    arrows: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 5000,
                    pauseOnFocus: true,
                    responsive: [{
                            breakpoint: 1025,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: "25%",
                            },
                        },
                        {
                            breakpoint: 751,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: "80px",
                            },
                        },
                        {
                            breakpoint: 481,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                centerMode: true,
                                centerPadding: "40px",
                            },
                        },
                    ],
                });
        }
        $(".services-steps-sec .steps-content-wrap .steps-slider-box").slick({
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                autoplay: false,
                dots: false,
                fade: true,
                cssEase: "linear",
                responsive: [{
                    breakpoint: 751,
                    settings: {
                        dots: true,
                        arrows: false,
                    },
                }, ],
            }),
            $(".members-testimonials .mentions-box-wrap").slick({
                infinite: !1,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !1,
                autoplay: !1,
                dots: !0,
                responsive: [{
                    breakpoint: 751,
                    settings: {
                        slidesToShow: 1,
                        dots: !0,
                    },
                }, ],
            }),
            $(window).on("load resize", function() {
                $(".slick-dots li").length <= 1 && $(".slick-dots").addClass("hide");
            }),
            $(".faq-panel:first-of-type .body").slideDown(),
            $(".faq-panel:first-of-type").addClass("active"),
            $(".faq-panel .title").click(function() {
                $(this).siblings(".body").slideToggle(),
                    $(this).parents(".faq-panel").toggleClass("active");
            }),
            $(window).width() < 751 &&
            ($(".faqs-main-wrap .faqs-tabs ul li .icon").remove(),
                setTimeout(function() {
                    var t = $(".faqs-main-wrap .faqs-tabs ul li.active").text();
                    $(".faqs-main-wrap .faqs-tabs").prepend(
                            '<span class="current-text"></span>'
                        ),
                        $(".faqs-main-wrap .faqs-tabs .current-text").text(t),
                        $(".faqs-main-wrap .faqs-tabs ul li").click(function() {
                            var t = $(this).text();
                            $(".faqs-main-wrap .faqs-tabs .current-text").text(t),
                                $(".faqs-main-wrap .faqs-tabs ul").slideUp();
                        }),
                        $(".faqs-main-wrap .faqs-tabs span.current-text").click(function() {
                            $(this).siblings("ul").slideToggle();
                        });
                }, 100)),
            $(window).width() < 751 &&
            ($(".category-filter .cat-filter-btn-mob").click(function() {
                    $(this).siblings("ul").slideToggle(),
                        $(this).toggleClass("filter-active");
                }),
                $(document).click(function(t) {
                    $(t.target).closest(".cat-filter-btn-mob").length ||
                        ($("body").find(".category-filter ul").slideUp(),
                            $(".category-filter .cat-filter-btn-mob").removeClass(
                                "filter-active"
                            ));
                }),
                $(".search-box .search-toggle-btn").click(function() {
                    $(this).siblings("form").fadeToggle();
                })),
            $(
                ".faqs-main-wrap .faqs-tabs ul li:first-of-type, .faqs-main-wrap .faqs-tab-content .faq-sec:first-of-type"
            ).addClass("active"),
            $(".faqs-tabs ul li").click(function() {
                var t = $(this).attr("data-id");
                $(".faqs-tabs ul li").removeClass("active"),
                    $(this).addClass("active"),
                    $(".faqs-main-wrap .faq-sec").removeClass("active"),
                    $("#" + t).addClass("active");
            }),
            $(".how-it-works-sec .heading-text .desc strong:nth-of-type(1)").click(
                function() {
                    $("html, body").animate({
                            scrollTop: $("#shopify-section-cleaning").offset().top - 60,
                        },
                        1e3
                    );
                }
            ),
            $(".how-it-works-sec .heading-text .desc strong:nth-of-type(2)").click(
                function() {
                    $("html, body").animate({
                            scrollTop: $("#shopify-section-whitening").offset().top - 60,
                        },
                        1e3
                    );
                }
            ),
            s(),
            setInterval(function() {
                s();
            }, 700),
            i(),
            setInterval(function() {
                i();
            }, 1e3),
            $(window).width() < 1025 &&
            $(".stars-box").children().filter(":gt(9)").remove(),
            $(window).width() < 751 &&
            $(".stars-box").children().filter(":gt(7)").remove();
    }),
    jQuery(window).bind("load", function() {
        $(".lottie-text").each(function(t, e) {
                (e = $(e)).visible(!0) && e.addClass("inView");
            }),
            $(window).on("load scroll", function(t) {
                $(".sticker-img").each(function(t, e) {
                        (e = $(e)).visible(!0) && e.addClass("inView");
                    }),
                    $(".lottie-text").each(function(t, e) {
                        (e = $(e)).visible(!0) && e.addClass("inView");
                    });
            }),
            $(".banner-sec").addClass("banner-init"),
            $(".preloader-box").fadeOut(500),
            $(".wave-text").addClass("active"),
            $(".testimonials-sec .testimonial-content-wrap").slick({
                infinite: !1,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: !1,
                autoplay: !0,
                responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            dots: !0,
                        },
                    },
                    {
                        breakpoint: 751,
                        settings: {
                            slidesToShow: 1,
                            dots: !0,
                        },
                    },
                ],
            });
        var t = $(
            ".testimonials-sec .testimonial-content-wrap .testimonial-box"
        ).length;
        $(window).width() > 1024 &&
            t < 4 &&
            $(".testimonials-sec .testimonial-content-wrap").slick("unslick");

        setTimeout(function() {
            $(".insta_feed_new li video").attr("playsinline", "");
        }, 500);
    });
for (
    var divs = document.getElementsByClassName("circle-text"), i = 0; i < divs.length; i++
)
    window.innerWidth < 751 ?
    new CircleType(divs[i]).radius(70) :
    new CircleType(divs[i]).radius(90);
var serDivs = document.querySelectorAll(".anim-circular-box .circle-text");
for (i = 0; i < serDivs.length; i++)
    window.innerWidth < 1025 ?
    new CircleType(serDivs[i]).radius(75) :
    new CircleType(serDivs[i]).radius(95),
    window.innerWidth < 751 && new CircleType(serDivs[i]).radius(60);
!(function(t) {
    t.fn.visible = function(e) {
        var s = t(this),
            i = t(window),
            a = t(".sticker-img, .lottie-text").height();
        return (
            (viewTop = i.scrollTop()),
            (viewBottom = viewTop + i.height()),
            (_top = s.offset().top + a),
            (_bottom = _top + s.height()),
            (compareTop = !0 === e ? _bottom : _top),
            (compareBottom = !0 === e ? _top : _bottom),
            compareBottom <= viewBottom && compareTop >= viewTop
        );
    };
})(jQuery);

$(document).ready(() => {
    if ($(".photo-slider__wrapper").length) {
        if (
            location.href.includes("/careers-overview") ||
            location.href.includes("/hygienists-overview")
        ) {
            $(".photo-slider__wrapper .photo-slider").slick({
                centerMode: false,
                centerPadding: "0px",
                variableWidth: false,
                arrows: false,
                mobileFirst: true,
                infinite: false,
                lazyLoad: "ondemand",
                responsive: [{
                    breakpoint: 600,
                    settings: {
                        infinite: false,
                        centerMode: false,
                        centerPadding: "0px",
                        variableWidth: false,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                }, ],
            });
        } else {
            $(".photo-slider__wrapper .photo-slider").slick({
                centerMode: true,
                centerPadding: "60px",
                variableWidth: true,
                arrows: false,
                lazyLoad: "ondemand",
                mobileFirst: true,
                // responsive: [
                //   {
                //     breakpoint: 600,
                //     settings: {
                //     centerMode: false,
                //     variableWidth: false,
                //       slidesToShow: 1,
                //       slidesToScroll: 1
                //     }
                //   }
                // ]
            });
        }

        $(".photo-slider__wrapper .left-carousel-arrow").click((e) => {
            e.preventDefault();
            $(".photo-slider").slick("slickPrev");
        });
        $(".photo-slider__wrapper .right-carousel-arrow").click((e) => {
            e.preventDefault();
            $(".photo-slider").slick("slickNext");
        });
    }

    // Scrollers
    if ($(".scroll-drag").length) {
        let isDown = false;
        let wasDrag = false;
        let startX;
        let scrollLeft;

        // Drag stops
        const end = (slider, e) => {
            isDown = false;
            slider.classList.remove("active");
        };

        // Drag starts
        const start = (slider, e) => {
            console.log("start");
            isDown = true;
            wasDrag = false;
            slider.classList.add("active");
            startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        // Drag in progress
        const move = (slider, e) => {
            if (!isDown) return;
            wasDrag = true;

            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
            const dist = x - startX;
            slider.scrollLeft = scrollLeft - dist;
        };

        // Select scrollers
        const sliders = document.querySelectorAll(".scroll-drag");

        // Attach events
        sliders.forEach((slider) => {
            slider.addEventListener("mousedown", (e) => start(slider, e));
            slider.addEventListener("mousemove", (e) => move(slider, e));
            slider.addEventListener("mouseleave", (e) => end(slider, e));
            slider.addEventListener("mouseup", (e) => end(slider, e));
        });
    }

    $(".announcement-bar").slick({
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    // Open Klaviyo popup
    if (document.querySelector(".announcement-bar a[href='#klaviyo']")) {
        document.querySelector(".announcement-bar a[href='#klaviyo']").addEventListener("click", function(e) {
            e.preventDefault();
            window._klOnsite = window._klOnsite || [];
            window._klOnsite.push(["openForm", "Vgedh7"]);
        });
    }

    // Open Klaviyo popup
    if (document.querySelector(".promo-intro-wrap .popup")) {
        document.querySelectorAll(".promo-intro-wrap .popup").forEach((link) => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                window._klOnsite = window._klOnsite || [];
                window._klOnsite.push(["openForm", "Vgedh7"]);
            });
        });
    }

    // Open Klaviyo popup - graby ID from href
    if (document.querySelector("a[href^='#klaviyo-']")) {
        document.querySelectorAll("a[href^='#klaviyo-']").forEach((link) => {
            link.addEventListener("click", function(e) {
                e.preventDefault();
                const popupId = this.getAttribute("href").replace("#klaviyo-", "");
                window._klOnsite = window._klOnsite || [];
                window._klOnsite.push(["openForm", popupId]);
            });
        });
    }

    $(".service").click(function() {
        $(this)
            .children(".description-toggle")
            .find(".short, .long")
            .toggleClass("long short");
        // $(this).children('.description-toggle').find('.long').show();
    });

    // $(".service").click(function() {
    //     $(this).closest('.description-toggle').find('.short').show();
    //     $(this).closest('.description-toggle').find('.long').hide();
    // });

    // $('.footer-menu .menu-col > ul > li > a').on('click', function(e) {
    //   const mediaQuery = window.matchMedia('(max-width: 767px)');
    //   if (mediaQuery.matches) {
    //     e.preventDefault();
    //     $(this).parent().toggleClass('active');
    //     $(this).next('.dropdown-child').slideToggle();
    //   }
    // });

    // Tabs

    $(".service-nav a").on("click", function(e) {
        e.preventDefault();
        var index = $(this).parent().index();
        $(".service-tabs  .service-tab ")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $(".service-nav a")
            .eq(index)
            .addClass("active")
            .parent()
            .siblings()
            .children()
            .removeClass("active");
    });

    $(".tabs-section-nav a").on("click", function(e) {
        e.preventDefault();
        var index = $(this).parent().index();
        $(".tabs-section-tabs .tabs-section-tab")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $(".tabs-section-nav a")
            .eq(index)
            .addClass("active")
            .parent()
            .siblings()
            .children()
            .removeClass("active");
    });

    $(".tabs-section-nav-v2 a").on("click", function(e) {
        e.preventDefault();
        var index = $(this).parent().index();
        $(".tabs-section-tabs-v2 .tabs-section-tab")
            .eq(index)
            .addClass("active")
            .siblings()
            .removeClass("active");
        $(".tabs-section-nav-v2 a")
            .eq(index)
            .addClass("active")
            .parent()
            .siblings()
            .children()
            .removeClass("active");
    });

    // Add class to promo header if countdown timer is active
    if (document.querySelector(".countdown-container")) {
        document.querySelector(".promo-intro-wrap").classList.add("timer-active");
    }
    // FAQ tabs
    const faqsNav = document.querySelectorAll(".faqs-tab-nav li a");

    if (faqsNav) {
        faqsNav.forEach((link) => {
            link.addEventListener("click", function(e) {
                faqsNav.forEach((link) => {
                    link.classList.remove("active");
                });

                e.currentTarget.classList.add("active");
            });
        });
    }

    $(".faqs-tab-nav ul li a").on("click", function(e) {
        e.preventDefault();
        var index = $(this).parent().index();
        var windowsize = $(window).width();
        console.log({
            windowsize
        });
        windowsize < 992 ?
            $("html, body").animate({
                scrollTop: $(".faq-sec").eq(index).offset().top - 85,
            }) :
            $("html, body").animate({
                scrollTop: $(".faq-sec").eq(index).offset().top - 240,
            });
    });
});

// main dev js
$(document).ready(function() {
    function e(e) {
        return !!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e);
    }
    var t = [];
    $(".team-member-filter option").each(function() {
            t.indexOf($(this).attr("value")) > "-1" ?
                $(this).remove() :
                t.push($(this).attr("value"));
        }),
        $(".form-sec #contact_form").submit(function(t) {
            $(".form-sec .email-errors").text(""),
                $(".form-sec .newsletters-success").text("");
            var o = $(".form-sec form #location_submit_email").val();
            return "" == o ?
                ($(".form-sec .email-errors").text("Email is required field."), !1) :
                0 == e(o) ?
                ($(".form-sec .email-errors").text("Email should be valid."), !1) :
                ($.ajax({
                        type: "POST",
                        url: "https://api2.autopilothq.com/v1/contact",
                        async: !1,
                        headers: {
                            autopilotapikey: "eba2ff750aed41119fb06e613d799a00",
                            "Content-Type": "application/json",
                        },
                        data: JSON.stringify({
                            contact: {
                                Email: o,
                            },
                        }),
                        contentType: "application/json",
                        complete: function(e) {
                            console.log(e),
                                $("form #location_submit_email").val(""),
                                null == e.responseJSON.error ?
                                (console.log(e.responseJSON.contact_id),
                                    $(".form-sec .newsletters-success").text(
                                        "Success!! Thanks for subscribing."
                                    )) :
                                (console.log(e.responseJSON.error),
                                    $(".form-sec .email-errors").text(e.responseJSON.error));
                        },
                    }),
                    void t.preventDefault());
        }),
        $(".newsletter-form #contact_form").submit(function(t) {
            $(".newsletter-form .email_error").text(""),
                $(".newsletter-form .newsletter_success").text("");
            var o = $(".newsletter-form form #header_submit_email").val();
            return "" == o ?
                ($(".newsletter-form .email_error").text("Email is required field."), !1) :
                0 == e(o) ?
                ($(".newsletter-form .email_error").text("Email should be valid."), !1) :
                ($.ajax({
                        type: "POST",
                        url: "https://api2.autopilothq.com/v1/contact",
                        async: !1,
                        headers: {
                            autopilotapikey: "eba2ff750aed41119fb06e613d799a00",
                            "Content-Type": "application/json",
                        },
                        data: JSON.stringify({
                            contact: {
                                Email: o,
                            },
                        }),
                        contentType: "application/json",
                        complete: function(e) {
                            console.log(e),
                                $("form #header_submit_email").val(""),
                                null == e.responseJSON.error ?
                                (console.log(e.responseJSON.contact_id),
                                    $(".newsletter-form .newsletter_success").text(
                                        "Success!! Thanks for subscribing."
                                    )) :
                                (console.log(e.responseJSON.error),
                                    $(".newsletter-form .email_error").text(
                                        e.responseJSON.error
                                    ));
                        },
                    }),
                    void t.preventDefault());
        }),
        $(".newsletter-sec #contact_form").submit(function(t) {
            $(".newsletter-sec .email-error").text(""),
                $(".newsletter-sec .newsletter-success").text("");
            var o = $("form #submit_email").val();
            return "" == o ?
                ($(".newsletter-sec .email-error").text("Email is required field."), !1) :
                0 == e(o) ?
                ($(".newsletter-sec .email-error").text("Email should be valid."), !1) :
                ($.ajax({
                        type: "POST",
                        url: "https://api2.autopilothq.com/v1/contact",
                        async: !1,
                        headers: {
                            autopilotapikey: "eba2ff750aed41119fb06e613d799a00",
                            "Content-Type": "application/json",
                        },
                        data: JSON.stringify({
                            contact: {
                                Email: o,
                            },
                        }),
                        contentType: "application/json",
                        complete: function(e) {
                            console.log(e),
                                $("form #submit_email").val(""),
                                null == e.responseJSON.error ?
                                (console.log(e.responseJSON.contact_id),
                                    $(".newsletter-sec .newsletter-success").text(
                                        "Success!! Thanks for subscribing."
                                    )) :
                                (console.log(e.responseJSON.error),
                                    $(".newsletter-sec .email-error").text(
                                        e.responseJSON.error
                                    ));
                        },
                    }),
                    void t.preventDefault());
        }),
        $(".load-more-sec .btn").on("click", function() {
            $(".post").removeClass("hide");
        }),
        $(".team-member-filter select").on("change", function() {
            var e = this;
            $(".our-team-box .card").each(function() {
                "" != $(e).val() ?
                    $(this).attr("data-address").includes($(e).val()) ?
                    $(this).show() :
                    $(this).hide() :
                    $(this).show();
            });
        }),
        $("#search-criteria").keyup(function(e) {
            8 == e.keyCode &&
                "" == $(this).val() &&
                ($(".search-result-text").hide(),
                    $(".load-more-sec").hide(),
                    $(".searched-data").hide(),
                    $(".loaded-data").show());
        }),
        $("#search").on("click", function(e) {
            e.preventDefault();
            var t = !1,
                o = $("#search-criteria").val().toLowerCase();
            $(".search_keyword").text(o),
                $(".searched-data").find(".post-box").html(""),
                $(".blog-category .post").each(function() {
                    -1 != $(this).find(".post-text h6").text().toLowerCase().indexOf(o) &&
                        ($(".search-result-text").show(),
                            $(".searched-data")
                            .find(".post-box")
                            .append('<article class="post">' + $(this).html() + "</article>"),
                            (t = !0));
                }),
                $(".loaded-data").hide(),
                $(".searched-data").show(),
                t || $(".search_keyword").text("data not found");
        }),
        $(".load-more-sec").hide(),
        $(".search-result-text").hide(),
        $(".category-filter ul li a").on("click", function(e) {
            e.preventDefault();
            var t = $(this).attr("data-value");
            $(this)
                .parent()
                .parent()
                .parent()
                .find(".cat-filter-btn-mob")
                .html($(this).html());
            $(".category-filter ul li").removeClass("active"),
                $(this).parent().addClass("active"),
                $(".blog-category").fadeOut(),
                $(".blog-category." + t).fadeIn(),
                $(".blog-category").removeClass("active"),
                $(".blog-category." + $(this).attr("data-value")).addClass("active"),
                "all" == t ?
                ($(".load-more-sec").hide(),
                    $(".heading-text").hide(),
                    $(".recent-post").show()) :
                ($(".load-more-sec").show(),
                    $(".recent-post").hide(),
                    $(".heading-text").hide(),
                    $(".blog-category.active .post").length < 6 &&
                    $(".load-more-sec").hide());
        });
});