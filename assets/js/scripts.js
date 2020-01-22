/*
    Template Name: Rokstar - Portfolio Html Template
    Template URI: rashadulislam.com/demo/proshar-preview
    Description: Rokstar - Portfolio Html Template
    Author: dreamthemecoders
    Author URI: https://themeforest.net/user/dreamthemecoders
    Version: 1.0
*/

/*============================
   js index
==============================
    1. Load Function
    2. Scroll Function
    3. Variable Initialize
    4. Preloader
    5. Add Class On Slider Content
    6. Animation Style/Css
    7. Add Class Is ScrollView
    8. Parallax background
    9. Magnific Popup
    10. slicknav Mobile Menu
    11. Smoth Scroll
    12. Active current Li
    13. Gallery Masonary
    14. Ajax Contact Form



==========================================*/

(function($) {
    "use strict";

    /*================================
    1. Load Function
    ==================================*/
    $(window).on('load', function() {
        prealoaderSetup();
        slider_loaded();
        smoothScrolling($(".nav-menu ul li a[href^='#']"), headerHeight);
        smoothScrolling($(".next-section a[href^='#']"), headerHeight);
        smoothScrolling($(".go-to-top a[href^='#']"), 0);
    });

    /*================================
    2. Scroll Function
    ==================================*/
    $(window).on('scroll', function() {
        translateUpIsScrollView();
        addClassIsScrollView();
        activeMenuItem($(".nav-menu"));
    });


    /*================================
    3. Variable Initialize
    ==================================*/
    var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    var preloader = $('#preloader');
    var headerHeight = $('.header-area').innerHeight();


    /*================================
    4. Preloader
    ==================================*/
    function prealoaderSetup() {
        if (!isMobile) {
            setTimeout(function() {
                preloader.addClass('preloaded');
            }, 800);
            setTimeout(function() {
                preloader.remove();
            }, 2000);

        } else {
            preloader.remove();
        }
    }

    /*================================
    5. Add Class On Slider Content
    ==================================*/
    function slider_loaded() {
        setTimeout(function() {
            $('.txtanim1 span').each(function(i) {
                setTimeout(function() {
                    $('.txtanim1 span').eq(i).css({
                        "transform": "translate3d(0px, 0%, 0px)"
                    });
                }, (800 * (Math.exp(i * 0.05))) - 800);
            });
        }, 2000);
    }

    /*================================
    6. Animation Style/Css
    ==================================*/
    if (!isMobile) {
        var txtanim1Parent = $(".txtanim1, .anim_span");
        var txtanim1Span = $(".txtanim1 span, .anim_span span");
        var txtanim1SpanDelay = $(".txtanim1.delay1 span");
        txtanim1Parent.css({ "overflow": "hidden" });
        txtanim1Span.css({
            "display": "inline-block",
            "transform": "translate3d(0px, 100%, 0px)",
            "transition": "all 0.3s ease 0s"
        });
        txtanim1SpanDelay.css({ "transition": "http://wpocean.com/tf/html/rokstar/assets/js/all 0.3s ease 0.1s" });
    }

    /*================================
    7. Add Class Is ScrollView
    ==================================*/
    function isScrolledIntoView(elem) {
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function translateUpIsScrollView() {
        $('.txt1-wrap').each(function() {
            if (isScrolledIntoView(this) === true) {
                var $this = $(this).find('.txt1');
                $this.each(function(i) {
                    setTimeout(function() {
                        $this.eq(i).css({
                            "transform": "translate3d(0px, 0%, 0px)",
                            "opacity": "1"
                        });
                    }, (400 * (Math.exp(i * 0.14))) - 400);
                });
            }
        });
    }

    function addClassIsScrollView() {
        $('.txt2_is_show').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('is_show');
            }
        });
    }


    /*================================
    8. Parallax background
    ==================================*/
    function bgParallax() {
        if ($(".parallax").length) {
            $(".parallax").each(function() {
                var height = $(this).position().top;
                var resize = height - $(window).scrollTop();
                var parallaxSpeed = $(this).data("speed");
                var doParallax = -(resize / parallaxSpeed);
                var positionValue = doParallax + "px";
                var img = $(this).data("bg-image");

                $(this).css({
                    backgroundImage: "url(" + img + ")",
                    backgroundPosition: "50%" + positionValue,
                    backgroundSize: "cover",
                });

                if (window.innerWidth < 768) {
                    $(this).css({
                        backgroundPosition: "center center"
                    });
                }
            });
        }
    }
    bgParallax();
    $(window).on("scroll", function() {
        bgParallax();
    });


    /*================================
    9. Magnific Popup
    ==================================*/

    /*================================
    10. slicknav Mobile Menu
    ==================================*/
    $('ul#nav_menu').slicknav({
        prependTo: ".responsive-menu-wrap"
    });


    /*================================
    11. Smoth Scroll
    ==================================*/
    function smoothScrolling($links, $topGap) {
        var links = $links;
        var topGap = $topGap;

        links.on("click", function() {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
                if (target.length) {
                    $("html, body").animate({
                        scrollTop: target.offset().top - topGap
                    }, 1000, "easeInOutExpo");
                    return false;
                }
            }
            return false;
        });
    }

    /*================================
    12. Active current Li
    ==================================*/
    function activeMenuItem($links) {
        var top = $(window).scrollTop(),
            windowHeight = $(window).height(),
            documentHeight = $(document).height(),
            cur_pos = top + 2,
            sections = $("section"),
            nav = $links,
            nav_height = nav.outerHeight(),
            home = nav.find(" > ul > li:first");

        sections.each(function() {
            var top = $(this).offset().top - nav_height - 40,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find("> ul > li > a").parent().removeClass("active");
                nav.find("a[href='#" + $(this).attr('id') + "']").parent().addClass("active");
            } else if (cur_pos === 2) {
                nav.find("> ul > li > a").parent().removeClass("active");
                home.addClass("active");
            } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
                nav.find("> ul > li > a").parent().removeClass("active");
            }
        });
    }


    /*================================
    13. Gallery Masonary
    ==================================*/
    $('#container').imagesLoaded(function() {

        // filter items on button click
        $('.fortfolio-filter').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });

        // init Isotope
        var $grid = $('.portfolio-masonary').isotope({
            itemSelector: '.prt-grid',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.prt-grid',
            }
        });
    });

    $('.fortfolio-filter button').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /*================================
    14. Ajax Contact Form
    ==================================*/
    $('.screen-reader-response').hide();
    $('form#cf button#cnt_submit').on('click', function() {
        var name = $('#name').val();
        var email = $('#email').val();
        var msg = $('#msg').val();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (!regex.test(email)) {
            alert('Please enter valid email');
            return false;
        }

        name = $.trim(name);
        email = $.trim(email);
        msg = $.trim(msg);

        if (name != '' && email != '' && msg != '') {
            var values = "name=" + name + "&email=" + email + " &msg=" + msg;
            $.ajax({
                type: "POST",
                url: "http://wpocean.com/tf/html/rokstar/assets/js/mail.php",
                data: values,
                success: function() {
                    $('#name').val('');
                    $('#email').val('');
                    $('#msg').val('');

                    $('.screen-reader-response').fadeIn().html('<div class="alert alert-success"><strong>Success!</strong> Email has been sent successfully.</div>');
                    setTimeout(function() {
                        $('.screen-reader-response').fadeOut('slow');
                    }, 4000);
                }
            });
        } else {
            $('.screen-reader-response').fadeIn().html('<div class="alert alert-danger"><strong>Warning!</strong> Please fillup the informations correctly.</div>')
        }
        return false;
    });



})(jQuery);