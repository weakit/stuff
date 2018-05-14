setTimeout(function () {
  $(".lds-ring").removeClass('zero')
}, 100);
$(document).ready(function () {
    // naive code ahead
    $("svg.vw").addClass('vw-a');
    $(".left").addClass('left-a');
    $(".right").addClass('right-a');
    $(".stuff").addClass('stuff-a');
    $(".a1").addClass('a1-a');
    $(".a2").addClass('a2-a');
    $(".a3").addClass('a3-a');
    $(".a4").addClass('a4-a');
    $(".a5").addClass('a5-a');
    $(".a6").addClass('a6-a');
    $(".a7").addClass('a7-a');
    $(".ap").addClass('ap-a');
    $(".al1").addClass('al1-a');
    $(".al2").addClass('al2-a');
    $(".al3").addClass('al3-a');
    $(".al4").addClass('al4-a');
    $(".al5").addClass('al5-a');
    $(".al6").addClass('al6-a');
    $(".al7").addClass('al7-a');
    $(".alp").addClass('alp-a');
    $("#click").addClass('click-a')
    $('div#overlay').animate({
      'width': '0px'
    }, 300, function() {
      $('div#overlay').remove();
    });
    // $('div#overlay').fadeOut();
});
