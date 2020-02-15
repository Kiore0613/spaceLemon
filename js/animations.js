$(document).ready(function() {
  // Scroll Elementos Menu
  var home = $("#home").offset().top,
    aboutUs = $("#about-us").offset().top,
    contactUs = $("#contact-us").offset().top;

  // Boton Home
  $("#btn-home").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 380
      },
      500
    );
  });

  $("#btn-about-us").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: aboutUs - 40
    });
  });

  $("#btn-contact-us").on("click", function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: contactUs - 40
    });
  });
});
