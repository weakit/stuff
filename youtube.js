// naive code

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var done1 = false;

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: 'dQw4w9WgXcQ',
    playerVars: {
      'autoplay': 1,
      'controls': 0,
      'rel': 0,
      'fs': 0,
      'iv_load_policy': 3,
      'showinfo': 0,
      'loop': 1,
      'disablekb': 1,
      'playsinline': 1,
      'playlist': 'dQw4w9WgXcQ',
      // 'modestbranding': 1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  player.mute();
  player.playVideo();
  setTimeout(function(){
    if (Cookies.get('mute') == 'no') {
      player.unMute(); done1 = true;
    }
  }, 1);
  if(player.isMuted()){
    done1 = false;
  }
  setTimeout(function(){
    $("div#feet").fadeTo(200, 0.45);
  }, 1100);
  setTimeout(function(){
    $("p#hack").fadeTo(100, 1);
    setTimeout(function(){
      if (done1){
        setTimeout(unmuted, 50);
        setTimeout(takecare, 2000);
      } else {
        $("p#click").css('cursor', 'pointer');
        $("p#click").fadeTo(100, 1); setTimeout(muted, 2200);
      }
    }, 30);
  }, 2100);
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PAUSED) {
    dontstop();
  }
}

function unmuted(){
  $("div#unmute").fadeTo(60, 0);
  $("div#unmute").css('visibility', 'hidden');
  $("div#mute").css('visibility', 'visible');
  $("div#mute").fadeTo(60, 1);
}

function muted(){
  $("div#mute").fadeTo(100, 0);
  $("div#mute").css('visibility', 'hidden');
  $("div#unmute").css('visibility', 'visible');
  $("div#unmute").fadeTo(100, 1);
}

function takecare() {
  done1 = true; $("p#click").css('cursor', 'default');
  $("p#click").fadeTo(100, 0);
  $("p#click").text('enjoy');
  $("p#click").fadeTo(100, 1);
  setTimeout(function() {
    $("p#click").fadeTo(100, 0);
    $("p#click").css('visibility', 'hidden');
  }, 1000);
}

function dontstop(){
  if (!done1){
    takecare();
  }
  if(Cookies.get('mute')){
    if (Cookies.get('mute') == 'no') {
      Cookies.set('mute', 'yes', {'expires': 7});
      player.mute(); muted();
      player.playVideo();
    }
    else if (Cookies.get('mute') == 'yes') {
      Cookies.set('mute', 'no', {'expires': 14});
      player.unMute(); unmuted();
      player.playVideo();
    }
  } else {
    player.unMute();
    player.playVideo(); unmuted();
    Cookies.set('mute', 'no', {'expires': 14});
    takecare();
  }
}

$(document).on('click', '#click', dontstop);
$(document).on('click', '.icon', dontstop);
