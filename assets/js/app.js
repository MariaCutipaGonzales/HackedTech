/*Signin*/
document.getElementById("empezar").addEventListener("click",function(e){
	var name=document.getElementById("name");
	var lastname=document.getElementById("lastname");
	if (name.value.length >0 && lastname.value.length> 0) {
		window.location="acceso.html";
	}else{
		name.focus();
	}
});
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
  var i;
  var x = document.getElementsByClassName("slide");
  if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
      for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
     }
     x[slideIndex-1].style.display = "block";  
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

 function activate(clase,event){
 	var opcion =document.getElementsByClassName(""+clase+"");
	for (var i = 0; i < opcion.length; i++) {
		opcion[i].classList.value="cnt-option "+clase;
	}
 		if (event.target.tagName == "IMG") {
		event.target.parentNode.classList.add("activated");
	}
 }