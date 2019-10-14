function getDeviceState() {
  return parseInt(window.getComputedStyle(document.body).getPropertyValue('z-index'), 10);
}

function debounce(func, wait, immediate) {
   var timeout;
   return function() {
       var context = this, args = arguments;
       var later = function() {
               timeout = null;
               if (!immediate) func.apply(context, args);
       };
       var callNow = immediate && !timeout;
       clearTimeout(timeout);
       timeout = setTimeout(later, wait);
       if (callNow) func.apply(context, args);
   };
}

function elementInViewport(el,threshold) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;
  var threshold = (typeof threshold === 'undefined') ? 0 : threshold; 

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < (window.pageYOffset + window.innerHeight) &&
    left < (window.pageXOffset + window.innerWidth) &&
    (top + height + threshold) > window.pageYOffset &&
    (left + width) > window.pageXOffset
  );
}

function triggerClick(el){
  if (el.click) {
    el.click();          		
  } else if (el.onclick) {
    el.onclick();
  }		
}

function addClass(el,c){
    if (el.classList)
      el.classList.add(c);
    else
      el.className += ' ' + c;
}

function removeClass(el,c){
    if (el.classList)
      el.classList.remove(c);
    else
      el.className = el.className.replace(new RegExp('(^|\\b)' + c.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function hasClass(el,c){
    if (el.classList)
        return el.classList.contains(c);
    else
        return new RegExp('(^| )' + c + '( |$)', 'gi').test(el.className);
}

function loadScript(src, callback){
  var s,
      r,
      t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function() {
    //console.log( this.readyState ); //uncomment this line to see which ready states are called.
    if ( !r && (!this.readyState || this.readyState == 'complete') )
    {
      r = true;
      callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
}