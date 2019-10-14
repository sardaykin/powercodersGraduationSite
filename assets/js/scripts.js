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