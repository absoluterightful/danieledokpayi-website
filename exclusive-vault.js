(function(){
  var vault={
    iterations:250000,
    salt:"41GRefkvIeRzI9p4PHYkkw==",
    iv:"btAOgE4pJCmF/TDg",
    tag:"t0qimqmCgnt9uJYoKx+Gdw==",
    data:"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"
  };
  var form=document.getElementById("exclusive-form");
  var status=document.getElementById("login-status");
  var mount=document.getElementById("exclusive-vault");
  var encoder=new TextEncoder();
  var decoder=new TextDecoder();

  function bytesFromBase64(value){
    var raw=window.atob(value);
    var bytes=new Uint8Array(raw.length);
    for(var i=0;i<raw.length;i++){bytes[i]=raw.charCodeAt(i);}
    return bytes;
  }
  async function decryptVault(username,password){
    var baseKey=await crypto.subtle.importKey("raw",encoder.encode(username+":"+password),{name:"PBKDF2"},false,["deriveKey"]);
    var key=await crypto.subtle.deriveKey({name:"PBKDF2",salt:bytesFromBase64(vault.salt),iterations:vault.iterations,hash:"SHA-256"},baseKey,{name:"AES-GCM",length:256},false,["decrypt"]);
    var encrypted=bytesFromBase64(vault.data);
    var tag=bytesFromBase64(vault.tag);
    var sealed=new Uint8Array(encrypted.length+tag.length);
    sealed.set(encrypted);
    sealed.set(tag,encrypted.length);
    var plain=await crypto.subtle.decrypt({name:"AES-GCM",iv:bytesFromBase64(vault.iv),tagLength:128},key,sealed);
    return decoder.decode(plain);
  }
  function setupVaultTabs(){
    var tabs=Array.prototype.slice.call(document.querySelectorAll("[data-vault-tab]"));
    var panels=Array.prototype.slice.call(document.querySelectorAll("[data-vault-panel]"));
    function show(category){
      tabs.forEach(function(tab){
        var active=tab.getAttribute("data-vault-tab")===category;
        tab.classList.toggle("active",active);
        tab.setAttribute("aria-selected",active?"true":"false");
      });
      panels.forEach(function(panel){
        panel.classList.toggle("active",panel.getAttribute("data-vault-panel")===category);
      });
    }
    tabs.forEach(function(tab){tab.addEventListener("click",function(){show(tab.getAttribute("data-vault-tab"));});});
  }
  function unlock(html){
    mount.innerHTML=html;
    setupVaultTabs();
    document.body.classList.add("unlocked");
    status.className="status ok";
    status.textContent="Correct. Opening exclusive page...";
    window.setTimeout(function(){
      var content=document.getElementById("exclusive-content");
      if(content){content.scrollIntoView({behavior:"smooth",block:"start"});}
    },650);
  }
  form.addEventListener("submit",async function(event){
    event.preventDefault();
    status.className="status";
    status.textContent="Checking...";
    try{
      var username=document.getElementById("username").value.trim();
      var password=document.getElementById("password").value;
      unlock(await decryptVault(username,password));
    }catch(error){
      mount.innerHTML="";
      document.body.classList.remove("unlocked");
      status.className="status error";
      status.textContent="Password or username is wrong.";
    }
  });
})();
