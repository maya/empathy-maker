(function() {

  var support = { animations : Modernizr.cssanimations },
    animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
    animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
    onEndAnimation = function( el, callback ) {
      var onEndCallbackFn = function( ev ) {
        if( support.animations ) {
          if(ev.target != this) return;
          this.removeEventListener( animEndEventName, onEndCallbackFn);
        }
        if(callback && typeof callback === 'function') {callback.call();}
      };
      if( support.animations ) {
        el.addEventListener(animEndEventName, onEndCallbackFn);
      }
      else {
        onEndCallbackFn();
      }
    };

  var yuda = new Stack(document.getElementById('stack_yuda'));

  // controls the click ring effect on the button
  var buttonClickCallback = function(bttn) {
    var bttn = bttn || this;
    bttn.setAttribute('data-state', 'unlocked');
  };

  document.querySelector('.button--accept[data-stack = stack_yuda]').addEventListener(clickeventtype, function() { yuda.accept(buttonClickCallback.bind(this)); });
})();