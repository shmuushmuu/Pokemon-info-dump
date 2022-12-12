var apiUrl= "https://pokeapi.co/api/v2/pokemon/pikachu";


fetch(apiUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '1FT5-_U5uM0',
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    // setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
};

// function searchByKeyword() {
//     var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
  
//     for(var i in results.items) {
//       var item = results.items[i];
//       Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
//     }
//   }
  
// var videoId = function() {
//   if buttonFighting("tZjH9cDoM_0");
// };

var buttonFighting = document.getElementById("fighting");

buttonFighting.addEventListener("click", function(){
  player.loadVideoById('tZjH9cDoM_0');
  ;
}); 

var buttonNormal = document.getElementById("normal");

buttonNormal.addEventListener("click", function(){
  player.loadVideoById("Coe027IsefE");
    ;
}); 

var buttonFire = document.getElementById("fire");

buttonFire.addEventListener("click", function onclick(){
   player.loadVideoById('d_0DG-b1q4E') ;
}); 

var buttonWater = document.getElementById("water");

buttonWater.addEventListener("click", function(){
   player.loadVideoById('qZqlmHoZYXk') ;
}); 

var buttonGrass = document.getElementById("grass");

buttonGrass.addEventListener("click", function(){
   player.loadVideoById('v2tKZaSDqQs') ;
}); 

var buttonElectric = document.getElementById("electric");

buttonElectric.addEventListener("click", function(){
    player.loadVideoById('75kksjRxUJU');
}); 

var buttonIce = document.getElementById("ice");

buttonIce.addEventListener("click", function(){
   player.loadVideoById('ZAasRwcG-Y0') ;
}); 

var buttonPoison = document.getElementById("poison");

buttonPoison.addEventListener("click", function(){
  player.loadVideoById('hsPH29vRQfQ');
}); 

var buttonGround = document.getElementById("ground");

buttonGround.addEventListener("click", function(){
  player.loadVideoById('CXccNw5M3p8');
});

var buttonFlying = document.getElementById("flying");

buttonFlying.addEventListener("click", function(){
  player.loadVideoById('p4qAXciQI-s');
}); 

var buttonPsychic = document.getElementById("psychic");

buttonPsychic.addEventListener("click", function(){
  player.loadVideoById('i9NqqEJUE2k');
}); 

var buttonBug = document.getElementById("bug");

buttonBug.addEventListener("click", function(){
  player.loadVideoById('HlKtbL6ei4k');
}); 

var buttonRock = document.getElementById("rock");

buttonRock.addEventListener("click", function(){
  player.loadVideoById('JUInV7VoXpQ');
}); 

var buttonGhost = document.getElementById("ghost");

buttonGhost.addEventListener("click", function(){
  player.loadVideoById('q0ghgMIAdtg');
}); 

var buttonDark = document.getElementById("dark");

buttonDark.addEventListener("click", function(){
  player.loadVideoById('9ThNmkCSwbU');
}); 

var buttonDragon = document.getElementById("dragon");

buttonDragon.addEventListener("click", function(){
  player.loadVideoById('lDqh0J_PuBk');
});

var buttonSteel = document.getElementById("steel");

buttonSteel.addEventListener("click", function(){
  player.loadVideoById('vilznMR-bn0');
}); 

var buttonFairy = document.getElementById("fairy");

buttonFairy.addEventListener("click", function(){
  player.loadVideoById('26Z2Fc91P5A');
}); 

