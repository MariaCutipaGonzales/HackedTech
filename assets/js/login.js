 /*Signin*/
	
document.getElementById("empezar").addEventListener("click",function(e){
	var name=document.getElementById("name");
var lastname=document.getElementById("lastname");

	if (name.value.length >0 && lastname.value.length> 0) {
		window.location="acceso.html";
	}else{
		name.focus();
	}
	name.value="";
	lastname.value="";
});