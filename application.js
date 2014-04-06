$(document).ready(function() {
  // $("#portfolio").find("#health");
  $('.portfolio-item').find('#health').on('mouseenter', function() {
    // var price = $('<p>From $399.99</p>');
    // $('#health').before(price);
    $('#health').remove();
  });
});
