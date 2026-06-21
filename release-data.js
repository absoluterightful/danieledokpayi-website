var siteReleaseData={
  latestRelease:{
    title:"Still Here EP",
    type:"EP",
    releaseDate:"May 29, 2026",
    cover:"still-here-cover.jpg",
    coverAlt:"Still Here EP cover art by Daniel Edokpayi",
    description:"Still Here blends Afrogospel, Afro R&B, and AfroSoul into a warm, honest project about faith, gratitude, healing, and God's presence in difficult seasons.",
    href:"/still-here",
    streamLabel:"Stream Still Here",
    catalogLabel:"View Full Music Catalog",
    tracks:[
      {number:"01",title:"You Stay",href:"/you-stay",style:"Afro Soul / Gospel"},
      {number:"02",title:"Never Leave Me",href:"/never-leave-me",style:"Afro R&B / Gospel"},
      {number:"03",title:"Baba Don't Let Me Go",href:"/baba-dont-let-me-go",style:"Afro R&B / Gospel"},
      {number:"04",title:"On My Mind Jesus",href:"/on-my-mind-jesus",style:"Afro Gospel"}
    ]
  },
  catalog:{
    albums:[
      {
        title:"Veil Of Hope",
        cover:"veil-of-hope-cover-blurred.jpg",
        coverAlt:"Blurred Veil Of Hope album cover preview",
        description:"Album in progress. Coming Early 2027.",
        href:"/coming-soon",
        label:"Album - Locked",
        cta:"Locked",
        locked:true
      }
    ],
    eps:[
      {
        title:"Still Here",
        cover:"still-here-cover.jpg",
        coverAlt:"Still Here EP cover",
        description:"A warm Afrogospel, Afro R&B, and AfroSoul project about faith, healing, gratitude, and God's presence.",
        href:"/still-here",
        label:"EP",
        cta:"Stream Still Here"
      }
    ],
    singles:[
      {
        title:"Veil Of Hope",
        cover:"veil-of-hope-single-cover.jpg",
        coverAlt:"Veil Of Hope single cover art",
        description:"Lead single preview from the upcoming Veil Of Hope album.",
        href:"/coming-soon",
        label:"Single - Locked",
        cta:"Locked",
        locked:true
      },
      {
        title:"Carry Me Dey Go",
        cover:"carry-me-dey-go.jpg",
        coverAlt:"Carry Me Dey Go cover art",
        description:"An uplifting Afrogospel song about trusting God's guidance through every season.",
        href:"/carry-me-dey-go",
        label:"Single",
        cta:"Listen Now"
      },
      {
        title:"Dance To The Beat",
        cover:"dance-to-the-beat.jpg",
        coverAlt:"Dance To The Beat cover art",
        description:"A joyful Afro-fusion celebration of faith, praise, and gratitude.",
        href:"/dance-to-the-beat",
        label:"Single",
        cta:"Listen Now"
      }
    ]
  },
  timeline:[
    {
      date:"Apr 20, 2024",
      title:"Carry Me Dey Go",
      description:"Daniel's first single, later followed by acapella and instrumental versions in 2025.",
      type:"Single"
    },
    {
      date:"Nov 30, 2024",
      title:"Dance To The Beat",
      description:"A joyful Afro-fusion release centered on praise, faith, and gratitude.",
      type:"Single"
    },
    {
      date:"May 29, 2026",
      title:"Still Here EP",
      description:"A warm Afrogospel, Afro R&B, and AfroSoul project about faith, healing, and God's presence.",
      type:"EP"
    }
  ]
};

(function(){
  function esc(value){
    return String(value||"").replace(/[&<>"']/g,function(char){
      return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char];
    });
  }

  function clickLabel(text){
    return String(text||"").replace(/'/g,"");
  }

  function renderLatestRelease(){
    var release=siteReleaseData.latestRelease;
    var homeGrid=document.querySelector(".release .release-grid");
    var musicGrid=document.querySelector(".featured .featured-grid");
    if(!release){return;}

    var tracklist=(release.tracks||[]).map(function(track){
      return '<li><a href="'+esc(track.href)+'" onclick="trackClick(\''+clickLabel(track.title)+' - Tracklist\')"><div><span>'+esc(track.number)+'</span>'+esc(track.title)+'</div><small>'+esc(track.style)+'</small></a></li>';
    }).join("");

    if(homeGrid){
      homeGrid.innerHTML='<div><img class="cover" src="'+esc(release.cover)+'" alt="'+esc(release.coverAlt)+'" /></div><div class="card"><div class="section-title">Latest Release</div><h2>'+esc(release.title)+'</h2><p class="muted">'+esc(release.description)+'</p><ol class="tracklist">'+tracklist+'</ol><div class="buttons" style="margin-top:28px;"><a class="btn btn-primary" href="'+esc(release.href)+'" rel="noopener" onclick="trackClick(\''+clickLabel(release.streamLabel)+' - Latest Release\')">'+esc(release.streamLabel)+'</a><a class="btn btn-outline" href="/music" rel="noopener" onclick="trackClick(\'View Full Music Catalog\')">'+esc(release.catalogLabel)+'</a></div></div>';
    }

    if(musicGrid){
      musicGrid.innerHTML='<div><img class="cover" src="'+esc(release.cover)+'" alt="'+esc(release.coverAlt)+'" /></div><div class="card"><div class="section-title">Latest Release</div><h2>'+esc(release.title)+'</h2><p class="muted">'+esc(release.description)+'</p><div class="buttons"><a class="btn btn-primary" href="'+esc(release.href)+'" rel="noopener" onclick="trackClick(\''+clickLabel(release.title)+' - Music Page\')">'+esc(release.streamLabel)+'</a><a class="btn btn-outline" href="/#release">View on Home</a></div></div>';
    }
  }

  function releaseCard(item){
    var target=item.external?' target="_blank" rel="noopener"':'';
    var action=item.locked?'<span class="btn btn-locked" aria-disabled="true">'+esc(item.cta||"Locked")+'</span>':'<a class="btn btn-primary" href="'+esc(item.href)+'"'+target+' onclick="trackClick(\''+clickLabel(item.title)+' - Folder\')">'+esc(item.cta||"Listen Now")+'</a>';
    return '<article class="music-slide"><div class="card"><img class="cover" src="'+esc(item.cover)+'" alt="'+esc(item.coverAlt)+'" /><div class="folder-label" style="margin-top:22px;">'+esc(item.label)+'</div><h3>'+esc(item.title)+'</h3><p class="muted">'+esc(item.description)+'</p><div class="buttons">'+action+'</div></div></article>';
  }

  function emptyFolder(label){
    return '<div class="empty-folder"><div class="folder-label">'+esc(label)+'</div><h3 style="margin:0 0 10px;font-size:28px;">No '+esc(label.toLowerCase())+' yet</h3><p class="muted" style="margin:0;">When Daniel releases '+(label==="Albums"?"an album":"a release")+', it will live here.</p></div>';
  }

  function catalogPanel(folder,label,items,active){
    if(!items.length){
      return '<div class="catalog-panel'+(active?' active':'')+'" data-folder-panel="'+folder+'" role="tabpanel">'+emptyFolder(label)+'</div>';
    }
    return '<div class="catalog-panel'+(active?' active':'')+'" data-folder-panel="'+folder+'" role="tabpanel"><div class="catalog-shell"><button class="catalog-arrow" type="button" data-carousel-prev aria-label="Previous '+esc(label)+'">&lsaquo;</button><div class="carousel-viewport"><div class="music-carousel" aria-live="polite">'+items.map(releaseCard).join("")+'</div><div class="carousel-dots" data-carousel-dots aria-label="'+esc(label)+' carousel position"></div></div><button class="catalog-arrow" type="button" data-carousel-next aria-label="Next '+esc(label)+'">&rsaquo;</button></div></div>';
  }

  function setupCarousel(panel){
    var carousel=panel.querySelector(".music-carousel");
    if(!carousel){return;}
    var slides=Array.prototype.slice.call(carousel.querySelectorAll(".music-slide"));
    var prev=panel.querySelector("[data-carousel-prev]");
    var next=panel.querySelector("[data-carousel-next]");
    var dotsWrap=panel.querySelector("[data-carousel-dots]");
    var current=0;
    var dots=[];
    if(dotsWrap){
      dotsWrap.innerHTML="";
      dots=slides.map(function(_,index){
        var dot=document.createElement("button");
        dot.className="carousel-dot";
        dot.type="button";
        dot.setAttribute("aria-label","Show release "+(index+1));
        dot.addEventListener("click",function(){goTo(index);});
        dotsWrap.appendChild(dot);
        return dot;
      });
    }
    function update(){
      dots.forEach(function(dot,index){dot.classList.toggle("active",index===current);});
      if(prev){prev.disabled=current===0||slides.length<=1;}
      if(next){next.disabled=current===slides.length-1||slides.length<=1;}
    }
    function goTo(index){
      current=Math.max(0,Math.min(slides.length-1,index));
      if(slides[current]){
        carousel.scrollTo({left:slides[current].offsetLeft-carousel.offsetLeft,behavior:"smooth"});
      }
      update();
    }
    if(prev){prev.addEventListener("click",function(){goTo(current-1);});}
    if(next){next.addEventListener("click",function(){goTo(current+1);});}
    carousel.addEventListener("scroll",function(){
      var nearest=slides.reduce(function(best,slide,index){
        var distance=Math.abs(slide.offsetLeft-carousel.offsetLeft-carousel.scrollLeft);
        return distance<best.distance?{index:index,distance:distance}:best;
      },{index:current,distance:Infinity});
      current=nearest.index;
      update();
    },{passive:true});
    update();
  }

  function setupTabs(catalog){
    var tabs=Array.prototype.slice.call(catalog.querySelectorAll("[data-folder-tab]"));
    var panels=Array.prototype.slice.call(catalog.querySelectorAll("[data-folder-panel]"));
    function showFolder(folder){
      tabs.forEach(function(tab){
        var active=tab.getAttribute("data-folder-tab")===folder;
        tab.classList.toggle("active",active);
        tab.setAttribute("aria-selected",active?"true":"false");
      });
      panels.forEach(function(panel){
        panel.classList.toggle("active",panel.getAttribute("data-folder-panel")===folder);
      });
    }
    panels.forEach(setupCarousel);
    tabs.forEach(function(tab){tab.addEventListener("click",function(){showFolder(tab.getAttribute("data-folder-tab"));});});
    showFolder("eps");
  }

  function renderCatalog(){
    var catalog=document.querySelector(".catalog");
    if(!catalog || !siteReleaseData.catalog){return;}
    var data=siteReleaseData.catalog;
    catalog.innerHTML='<div class="catalog-head"><div class="section-title">Music Catalog</div><h2>Browse By Folder</h2><p class="muted" style="max-width:720px;margin:0 auto;">Albums, EPs, and singles stay organized as the catalog grows.</p><div class="catalog-tabs" role="tablist" aria-label="Music folders"><button class="catalog-tab" type="button" data-folder-tab="albums" role="tab">Albums</button><button class="catalog-tab active" type="button" data-folder-tab="eps" role="tab">EPs</button><button class="catalog-tab" type="button" data-folder-tab="singles" role="tab">Singles</button></div></div>'+catalogPanel("albums","Albums",data.albums||[],false)+catalogPanel("eps","EPs",data.eps||[],true)+catalogPanel("singles","Singles",data.singles||[],false);
    setupTabs(catalog);
  }

  function renderTimeline(){
    var list=document.querySelector(".timeline-list");
    if(!list || !siteReleaseData.timeline){return;}
    list.innerHTML=siteReleaseData.timeline.map(function(item){
      return '<article class="timeline-item"><div class="timeline-date">'+esc(item.date)+'</div><div><h3>'+esc(item.title)+'</h3><p class="muted">'+esc(item.description)+'</p><span class="timeline-tag">'+esc(item.type)+'</span></div></article>';
    }).join("");
  }

  renderLatestRelease();
  renderCatalog();
  renderTimeline();
})();
