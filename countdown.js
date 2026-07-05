(function(){
  var target = new Date("2026-07-31T00:00:00-04:00").getTime();
  var units = [
    ["days", 86400000],
    ["hours", 3600000],
    ["minutes", 60000],
    ["seconds", 1000]
  ];

  function pad(value){
    return String(value).padStart(2, "0");
  }

  function updateCountdown(root){
    var remaining = Math.max(0, target - Date.now());
    units.forEach(function(unit){
      var value = Math.floor(remaining / unit[1]);
      remaining -= value * unit[1];
      var el = root.querySelector('[data-countdown-unit="' + unit[0] + '"]');
      if(el){ el.textContent = unit[0] === "days" ? String(value) : pad(value); }
    });
    if(target <= Date.now()){
      root.classList.add("is-released");
      var status = root.querySelector("[data-countdown-status]");
      if(status){ status.textContent = "Assurance is out now."; }
    }
  }

  function init(){
    var countdowns = Array.prototype.slice.call(document.querySelectorAll("[data-countdown]"));
    if(!countdowns.length){ return; }
    function tick(){ countdowns.forEach(updateCountdown); }
    tick();
    setInterval(tick, 1000);
  }

  if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", init);
  }else{
    init();
  }
})();
