$(document).ready(function() {
    
//Side off-canvas menu configurations
    $('.menu_btn').click(function() {
        if($('#menu').hasClass('open')) {
            $('#menu').removeClass('open');
            } else {
                $('#menu').addClass('open');
                }    
    });
    $('.settings').click(function() {
        if($('#menu').hasClass('open')) {
            $('#menu').removeClass('open');
            } else {
                $('#menu').addClass('open');
                $('#settingsArrow').addClass('rotate');
                $('#themes').delay(600).slideDown();
                }    
    });    
    $('.search_btn').click(function() {
        var $searchField = $('#searchField');
        if($('#menu').hasClass('open')) {
            $('#menu').removeClass('open');
            } else {
                $('#menu').addClass('open');
                $searchField.focus();
                }    
    });    
    
    $('.close_btn').click(function() {
        if($('#menu').hasClass('open')) {
        $('#menu').removeClass('open');
        }    
    });
    $('#menu').mouseleave(function() {
        if($('#menu').hasClass('open')) {
           $('#menu').removeClass('open'); 
        }    
    });

    $('.menu_settings').click(function() {
        $('#themes').slideToggle();
        $('#settingsArrow').toggleClass('rotate');

    });
    
    $('.bkg').click(function(e) {
        changeBkg(e);
    })
       
    
//Profile button configurations  
    $('.profilePic, .profileName').click(function() {
        var $profileModal = $('#profile_modal');
        if($profileModal.hasClass('show')) {
        $profileModal.removeClass('show');    
        } else {
            $profileModal.addClass('show');
            } 
    });
    
    $('.home_btn').click(function() {
        window.location.href = "index.html";    
    });
    $('.page-header img').click(function() {
        goBack();    
    });
    
/* Getting our profile picture upload set up */
    $('#imgInp').change(function() {
    readURL(this);
    });
    
    $('html').mouseup(function (e) {
        var container = $("#profile_modal");
        var profilePic = $(".profilePic");
        var profileName = $(".profileName");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0 && !profilePic.is(e.target) && profilePic.has(e.target).length === 0 && !profileName.is(e.target) && profileName.has(e.target).length === 0 ) // ... nor a descendant of the container
        {
            if (container.hasClass('show')) {
                container.removeClass('show');
            }
        }
    });
    $('#profile_modal ul li').click(function() {
        $('#profile_modal').removeClass('show');    
    });
    $('#profile_modal ul li:first-child').click(function() {
        $('#imgInp').trigger("click");   
    });
    $('#profile_modal ul li:last-child').click(function() {
        location.reload();    
    });
    $('.moreLink').click(function() {
        var linkText = $(this);
        if(linkText.html() == "more..") {
        linkText.html("less..")    
        } else {
        linkText.html("more..")
        }
        $('.moreIntro').toggleClass('hidden');
    });
    
}); // End Document Ready


// Self invoking functions
(function() {

    var quotes = $(".quote");
    var quoteIndex = -1;
    var clients = $(".client");
    var clientIndex = -1;
    var images = $(".images");
    var imgIndex = -1;

    // Motivation quotes slider
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(700)
            .delay(4000)
            .fadeOut(800, showNextQuote);
    }

    // Sample client info slider
    function showNextClient() {
        ++clientIndex;
        clients.eq(clientIndex % clients.length)
            .fadeIn(800)
            .delay(4500)
            .fadeOut(700, showNextClient);
    }
    //Sample image slider
    function showNextImg() {
        ++imgIndex;
        images.eq(imgIndex % images.length)
            .fadeIn(700)
            .delay(4000)
            .fadeOut(700, showNextImg);
    }
    showNextQuote();
    showNextClient();
    showNextImg();

})();

//Detect file upload url path and dislay as profile pic
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('.profilePic').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
};

function goBack() {
    window.history.back()
}

// All colors needed for theming
var colors = {
    "purple": ["#5133AB", "#3E248C"],
    "lime": ["#8CBF26", "#759C27"],
    "blue": ["#2672EC", "#2462C7"],
    "pink": ["#C1004F", "#A30747"],
    "orange": ["#FF981D", ""],
    "light-purp": ["#AA00FF", ""],
    "dkgray": "#2B2A2A"
}

// Change theme backgrounds
function changeBkg(el) {
    var mainWrapper = document.getElementById("main_wrapper"), 
    menu = document.getElementById("menu"),
    color, img;
    try {
        // Checks to see if it's a color background and an not image
        if(el.currentTarget.classList.contains("color_bkg")) {
            color = el.currentTarget.id;
            mainWrapper.style.background = colors[color][0];
            menu.style.background = colors[color][1];
        } else {
            // first class name has to be same and the image file name
            img = el.currentTarget.classList[0]
            mainWrapper.style.background = "url(images/"+img+".jpg)";
            menu.style.background = colors["dkgray"];
        }
    } catch(err) {
        console.log(err.message);
    }
}