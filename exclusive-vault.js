(function(){
  var vault={
    iterations:250000,
    salt:"N0eWQfMTWiRYLj7ovs0UPg==",
    iv:"Ic00l+b524bga7s+",
    tag:"byqEqOY74RZ1xXxtX5yJLg==",
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
  function unlock(html){
    mount.innerHTML=html;
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
