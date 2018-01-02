
function myFunction2(){
	var age = document.getElementById("age");	
	 if (!age.checkValidity()) {
        document.getElementById("reponse2").innerHTML = age.validationMessage;
    } else {
    age = parseInt(age.value);
	age = age + 5;
	message = "Dans 5 ans, j'aurai "+age+" ans.";
	document.getElementById("reponse2").innerHTML = message;
    } 

	
}

function nouvelIndividu(nom, age){
var individu = {nom: nom, age: age, afficher: function() 
{return "L'individu s'appelle "+ nom +" et a "+age+" ans."}};
return individu;
}


function myFunction3() {
	var nom = document.getElementById("nom").value;
	var age = document.getElementById("age").value;
	age = parseInt(age);
	if ( !isNaN(age) && !nom == "") {
	ind = nouvelIndividu(nom,age);
	
	document.getElementById("individucomplet").innerHTML = ind.afficher();
	}
	else{
		var ind= "L'individu n'a pas pu être construit";
		document.getElementById("individucomplet").innerHTML = ind;
	}
	

	
}

function ajouterUnRandom(randomi){
	
	if( randomi==""){
	alert("Vous n'avez pas entré de texte");
	
	}
	
	else{
	liste.push(randomi);
	alert("Le random a été ajouté à la liste");
	console.log(liste)

	}
	
}


function myFunction4() {
	var randomi = document.getElementById("randomAAjouter").value;
	var message = ajouterUnRandom(randomi);
	document.getElementById("randomAjoute").innerHTML = message;
		}
		
function myFunction5(){
	var len=liste.length
	var random = Math.floor((Math.random()* len) + 0);	
	document.getElementById("ttrandom").innerHTML = "J'ai choisi aléatoirement "+random+
" ce qui correspond à "+ liste[random];

var patt = /tot/;
if(patt.test(liste[random])){
	document.getElementById("regEx").innerHTML = "L'élément contient 'tot'";
}
else{
document.getElementById("regEx").innerHTML = "L'élément ne contient pas 'tot'";
		}
}

function myFunction6(){
	location.reload();
}



		


	
	