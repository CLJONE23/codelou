$(document).ready(function() {
    

    /******************************************

    SET FULLPAGE.JS VARIABLES AND INITIALIZE

    *******************************************/
    var myFullpage = new fullpage('#fullpage', {
        //Navigation
        menu: '#header',
        lockAnchors: false,
        anchors:['welcome', 'about', 'work', 'contact'],
        navigation: false,
        navigationPosition: 'center',
        navigationTooltips: [],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'center',
    
        //Scrolling
        css3: true,
        scrollingSpeed: 900,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        continuousHorizontal: false,
        scrollHorizontally: false,
        interlockedSlides: false,
        dragAndMove: false,
        offsetSections: false,
        resetSliders: false,
        fadingEffect: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowReset: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,
    
        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,
    
        //Design
        verticalCentered: true,
        sectionsColor : ['#fff'],
        paddingTop: '60px',
    
        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide-fpjs',
    
        lazyLoading: true,
    });

    /******************************************

    ON INPUT TO ANY FORM ELEMENT GENERATE NEW 
    HTML FOR EFFECT.  ONLY IF WINDOW WIDTH IS 
    GREATER THAN 768PX, BOOTSTRAP M BREAKPOINT

    *******************************************/

    $("#contactFirstName").on('input', function() {
        if($(window).width() > 768){
            var value = $("#contactFirstName").val()
            $("#insertText_FirstName").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_FirstName'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
        }
    });
    $("#contactLastName").on('input', function() {
        if($(window).width() > 768){
            var value = $("#contactLastName").val()
            $("#insertText_LastName").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_LastName'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
        }
    });
    $("#contactEmail").on('input', function() {
        if($(window).width() > 768){
            var value = $("#contactEmail").val()
            $("#insertText_Email").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_Email'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
        }
    });
    $("#contactMessage").on('input', function() {
        if($(window).width() > 768){
            var value = $("#contactMessage").val()
            $("#insertText_Message").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_Message'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;textarea>"+value+"&lt;/textarea></code></div></div>")
        }
    });

});

/******************************************

ON WINDOW RESIZE IF LESS THAN 768PX CLEAR
INSERT_TEXT ELEMENTS.  IF GREATER THAN OR
EQUAL TO 768PX AND FORM ELEMENTS ARE
POPULATED CREATE INSERT_TEXT ELEMENTS.  THIS
CAN BE REFINED EVENTUALLY.

*******************************************/

$(window).resize( function(){
    if($(window).width() < 768){
        $("#insertText_FirstName").empty();
        $("#insertText_LastName").empty();
        $("#insertText_Email").empty();
        $("#insertText_Message").empty();
    }
    if($(window).width() >= 768 && $("#contactFirstName").val().length > 0){
        var value = $("#contactFirstName").val()
        $("#insertText_FirstName").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_FirstName'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
    }
    if($(window).width() >= 768 && $("#contactLastName").val().length > 0){
        var value = $("#contactLastName").val()
        $("#insertText_LastName").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_LastName'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
    }
    if($(window).width() >= 768 && $("#contactEmail").val().length > 0){
        var value = $("#contactEmail").val()
        $("#insertText_Email").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_Email'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
    }
    if($(window).width() >= 768 && $("#contactMessage").val().length > 0){
        var value = $("#contactMessage").val()
        $("#insertText_Message").replaceWith("<div class='row align-items-start .d-none .d-md-block' id='insertText_Message'><div class='col-12 align-self-start .d-none .d-md-block'><code>&lt;input>"+value+"&lt;/input></code></div></div>")
    }
});

/* 
$(document).ready(function() {
    //  update #send with your button id, update message with your message   
    var message = "This is the message"
    $("#send").click( function(){
        console.log(message) 
    });
});
*/

/*$(document).ready(function() {
    
    conHeight = $(window).height();
    conWidth = $(window).width();
    navHeight = 55.9943;
    fooHeight = 55.9943;
    conMinusNav = (conHeight - navHeight);
    conMinusFooNav = (conHeight - (fooHeight + navHeight));

    console.log("main.js has loaded successfuly.  yasss!")
    $( ".fullContainer").css({
        'width': conWidth,
        'height': conMinusNav
    });

    $( ".fullContainer-footer").css({
        'width': conWidth,
        'height': conMinusFooNav
    });
 
    mainAboutTop = $( "#main-about" ).offset().top - navHeight;
    mainWorkTop = $( "#main-work" ).offset().top - navHeight;
    mainContactTop = $( "#main-contact" ).offset().top - navHeight;
    mainLandingTop = $( "#main-landing" ).offset().top - navHeight;

    $("a#nav-main-about").click(function(){
        console.log("about click docready");
        $('html, body').animate({ scrollTop: mainAboutTop }, 1000)
    });
    $("a#nav-main-work").click(function(){
        console.log("work click docready");
        $('html, body').animate({ scrollTop: mainWorkTop }, 1000)
    });
    $("a#nav-main-contact").click(function(){
        console.log("contact click docready");
        $('html, body').animate({ scrollTop: mainContactTop }, 1000)
    });
    $("a#nav-main-landing").click(function(){
        console.log("landing click docready");
        $('html, body').animate({ scrollTop: 0 }, 1000)
    });

    $(window).scroll(function(){
        currentScrollTop = $(window).scrollTop();
        aboutIsActive = (mainAboutTop - (0.5 * conHeight))
        workIsActive = (mainWorkTop - (0.5 * conHeight))
        contactIsActive = (mainContactTop - (0.5 * conHeight))
        if( currentScrollTop < aboutIsActive ){
            console.log("landing is active");
            $( "#main-landing" ).addClass("active");
            $( "#main-about, #main-work, #main-contact" ).removeClass("active");
        } else if ( currentScrollTop >= aboutIsActive && currentScrollTop < workIsActive ) {
            console.log("about is active");
            $( "#main-about" ).addClass("active");
            $( "#main-landing, #main-work, #main-contact" ).removeClass("active");
        } else if ( currentScrollTop >= workIsActive && currentScrollTop < contactIsActive){
            console.log("work is active");
            $( "#main-work" ).addClass("active");
            $( "#main-about, #main-landing, #main-contact" ).removeClass("active");
        } else if ( currentScrollTop >= contactIsActive){
            console.log("contact is active");
            $( "#main-contact" ).addClass("active");
            $( "#main-about, #main-work, #main-landing" ).removeClass("active");
        }
    
        console.log("st: "+st);
        if(st > lastSt){
            if(st < mainAboutTop){
                $('html, body').animate({ scrollTop: mainAboutTop }, 800)
            }
            else if(st >= mainAboutTop && st < mainWorkTop){
                $('html, body').animate({ scrollTop: mainWorkTop }, 800)
            }else{
                $('html, body').animate({ scrollTop: mainContactTop }, 800)
            }  
        }else{
            if(st < mainAboutTop){
                $('html, body').animate({ scrollTop: mainAboutTop }, 800)
            }
            else if(st >= mainAboutTop && st < mainWorkTop){
                $('html, body').animate({ scrollTop: mainAboutTop }, 800)
            }else{
                $('html, body').animate({ scrollTop: mainWorkTop }, 800)
            } 
        }
        lastSt = st
        console.log("lastSt: "+lastSt)
    
    });
    
    $(window).resize(function(){
        console.log("resize");

        conHeight = $(window).height();
        conWidth = $(window).width();
        navHeight = 55.9943;
        fooHeight = 55.9943;
        conMinusNav = (conHeight - navHeight);
        conMinusFooNav = (conHeight - (fooHeight + navHeight));
    
        $( ".fullContainer").css({
            'width': conWidth,
            'height': conMinusNav
        });
    
        $( ".fullContainer-footer").css({
            'width': conWidth,
            'height': conMinusFooNav
        });
     
        mainAboutTop = $( "#main-about" ).offset().top - navHeight;
        mainWorkTop = $( "#main-work" ).offset().top - navHeight;
        mainContactTop = $( "#main-contact" ).offset().top - navHeight;
        mainLandingTop = $( "#main-landing" ).offset().top - navHeight;
    
        activeTop = $(".active").offset().top - navHeight;
        
        $(window).scrollTop(activeTop)
    
        $("a#nav-main-about").click(function(){
            console.log("fire about click resize");
            $('html, body').animate({ scrollTop: mainAboutTop }, 1000)
        });
        $("a#nav-main-work").click(function(){
            console.log("fire work click resize");
            $('html, body').animate({ scrollTop: mainWorkTop }, 1000)
        });
        $("a#nav-main-contact").click(function(){
            console.log("fire contact click resize");
            $('html, body').animate({ scrollTop: mainContactTop }, 1000)
        });
        $("a#nav-main-landing").click(function(){
            console.log("fire landing click resize");
            $('html, body').animate({ scrollTop: 0 }, 1000)
        });
    
    
    });
});





// initialize values on page load

// keep track of viewport while scrolling

*/