
 function donate(){
  $("#paypal-pay").click();
}


//index.js  
function sendEmail() {

  var name = $("#name").val();
  var email = $("#email").val();
  var phone=$("#phone").val()
  var message=$("#message").val();

  const eeClient = require('elasticemail-webapiclient').client;

const options = {
    apiKey: '02FBD36CEDB72225CCCD7D854C0BD286C9364C902B3A14E28AE5988CFA70BB2565898CF02C16EC9FA73C5A295F87F3F3',
    apiUri: 'https://api.elasticemail.com/',
    apiVersion: 'v2'
}

const EE = new eeClient(options);

// Load account data
EE.Account.Load().then(function(resp) {
    console.log(resp);
});

const emailParams = {
    "subject":'Nuevo contacto en Fofasta',
    "to": 'fasteano@fasta.es',
    "from": 'jjosejaramillos@gmail.com',
    "replyTo": 'fofasta@fasta.org',
    "body": name + ' ' + email+ ' '+phone+' '+message ,
    "fromName": 'FoFasta',
    "bodyType": 'Plain'
};

// Send email
EE.Email.Send(emailParams).Then(
  message => alert("mail Sent")
)
.catch((err) => {
    throw new Error(err);
});

//   jQuery.post("https://api.elasticemail.com/v2/contact/add", {
//     email: $("#email").val(),
//     publicAccountId: "fofastaSmtp",
//     listName: "Jose"
// }, function () { }, "json").done(function (result) {
//     if (result.success == true) {
//         onSuccess();
//     }
// }).fail(function () {
//     // Do something here if it fails...
// });

//   var message = $("#name").val()+"  "+$("#email").val()+"  "+$("#phone").val()+" "+$("#message").val();
//   Email.send("fasteano@fasta.es", 
// "fasteano@fasta.es",           
// "subject of mail",              
// "message",                
// "smtp.elasticemail.com",                 
// "jjosejaramillos@gmail.com",         
// "274B9B3A7F892B2198FDA4569DEE6C38F3BA").then(
//   message => alert("mail sent successfully")
// );   

// 	Email.send({
// 	Host: "smtp.elasticemail.com",
// 	Username : "jjosejaramillos@gmail.com",
//   Password : "274B9B3A7F892B2198FDA4569DEE6C38F3BA",
//   Port:"2525",
// 	To : 'fasteano@fasta.es',
// 	From : "fasteano@fasta.es",
// 	Subject : "Nuevo mensaje en Fofasta",
// 	Body : message,
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
}


(function($) {
  $('.carousel').carousel({
    interval: 3000
  })
  //$("#cookieModal").modal('toggle');
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
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
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
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
