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
    
    $('.purple').click(function() {
        $('#main_wrapper').css('background', '#5133AB');
        $('#menu').css('background', '#3E248C');
    });
    $('.lime').click(function() {
        $('#main_wrapper').css('background', '#8CBF26');
        $('#menu').css('background', '#759C27');
    });
    $('.blue').click(function() {
        $('#main_wrapper').css('background', '#2672EC');
        $('#menu').css('background', '#2462C7');
    });
    $('.pink').click(function() {
        $('#main_wrapper').css('background', '#C1004F');
        $('#menu').css('background', '#A30747');
    });
    $('.aurora').click(function() {
        $('#main_wrapper').css("background", "url(images/aurora.jpg)");
        $('#menu').css('background', '#2B2A2A');
    });
    $('.canal_rocks').click(function() {
        $('#main_wrapper').css("background", "url(images/canal_rocks.jpg)");
        $('#menu').css('background', '#2B2A2A');
    });
    $('.mechanical').click(function() {
        $('#main_wrapper').css("background", "url(images/mechanical.jpg)");
        $('#menu').css('background', '#2B2A2A');
    });
    $('.butterfly').click(function() {
        $('#main_wrapper').css("background", "url(images/butterfly.jpg)");
        $('#menu').css('background', '#2B2A2A');
    });
       
    
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
        $('#imgInp').click();    
    });
    $('#profile_modal ul li:nth-child(2)').click(function() {
        document.location.href = "about.html";    
    });
    $('#profile_modal ul li:nth-child(3)').click(function() {
        document.location.href = "services.html";    
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

            //Outside native JS functions
            
// Quote rotator
(function() {

    var quotes = $(".quote");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(700)
            .delay(4000)
            .fadeOut(700, showNextQuote);
    }

    showNextQuote();

})();

// Sample client info slider
(function() {

    var quotes = $(".client");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(700)
            .delay(5000)
            .fadeOut(700, showNextQuote);
    }

    showNextQuote();

})();

//Sample image slider
(function() {

    var quotes = $(".images");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(0)
            .delay(6000)
            .fadeOut(0, showNextQuote);
    }

    showNextQuote();

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



