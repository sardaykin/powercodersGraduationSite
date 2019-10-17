(function() {
  "use strict";

  let messages = [
    "Willkommen",
    "خوش آمدید",
    "Bixêrhatin",
    "So dhawaaw",
    "أهلاً بكم",
    "HOŞGELDİNİZ",
    "Bienvenue",
    "እንቋዕ ብድሓን መጻእኩም",
    "خوش کلیبسیز",
    "Ashamaa",
    "བཀྲ་ཤིས་བདེ་ལེགས།",
    "Bem-vindo",
    "မင်္ဂလာပါ",
    "ΚΑΛΩΣ ΗΡΘΑΤΕ",
    "Bienvenidos",
    "khush kelibsiz"
  ];

  let msgContainer = document.querySelector("header h3");
  var counter = 0;
  setInterval(animateMsg, 1500);

  function animateMsg() {
    msgContainer.innerHTML = messages[counter];
    counter++;
    if (counter >= messages.length) {
      counter = 0;
    }
  }
  /*
  window.addEventListener("load",function(){
    animateMsg(counter);
  });
  function animateMsg(){
    if(counter<messages.length){
      counter++;
    } else {
      counter = 0;
    }
    msgContainer.innerHTML = messages[counter];
    setTimeout(animateMsg, 1500);
  }*/

  /* check if section is in viewport and then change the url in the address bar */
  let sections = document.querySelectorAll("section");
  sections.forEach(function(el){
    if(elementInViewport(el,0)){
      let url = "#"+el.id;
      history.pushState('','',url);
    }
  });

})();

var map;
function initMap(){
  var styledMapType = new google.maps.StyledMapType([
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#6262ff"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ],{
    name: 'myMap'
  });
  
  map = new google.maps.Map(document.getElementById("map"),{
    center: {lat: 47.3739089, lng: 8.534445},
    zoom: 14,    
    mapTypeControl: false,
    zoomControl: false,
    streetViewControl: false,
    fullscreenControl: false
  });

  var marker = new google.maps.Marker({
    position: {lat: 47.3739089, lng: 8.534445},
    map: map
  });

  map.mapTypes.set("my_styled_map",styledMapType);
  map.setMapTypeId("my_styled_map");
}

var form = document.querySelector("form"),
    xhr = new XMLHttpRequest(),
    url = "https://script.google.com/macros/s/AKfycbxM3EIF1R7CX5BG4WIadKlEeclUByFgCzkk-YG40MnD3EsdTnYO/exec";

var params = [].filter.call(form.elements, function (el) {
    return (el.type != 'checkbox' && el.type != 'radio') || el.checked;
  }).filter(function(el) { return !!el.name; }) //Nameless elements die.
  .filter(function(el) { return !el.disabled; }) //Disabled elements die.
  .map(function(el) {
    return encodeURIComponent(el.name) + '=' + encodeURIComponent(el.value);
  }).join('&');	

console.log(params);

xhr.open("GET", url, true);
xhr.setRequestHeader("Content-type", "application/json");

xhr.onreadystatechange = function() {//Call a function when the state changes.
  if(xhr.readyState === 4 && xhr.status === 200) { //submission in order 

  }
}
xhr.send(params);