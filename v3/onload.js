window.liste = ["titi"];
	
window.onload = function(){
	

	var btnAction1= document.getElementById("bouton1");
	btnAction1.onclick = myFunction1;
	
	var btnAction2= document.getElementById("bouton2");
	btnAction2.onclick = myFunction2;
	
	var btnAction3= document.getElementById("bouton3");
	btnAction3.onclick = myFunction3;
	
	
	
	var btnAction4= document.getElementById("bouton4");
	btnAction4.onclick = myFunction4;
	
	
	var btnAction5= document.getElementById("bouton5");
	btnAction5.onclick = myFunction5;
	
	var btnAction6= document.getElementById("bouton6");
	btnAction6.onclick = myFunction6;
	
	document.getElementById("urlpage").innerHTML = window.location.href;

	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
		console.log("json brut");
			//var mydata= JSON.parse(this.responseText);		
			console.log(this.responseText);
			Plotly.newPlot('myDiv', eval(this.responseText));
    }
  }  
  xhttp.open("GET", "data.json", true);
  xhttp.send();



  
  
  
	
}


	

