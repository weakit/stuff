$(window).on('load', function(){
   $('div#overlay').fadeOut();
   setTimeout(function () {
     $('h1#spanner').addClass('spanner-a');
     $('span.left').addClass('left-a');
     $('span.right').addClass('right-a');
     $('svg.vw').addClass('vw-a');
     setTimeout(function(){
       animate();
     }, 1500);
   }, 100);
});

$.getScript("./words/adjectives.min.js", function(){});
$.getScript("./words/nouns.min.js", function(){});

function animate(){
  setTimeout(function(){
    setInterval(function(){
      var item =  adj[Math.floor(Math.random()*adj.length)] + " " + non[Math.floor(Math.random()*non.length)];
      $('h1#spanner').text(item);
    }, 3000);
  }, 2000);
}
