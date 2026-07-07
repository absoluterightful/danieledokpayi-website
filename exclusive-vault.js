(function(){
  var vault={
    iterations:250000,
    salt:"XeBc9m9IWpNzCfoUadhklQ==",
    iv:"eDkf6agBccz9BVfJ",
    tag:"9pL3rLza6at1XI7DBmaNKg==",
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
