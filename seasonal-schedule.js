(function(){
  function loadFeaturedRotation(){
    if(document.querySelector('script[data-featured-rotation]')){
      return;
    }
    var script = document.createElement('script');
    script.defer = true;
    script.src = 'featured-rotation.js?v=1';
    script.setAttribute('data-featured-rotation','');
    document.head.appendChild(script);
  }

  loadFeaturedRotation();

  var start = Date.parse('2026-12-25T00:00:00-06:00');
  var end = Date.parse('2026-12-31T00:00:00-06:00');
  var params = new URLSearchParams(window.location.search);
  var preview = params.get('christmas') === 'preview' || params.get('preview') === 'polished';
  var now = Date.now();
  var active = preview || (now >= start && now < end);

  if(!active){
    return;
  }

  document.documentElement.classList.add('christmas-active');

  function enableTheme(){
    var links = document.querySelectorAll('link[data-seasonal-theme]');
    links.forEach(function(link){
      link.media = 'all';
    });
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', enableTheme);
  }else{
    enableTheme();
  }
})();
