var featuredSongs=[
  {
    title:"You Stay",
    meta:"Track 01 \u2022 Still Here EP",
    href:"you-stay.html",
    desc:"An honest song about weakness, grace, and the reminder that even when we run, God still stays.",
    note:"Featured for this 3-week spotlight cycle from the Still Here EP."
  },
  {
    title:"Never Leave Me",
    meta:"Track 02 \u2022 Still Here EP",
    href:"never-leave-me.html",
    desc:"A heartfelt prayer of relief and gratitude for God's constant presence through difficult moments.",
    note:"Featured for this 3-week spotlight cycle from the Still Here EP."
  },
  {
    title:"Baba Don't Let Me Go",
    meta:"Track 03 \u2022 Still Here EP",
    href:"baba-dont-let-me-go.html",
    desc:"A heartfelt song from the Still Here EP about depending on God's guidance and presence through every season.",
    note:"From the latest EP, selected as the current spotlight track."
  },
  {
    title:"On My Mind Jesus",
    meta:"Track 04 \u2022 Still Here EP",
    href:"on-my-mind-jesus.html",
    desc:"A joyful Afrogospel song about gratitude, protection, and keeping Jesus at the center of daily life.",
    note:"Featured for this 3-week spotlight cycle from the Still Here EP."
  }
];

(function(){
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

  setText(["[data-feature-meta]",".featured-song .feature-kicker",".spotlight .spotlight-meta"],song.meta);
  setText(["[data-feature-title]",".featured-song .feature-title a",".spotlight .spotlight-title a"],song.title);
  setText(["[data-feature-desc]",".featured-song .feature-panel > p.muted",".spotlight .spotlight-panel > p.muted"],song.desc);
  setText(["[data-feature-note]",".featured-song .feature-card .muted",".spotlight .card .muted"],song.note);
  setLink(["[data-feature-title]",".featured-song .feature-title a",".spotlight .spotlight-title a"],song.href,"Featured Song Title");
  setLink(["[data-feature-primary]",".featured-song .btn-primary",".spotlight .btn-primary"],song.href,"Featured Song");
})();
