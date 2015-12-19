$(window).load(function() {
    /*
        Note: Stop page scrolling while loading.
    */
    $("#loader").delay(4000).fadeOut("slow");
    $('html, body').css({ 'overflow': 'hidden', 'height': '100%' }).delay(4000);
    setTimeout(function(){
        $('html, body').removeAttr('style');
    }, 4100);
});

$(document).mouseup(function (e) {
    function containerClose($cont){
        var container = $cont;
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $cont.css("display", "none");
            $("#fade").css("display", "none");
        }
    }
    
    containerClose($("#light"));
    containerClose($("#payment"));
});

var ready;

ready = (function() {    
    setTimeout(function(){
            $("#loader").remove();
    }, 4100);
    
  $("#owl-demo").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay : 2800
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
  });
    
    //smooth scroll to second section
    $('.cd-scroll-down').on('click', function(event){
        $('#home').removeClass('current');
        $('#acerca').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    
    //smooth scroll to about section
    $('#about').on('click', function(event){
        $('#home').removeClass('current');
        $('#acerca').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to services section
    $('#services').on('click', function(event){
        $('#home').removeClass('current');
        $('#servicios').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });
    //smooth scroll to contact us section
    $('#contact').on('click', function(event){
        $('#home').removeClass('current');
        $('#contactenos').addClass('current');
        event.preventDefault();
        smoothScroll($(this.hash));
    });

	function smoothScroll(target) {
        $('body,html').animate(
        	{'scrollTop':target.offset().top},
        	600
        );
	}
});

$(document).ready(ready);

var current;

$(function() { 
    $('body').mousewheel(function(event, delta) {
        var $current = $('div.current');
        $( "div" ).remove( "#window-resizer-tooltip" );
        console.log(delta);
        console.log($current);
                
        if (delta > 0) {
            $prev = $current.prev();
            
            if ($prev.length) {
                $('body').scrollTo($prev, 200);
                $current.removeClass('current');
                $prev.addClass('current');
            }
        } else {
            $next = $current.next();
            
            if ($next.length) {
                $('body').scrollTo($next, 200);
                $current.removeClass('current');
                $next.addClass('current');
            }
        }
                                         
        event.preventDefault();
    });
});