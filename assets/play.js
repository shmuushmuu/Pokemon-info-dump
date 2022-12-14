
const infoDiv = document.getElementById("info");
var searchBtn = document.querySelector('#search-button');
var pokemonInput = document.querySelector('#pokemon');

function fetchResults(pokemon) {
  var pokeUrl = "https://pokeapi.co/api/v2/pokemon/" + pokemon;

  fetch(pokeUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data); 
      console.log(data.name);
      console.log(data.types[0].type.name);
      console.log(data.id);
      displayPokemon(data);
    })
    .catch(function (error) {
      console.log(error);
    });
    

  }

  var buttonClickHandler = function (event) {
    var newSearch = event.target.getAttribute('search');
    infoDiv.textContent = '';
  
    if (newSearch) {
      displayPokemon(data);
  
    }
  };

  function displayPokemon(data) {
    const pokeName = data.name;
    const id = data.id;
    const type = data.types[0].type.name;
    const infoDiv = document.getElementById("info"); 
    
    
    //creates which pokemon
    var heading = document.createElement("h1");
    heading.innerHTML = pokeName;
    infoDiv.appendChild(heading);
    //creates type of pokemon
    var pokeType = document.createElement('h2');
    pokeType.innerHTML = type + " type";
    infoDiv.appendChild(pokeType);
    //creates id number
    var pokeId = document.createElement('h2');
    pokeId.innerHTML = "Number " + id;
    infoDiv.appendChild(pokeId);
  }



var handleSearch = function (event) {
  event.preventDefault();
  var pokemon = pokemonInput.value.trim();
  fetchResults(pokemon);
}


searchBtn.addEventListener('click', handleSearch);

  

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
    videoId: 'VxYHPYjgFfU',
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
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
};


var buttonFighting = document.getElementById("fighting");

buttonFighting.addEventListener("click", function () {
  player.loadVideoById('tZjH9cDoM_0');
  ;
});

var buttonNormal = document.getElementById("normal");

buttonNormal.addEventListener("click", function () {
  player.loadVideoById("Coe027IsefE");
  ;
});

var buttonFire = document.getElementById("fire");

buttonFire.addEventListener("click", function onclick() {
  player.loadVideoById('d_0DG-b1q4E');
});

var buttonWater = document.getElementById("water");

buttonWater.addEventListener("click", function () {
  player.loadVideoById('qZqlmHoZYXk');
});

var buttonGrass = document.getElementById("grass");

buttonGrass.addEventListener("click", function () {
  player.loadVideoById('v2tKZaSDqQs');
});

var buttonElectric = document.getElementById("electric");

buttonElectric.addEventListener("click", function () {
  player.loadVideoById('75kksjRxUJU');
});

var buttonIce = document.getElementById("ice");

buttonIce.addEventListener("click", function () {
  player.loadVideoById('ZAasRwcG-Y0');
});

var buttonPoison = document.getElementById("poison");

buttonPoison.addEventListener("click", function () {
  player.loadVideoById('hsPH29vRQfQ');
});

var buttonGround = document.getElementById("ground");

buttonGround.addEventListener("click", function () {
  player.loadVideoById('CXccNw5M3p8');
});

var buttonFlying = document.getElementById("flying");

buttonFlying.addEventListener("click", function () {
  player.loadVideoById('p4qAXciQI-s');
});

var buttonPsychic = document.getElementById("psychic");

buttonPsychic.addEventListener("click", function () {
  player.loadVideoById('i9NqqEJUE2k');
});

var buttonBug = document.getElementById("bug");

buttonBug.addEventListener("click", function () {
  player.loadVideoById('HlKtbL6ei4k');
});

var buttonRock = document.getElementById("rock");

buttonRock.addEventListener("click", function () {
  player.loadVideoById('JUInV7VoXpQ');
});

var buttonGhost = document.getElementById("ghost");

buttonGhost.addEventListener("click", function () {
  player.loadVideoById('q0ghgMIAdtg');
});

var buttonDark = document.getElementById("dark");

buttonDark.addEventListener("click", function () {
  player.loadVideoById('9ThNmkCSwbU');
});

var buttonDragon = document.getElementById("dragon");

buttonDragon.addEventListener("click", function () {
  player.loadVideoById('lDqh0J_PuBk');
});

var buttonSteel = document.getElementById("steel");

buttonSteel.addEventListener("click", function () {
  player.loadVideoById('vilznMR-bn0');
});

var buttonFairy = document.getElementById("fairy");

buttonFairy.addEventListener("click", function () {
  player.loadVideoById('26Z2Fc91P5A');
});
