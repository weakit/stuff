$(document).on('load', function(){
   $('div#overlay').fadeOut();
   setTimeout(function () {
     $('h1#spanner').addClass('spanner-a')
     $('span.left').addClass('left-a')
     $('span.right').addClass('right-a')
     $('svg.vw').addClass('vw-a')
     animate()
   }, 100);
});

texts = Array("Bored yet?", "stars", "snakes", "humans", "robots", "donuts",
"basketballs", "boredom", "ioses", 'irises', 'clouds', 'amazon', 'chairs',
'really—long—word', '水', '火災', '空気', '地球', '翻訳者', 'pasta', 'tears', ' ', 'points',
'roads', 'lights', 'language', 'chicken', 'pockets', 'interwebs',
'wires', 'silicon', 'illuminatis', 'words', 'holes', 'mirrors', 'numbers',
'x² + y', 'earth', "'quotes'", 'pillows', 'mice', 'streetlights', 'physics',
'…', 'ctrl-z', 'guns', 'math', 'cubes', 'spheres', 'cylinders',
'birds', 'computers', 'spoons', 'plastic', 'books', 'pink', 'husks',
'n', 'switches', 'buttons', 'text', 'intellegence', 'plugs', 'purples', 'mecury',
'pie', 'questions', 'answers', 'cash', 'weed', 'superstition', 'pain', 'darkness',
'sleep', 'hope', 'focus', 'greed', 'hate', 'youth', 'minds', 'misery', 'numbers',
'april 11, 1954', 'cities', 'rocks', 'eyes', 'triangles', 'pyramids', 'woke', 'planes',
'toothpaste', 'news', 'shoes', 'doormats', 'chicken', 'chocolate', 'chilli',
'why the fuk are you alive, ugh im sure u mom gay and no u, yeah you, i bet you cant even read this coz even i cant so you defiinetly cant (microagression)',
'medicine', 'blood', 'famous', 'phones', 'feels', 'yeah', 'walk', 'talk', 'miles',
'gangs', 'chains', 'salsa', 'minus', 'game', 'plus', 'zones', 'croft', 'clothes', 'swim',
'run', 'thirst', 'inches', 'diamonds', 'bin laden', 'chopsticks', 'gossip', 'china',
'japan', 'español', 'broke', 'old', 'cold', 'time', 'murder', 'north korea',
'outside', 'okay', 'push', 'pull', 'salt', 'violins', 'laptops', 'graphics',
'sick', 'nevermind', 'sense', 'zelda', 'friends', 'hands', '42', 'beats',
'creases', 'streets', 'lo-los', 'dips', 'platinum', 'iron', 'silver', 'gold',
'wrecks', 'traffic', 'vibes', 'necks', 'eyeballs', 'hoods', 'b', 'paranoid',
'drivers', 'doubt', 'chrysalism', 'octopi', 'skates', 'shrek', 'google_G',
'aerostats', 'talks', 'yegg', 'xenoglossia', 'zeus', 'gulosity', 'ocarinas',
'horses', 'dogs', 'talia', '渚', 'fantigue', 'circles', 'boards', 'skateboards',
'ninjas', 'wine', 'lipstick', 'funds', 'tongues', 'chronic', 'compression', 'waves',
'esparanto', 'català', '华语', 'dansk', 'suomi', 'polski', 'earth', 'sol',
'luna', 'venus', 'mars', 'jupiter', 'saturn', 'neptune', 'uranus', 'pluto', 'aurorae',
'pudding', 'ice', 'genius', 'crazy', 'help', 'names', 'vision', 'clannad', 'decay',
'loneliness', 'hunger', 'amy', ' ', 'ducks', 'werewolves', 'vampires', 'cerberus',
'athena', 'vigil', 'chaos', 'gaia', 'eros', 'uranus', 'ares', 'pans', 'Τροία', 'λ', // hope
'artemis', 'hades', 'nyx', 'medea', 'lows', 'highs', 'up', 'down', 'left', 'right',
'wyverns', 'dragons', 'history', 'z', 'mouths', 'soon', 'minus', 'plus', 'equals',
'states', 'ganon', 'staples', 'life', 'years', "'fun'", 'work', 'thoughts', 'fights',
'alright', 'black', 'white', 'blue', 'red', 'purple', 'green', 'brown', 'orange',
'wow', 'wait', 'frames', 'andromeda', 'waste', 'animate', '2') // words are hard af

function animate(){
  setTimeout(function(){
    setInterval(function(){
      var item = texts[Math.floor(Math.random()*texts.length)];
      $("h1#spanner").text(item);
    }, 3000);
  }, 2000);
}
