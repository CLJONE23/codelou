# codelou

## Purpose
This website is going to be used as a personal portfolio.  

## Libraries Used
This website uses Bootstrap 4 and Fullpage.js and their respective prerequisites.  Bootstrap is used for much of the my css needs and fullpage.js is used to create divs that fill the viewport.  

## Custom JS
```javascript
$(document).ready(function() {

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
```


## Custom CSS

```css
/********************************************                            
Global
*********************************************/
* {
    font-family: 'Raleway', sans-serif;
}

/********************************************                            
Header
*********************************************/

#header{
    position:fixed;
    height: 55px;
    display:block;
    width: 100%;
    z-index:9;
    background-color: #0268c1;
}

#header{
    top:0px;
}

/********************************************                            
Navigation
*********************************************/

.colored-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgb(249,186,0)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
    border: none;
}

.navbar {
    background-color: #0268c1;
}

.navbar-brand {
    color: #F9BA00;
    font-weight: 600;
    font-size: 1.25em;
    display: block;
    padding-right: 15px;
    padding-bottom: 2px;
    margin-bottom: 7px;
}

.navbar-brand:hover {
    color: #F9BA00;
    border-bottom: 2px solid #F9BA00;
    margin-bottom: 5px;
}

.nav-item {
    color: #F9BA00;
    font-weight: 300;
    font-size: 1em;
    display: block;
    padding-right: 10px;
    padding-bottom: 2px;
    margin-bottom: 7px; 
}

.nav-item:hover {
    color: #F9BA00;
    border-bottom: 2px solid #F9BA00;
    margin-bottom: 5px;
}

/********************************************                            
Body
*********************************************/

#work-window-1 {
    background: url(https://picsum.photos/400/400?image=1074);
    background-repeat: no-repeat;
    background-size: cover;
}

#work-window-2 {
    background: url(https://picsum.photos/400/400?image=1071);
    background-repeat: no-repeat;
    background-size: cover;
}

#work-window-3 {
    background: url(https://picsum.photos/400/400?image=1073);
    background-repeat: no-repeat;
    background-size: cover;
}

#work-window-4 {
    background: url(https://picsum.photos/400/400?image=1061);
    background-repeat: no-repeat;
    background-size: cover;
}

#work-window-5 {
    background: url(https://picsum.photos/400/400?image=1051);
    background-repeat: no-repeat;
    background-size: cover;
}

#work-window-6 {    
    background: url(https://picsum.photos/400/400?image=1047);
    background-repeat: no-repeat;
    background-size: cover;
}

/********************************************                            
Form
*********************************************/

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: rgb(231, 231, 231);
  }
::-moz-placeholder { /* Firefox 19+ */
    color: rgb(231, 231, 231);
  }
:-ms-input-placeholder { /* IE 10+ */
    color: rgb(231, 231, 231);
  }
:-moz-placeholder { /* Firefox 18- */
    color: rgb(231, 231, 231);
  }

#insertText{
    background-color: #F8F9F9;
    border-radius: 2px;
    overflow-y: hidden;
}


/********************************************                            
Footer
*********************************************/

#footer{
    background-color: #0268c1;
    color: #F9BA00;
    padding: 5px;
}

.social-media {
    height: 36px;
    width: 36px;
    margin: 10px 8px 5px 0px;

}
```

## Continued Improvement
I will continue to work on this project.
