/*AFICHE ALIMENTACION*/
var afiche=document.getElementById("af");
document.getElementById("cnt").addEventListener("click",function(event){
     if (event.target.tagName == "IMG") {
       afiche.src=event.target.src;
  }
});

document.getElementById("sig").addEventListener("click",function(e){
  document.getElementById("resultado1").style.display="block";
});

document.getElementById("avatar").addEventListener("click",function(e){
  window.location="avatar/example/default.html";
});