function _calculateAge(birthday) {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

var d = new Date('09-09-2003');
age = _calculateAge(d).toString();

var full = "";

if (age < 17) {
  full = "only " + age.toString();
}
else{
  full = age;
}

if (full == "NaN"){
  full = "an actual living person";
}

console.log(full);

$("#age").text(full);

var dark = false;

function darkness(){
  $('link[href="https://cdn.rawgit.com/weakit/stuff/f46e0dbd/about/alight.css"]').attr('href','https://cdn.rawgit.com/weakit/stuff/f46e0dbd/about/adark.css');
}

function light(){
  $('link[href="https://cdn.rawgit.com/weakit/stuff/f46e0dbd/about/adark.css"]').attr('href','https://cdn.rawgit.com/weakit/stuff/f46e0dbd/about/alight.css');
}

$('div#click').click(function (){
  if (!dark){
    darkness()
    dark = true;
  }
  else {
    light()
    dark = false
  }
});

function awkward(){
  $('body').addClass('awk1');
  $('html').addClass('awk1');
  $("#rosh").addClass('awk2');
  $("#rosh").text("if it's awkward stuff, please try to be as not awkward as possible, otherwise it'll get really awkward and then i not feel like talking to you, and… and, crap this is really awkward. ");
}

function un_awkward() {
  $('#rosh').removeClass('awk2');
  $("#rosh").text("Rosh's stuff");
  $('body').removeClass('awk1');
  $('html').removeClass('awk1');
}

$('.awkward').mousedown(function() {
  awkward();
});


$('.awkward').mouseup(function() {
  un_awkward();
});

$('.awkward').mouseout(function() {
  un_awkward();
});

var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

function hasTouch() {
    return 'ontouchstart' in document.documentElement
           || navigator.maxTouchPoints > 0
           || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()){
  $("h1.stuff").removeClass('hover');
}
