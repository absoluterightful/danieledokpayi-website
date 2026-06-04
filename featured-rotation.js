var featuredSongs=[
  {
    title:"You Stay",
    meta:"Track 01 \u2022 Still Here EP",
    href:"you-stay.html",
    spotify:"5saMfAAxYSPvXBq39zpa5p",
    desc:"An honest song about weakness, grace, and the reminder that even when we run, God still stays.",
    note:"Featured for this 3-week spotlight cycle from the Still Here EP."
  },
  {
    title:"Never Leave Me",
    meta:"Track 02 \u2022 Still Here EP",
    href:"never-leave-me.html",
    spotify:"6MPbVyKBbMaiuzldaWiJzB",
    desc:"A heartfelt prayer of relief and gratitude for God's constant presence through difficult moments.",
    note:"Featured for this 3-week spotlight cycle from the Still Here EP."
  },
  {
    title:"Baba Don't Let Me Go",
    meta:"Track 03 \u2022 Still Here EP",
    href:"baba-dont-let-me-go.html",
    spotify:"49Kg61O80JvcwyG6Mg3oXO",
    desc:"A heartfelt song from the Still Here EP about depending on God's guidance and presence through every season.",
    note:"From the latest EP, selected as the current spotlight track."
  },
  {
    title:"On My Mind Jesus",
    meta:"Track 04 \u2022 Still Here EP",
    href:"on-my-mind-jesus.html",
    spotify:"552IJIwN4XvklG1O8T0Odg",
    desc:"A joyful Afrogospel song about gratitude, protection, and keeping Jesus at the center of daily life.",
    note:"Featured for this 3-week spotlight cycle from the Still Here EP."
  }
];

(function(){
  if(window.__featuredRotationReady){
    return;
  }
  window.__featuredRotationReady=true;

  var cycleStart=new Date("2026-06-03T00:00:00-05:00").getTime();
  var threeWeeks=21*24*60*60*1000;
  var featuredStartIndex=2;
  var index=(featuredStartIndex+Math.floor((Date.now()-cycleStart)/threeWeeks))%featuredSongs.length;
  if(index<0){index=0;}
  var song=featuredSongs[index];

  function first(selectors){
    for(var i=0;i<selectors.length;i++){
      var element=document.querySelector(selectors[i]);
      if(element){return element;}
    }
    return null;
  }

  function setText(selectors,text){
    var element=first(selectors);
    if(element){element.textContent=text;}
  }

  function setLink(selectors,href,label){
    var element=first(selectors);
    if(element){
      element.href=href;
      element.setAttribute("onclick","trackClick('"+label+" - "+song.title.replace(/'/g,"")+"')");
    }
  }

  function ensureStyles(){
    if(document.getElementById("featured-spotify-style")){
      return;
    }
    var style=document.createElement("style");
    style.id="featured-spotify-style";
    style.textContent=".featured-spotify{margin-top:22px;padding:10px;border:1px solid rgba(229,170,103,.24);border-radius:18px;background:linear-gradient(135deg,rgba(217,108,59,.12),rgba(255,255,255,.035));box-shadow:0 18px 42px rgba(0,0,0,.22);overflow:hidden}.featured-spotify iframe{display:block;width:100%;height:80px;border:0;border-radius:12px;background:#120805}";
    document.head.appendChild(style);
  }

  function setSpotifyPreview(){
    var desc=first(["[data-feature-desc]",".featured-song .feature-panel > p.muted",".spotlight .spotlight-panel > p.muted"]);
    if(!desc || !song.spotify){
      return;
    }
    ensureStyles();
    var panel=desc.parentNode;
    var preview=panel.querySelector(".featured-spotify");
    if(!preview){
      preview=document.createElement("div");
      preview.className="featured-spotify";
      desc.insertAdjacentElement("afterend",preview);
    }
    preview.innerHTML='<iframe title="Spotify preview for '+song.title.replace(/"/g,"")+'" src="https://open.spotify.com/embed/track/'+song.spotify+'?utm_source=generator&theme=0" loading="lazy" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>';
  }

  setText(["[data-feature-meta]",".featured-song .feature-kicker",".spotlight .spotlight-meta"],song.meta);
  setText(["[data-feature-title]",".featured-song .feature-title a",".spotlight .spotlight-title a"],song.title);
  setText(["[data-feature-desc]",".featured-song .feature-panel > p.muted",".spotlight .spotlight-panel > p.muted"],song.desc);
  setText(["[data-feature-note]",".featured-song .feature-card .muted",".spotlight .card .muted"],song.note);
  setLink(["[data-feature-title]",".featured-song .feature-title a",".spotlight .spotlight-title a"],song.href,"Featured Song Title");
  setLink(["[data-feature-primary]",".featured-song .btn-primary",".spotlight .btn-primary"],song.href,"Featured Song");
  setSpotifyPreview();
})();
