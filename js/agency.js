
function donate() {
  $("#paypal-pay").click();
}




//index.js  
function sendEmail() {




  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var message = $("#message").val();

  var body =  "<i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>"+name+" <br/> <b>Email: </b>"+email+"<br /> <b>Phone: </b>"+phone+"<br /> <b>Message:</b> <br /> "+message+" <br><br> <b>~End of Message.~</b> "

  Email.send({
    SecureToken : "3fdec2ae-74a5-4ef3-8325-0547e3397bf2",
      To : 'jjosejaramillos@gmail.com',
      From : email,
      Subject : "Fofasta recibio un nuevo mensaje",
      Body : body
  }).then(
    message => alert(message)
  );
  }

(function ($) {
  $('.carousel').carousel({
    interval: 3000
  })
  //$("#cookieModal").modal('toggle');
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });





  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
