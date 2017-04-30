/*SLIDE SHOW*/
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var body=document.getElementsByTagName("body")[0];
  var i;
  var x = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  var colors = ["#ef6c00","#b71c1c","#283593","#388e3c"];
  var button=document.getElementById("continuar");
  if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
     }
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" slideShow", "");
       body.style.background=colors[0];
       body.style.background=colors[n-1];
       button.style.background=colors[n-2];
     }
     x[slideIndex-1].style.display = "block";  
     dots[slideIndex-1].className += " slideShow";

   }
/*Selection options*/
document.getElementById("opc-1").addEventListener("click",function(e){
	activate("opc1",e);
});

document.getElementById("opc-2").addEventListener("click",function(e){
	activate("opc2",e);
});

document.getElementById("opc-3").addEventListener("click",function(e){
	activate("opc3",e);
});

document.getElementById("opc-4").addEventListener("click",function(e){
	activate("opc4",e);
});

document.getElementById("continuar").addEventListener("click",function(e){
 window.location="level2.html";
});

 function activate(clase,event){
 	var opcion =document.getElementsByClassName(""+clase+"");
	for (var i = 0; i < opcion.length; i++) {
		opcion[i].classList.value="cnt-option "+clase;
	}
 		if (event.target.tagName == "IMG") {
		event.target.parentNode.classList.add("activated");
	}
 }

document.getElementById("play").addEventListener("click",function(e){
  document.getElementById("empieza").style.display="none";
});

/*APLICAR EFECTO OCULTAR Y MOSTRAR*/
document.getElementById("ocultar").addEventListener("click",function(e){
   
});
