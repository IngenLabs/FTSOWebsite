




/* banner */
$('.banner').css({'height': (($(window).height()))+'px'});
 
 $(window).on('resize', function(){
  $('.banner').css({'height': (($(window).height()))+'px'});
 });

 
/* smooth scroll */
 $(document).ready(function(){
    //scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav").style.fontSize = "30px";
  } else {
    document.getElementById("nav").style.fontSize = "90px";
  }
}