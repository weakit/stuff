var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

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
      'modestbranding': 1,
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}
function onPlayerReady(event) {
  event.target.playVideo();
  setTimeout(function(){
    try {$("p#hack").fadeTo(400, 100)}
    catch(err) {console.log(err);}
    if (player.getPlayerState() == -1) {
      player.mute()
      player.playVideo()
    }
    setTimeout(function(){
      if (player.getPlayerState() == -1) {
        $("p#click").fadeTo(300, 100)
      }
    })
  }, 2000)
}
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    if(player.isMuted()){
      $("p#click").fadeTo(300, 100)
    }
  }
  if (event.data == YT.PlayerState.PAUSED) {
    player.unMute()
    player.playVideo()
    $("p#click").fadeTo(200, 0)
    $("p#click").text('enjoy')
    $("p#click").fadeTo(200, 1000)
    setTimeout(function() {$("p#click").fadeTo(800, 0)}, 1500)
  }
}

$(document).on('click', '#content', function(){
  player.unMute()
  player.playVideo()
  $("p#click").fadeTo(200, 0)
  $("p#click").text('enjoy')
  $("p#click").fadeTo(200, 1000)
  setTimeout(function() {$("p#click").fadeTo(800, 0)}, 1500)
})
