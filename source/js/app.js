//console.log('app.js connected!');

//===== is jQuery ======
//window.onload = function() {
//    if (window.jQuery) {
//        // jQuery is loaded
//        alert("Yeah!");
//    } else {
//        // jQuery is not loaded
//        alert("Doesn't Work");
//    }
//}
$(document).ready(function(){
    //====== initiate Foundation =======
    $(document).foundation();
    console.log('app.js connected and Foundation Sctips is running!');


    var mainNav = $('#mainNavWrap');
    // ====== menu icon animation ========
    $('#menu-link').on('click', function (event) {
        //event.preventDefault();
        event.stopPropagation();
        mainNav.toggleClass('active-toggle');
        $('body').toggleClass('noScroll');
    });
    $(document).click( function(){
        if(mainNav.hasClass('active-toggle') && !$(event.target).is("#mainNav a, #menu-link")) {
            mainNav.toggleClass('active-toggle');
            $('#mainNav').css('display', 'none');
            $('body').toggleClass('noScroll');
        }
    });

    // ====== show - hide main navigation ========
    (function() {
        var didScroll;
        $(window).scroll(function(event){
            didScroll = true;
        });
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        var pageBody = $('body');
        var mainNavHeight = mainNav.outerHeight();
        pageBody.css('padding-top', mainNavHeight); // This MUST BE be moved to css
        var lastScrollTop = 0;
        var tripNavEl = $('#tripDetailsNavWrap');
        var contentBelowTripNavEl = $('#contentBelowTripNav');
        var tripNavDocPosition = 0;
        function hasScrolled() {
            var currentScrollTop = $(this).scrollTop();
            if(tripNavDocPosition === 0 ) {
                tripNavDocPosition = tripNavEl.offset().top;
            }
            if(currentScrollTop > lastScrollTop && currentScrollTop > mainNavHeight) {
                mainNav.addClass('hideNav');
                tripNavEl.removeAttr('style');
            } else {
                mainNav.removeClass('hideNav');
                if(tripNavEl.hasClass('fixTripNav')) {
                    tripNavEl.css('top', mainNavHeight);// This should go to css together with padding top pageBody
                }
            }
            if(currentScrollTop > tripNavDocPosition) {
                tripNavEl.addClass('fixTripNav');
                contentBelowTripNavEl.css('padding-top', tripNavEl.outerHeight());// move to CSS
            } else if(currentScrollTop + mainNavHeight < tripNavDocPosition) {
                tripNavEl.removeClass('fixTripNav');
                tripNavEl.removeAttr('style');
                contentBelowTripNavEl.removeAttr('style');
            }
            lastScrollTop = currentScrollTop;
        }
    })();
});

