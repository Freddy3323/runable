// call-button.js
(function(){
  // Number in international format for tel: link
  var tel = "+61468046283"; // 0468 04 6283 -> +61 468 046 283
  // Optional analytics hook: send click event if window.ga exists
  function trackClick(){
    try{ if(window.ga) window.ga('send','event','CallButton','click',tel); }catch(e){}
  }

  // When the DOM is ready, set up any behaviors
  function init(){
    var btn = document.querySelector('.call-button');
    if(!btn) return;
    btn.addEventListener('click', function(){
      trackClick();
      // On some desktop browsers tel: may not make sense; allow default behavior
    });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
