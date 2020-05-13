$(window).on('load', function(){
   $('div#overlay').fadeOut();
   setTimeout(function () {
     $('h1#spanner').addClass('spanner-a');
     $('h1#spannor').addClass('spanner-a');
     $('span.left').addClass('left-a');
     $('span.right').addClass('right-a');
     $('svg.vw').addClass('vw-a');
     setTimeout(function(){
       animate();
     }, 1500);
   }, 100);
});

$.getScript("./words/adjectives.js", function(){});
$.getScript("./words/nouns.js", function(){});

function animate(){
  setTimeout(function(){
    $('h1#spanner').fadeTo(0, 0.85);
    $('h1#spanner').removeClass('spanner-a');
    setInterval(function(){
      $('h1#spanner').fadeTo(75, 0.5);
      setTimeout(function(){
        var item =  adj[Math.floor(Math.random()*adj.length)] + " " + non[Math.floor(Math.random()*non.length)];
        $('h1#spanner').text(item);
        $('h1#spanner').fadeTo(75, 0.85);
      }, 75);
    }, 3269);
  }, 2000);
}
