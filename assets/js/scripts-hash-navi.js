(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {
    /* JS is available, remove no-js class */
    removeClass(document.documentElement,'no-js');
    setURLandNav();
  });
  
  /* scroll event listener, call it each 250ms */  
  window.addEventListener("scroll", debounce(function(){
    /* hash navigation */
    setURLandNav();  
  },250));

  //check if hash exists
  if(window.location.hash !== ""){
    let section = document.querySelector("section"+window.location.hash);
    if(section){
      //scroll to found hash
      section.scrollIntoView();
    }
  }

  /* welcome animation */

  /* background image slider */
  
  /* hash navigation */  
  function setURLandNav(){
      let
      s = document.querySelectorAll('nav ul li a'),
      a = document.querySelectorAll('section');
      
    if(s.length>0){
      Array.prototype.forEach.call(s, function(elm, idx){ 
        removeClass(elm,'active');
      });
      
      Array.prototype.forEach.call(a, function(el, i){
        if(el.querySelector('h2')){
          if (elementInViewport(el.querySelector('h2'))) {	
            console.log(el.querySelector('h2').textContent);
            Array.prototype.forEach.call(s, function(elm, idx){ 
              if(elm.href.indexOf('#'+el.id)>-1 && Math.max(document.body.scrollTop,document.documentElement.scrollTop)>50){	
                history.pushState(null, null, "#"+el.id);	
                addClass(elm,'active');
              } else {
                removeClass(elm,'active');
              }
            });
          } 
        } else {
          if (elementInViewport(el)) {	
            Array.prototype.forEach.call(s, function(elm, idx){ 
              if(elm.href.indexOf('#'+el.id)>-1 && Math.max(document.body.scrollTop,document.documentElement.scrollTop)>50){	
                history.pushState(null, null, "#"+el.id);	
                addClass(elm,'active');
              } else {
                removeClass(elm,'active');
              }
            });
          } 
        }
      });
      if(Math.max(document.body.scrollTop,document.documentElement.scrollTop)<50){
        addClass(s[0],'active');
      }
    }	    	
  }
})();