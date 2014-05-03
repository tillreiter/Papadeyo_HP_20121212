$(document).ready(function() {
  // $("#portfolio").find("#health");
  $('.portfolio-item').find('#health').on('mouseenter', function() {
    // var price = $('<p>From $399.99</p>');
    // $('#health').before(price);
    $('#health').remove();
  });
});


var links = {
  counter: 0,
};
var dict = [0,1,2,3,4,5,6,7,8,9,"a","b","c"];

function genLink (url) {

  links[key] = url;
  links.counter++
}
