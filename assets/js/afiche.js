/*AFICHE ALIMENTACION*/
var afiche=document.getElementById("af");
document.getElementById("cnt").addEventListener("click",function(event){
     if (event.target.tagName == "IMG") {
       afiche.src=event.target.src;
  }
});