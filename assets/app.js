$(document).ready(function () {

  var menuToggle = $('.js-burger-is-open');
 
  menuToggle.click(function () {
    $('nav').toggleClass('burger-is-open');
    $('#burger-open-svg').toggleClass('change-icon');
    $('#burger-close-svg').toggleClass('change-icon');
  });

});

$(window).resize(function () {
  $('nav').removeClass('burger-is-open');
});
