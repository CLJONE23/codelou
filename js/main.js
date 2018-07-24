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